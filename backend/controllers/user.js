const User = require('../models/user')
const {validationResult} = require('express-validator')
var jwt = require('jsonwebtoken')
var expressJwt = require('express-jwt')

exports.signup = (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.array()[0].msg
        })
    }

    const user = new User({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        pseudo: req.body.pseudo,
        birthDate: req.body.birthDate,
        subscriptions: req.body.subscriptions,
        cardOwner: req.body.cardOwner,
        cardType: req.body.cardType,
        cardNumber: req.body.cardNumber,
    });

    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occured while creating the User"
            });
        });
    };

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