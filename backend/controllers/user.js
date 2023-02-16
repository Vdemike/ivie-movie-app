const User = require('../models/user')
const {validationResult} = require('express-validator')
const user = require('../models/user')
var jwt = require('jsonwebtoken')
var expressJwt = require('express-jwt')

exports.signup = (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.array()[0].msg
        })
    }

    const user = new User(req.body)
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                err: "Unable to add user"
            })
        }
        return res.json({
            message: "Success",
            user
        })
    })
}

exports.signin = (req, res) => {
    const {email, password} = req.body

    User.findOne({email}, (err, user) => {
        if(err || !email) {
            return res.status(400).json({
                error: "Email was not found"
            })
        }

        //Authenticate user
        if(!user.authenticate(password)) {
            return res.status(400).json({
                error: "Email and password do not match"
            })
        }

        //Create token
        const token = jwt.sign({_id: user._id}, process.env.SECRET)

        //Put token in cookie
        res.cookie('token', token, {expire: new Date() + 1 })

        //Send response to front end
        const {_id, name, email} = user
        return res.json({
            token,
            user: {
                _id,
                name,
                email
            }
        })
    })
 }


exports.signout = (req, res) => { 
    res.clearCookie("token")
    return res.json({
        message: "User signout successful"
    })
}