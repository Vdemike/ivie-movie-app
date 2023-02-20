const mongoose = require('mongoose');
const express = require('express');
const app = express();
const axios = require('axios')

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
var corsOptions = {
  origin: "http://localhost:3000"
}

require("dotenv").config();

const User = require('./models/user');
const movieRoutes = require('./routes/movies');


const jwt = require('jsonwebtoken');






//DB connection 
mongoose.connect(
  `mongodb+srv://ivie:Becode@cluster0.rayo4nz.mongodb.net/Users?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
mongoose.set('strictQuery', true);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("DB Connected successfully");
});



// Use parsing middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true}));



// routes import
const userRoutes = require('./routes/user');
const signinRouter = express.Router();
const signoutRouter = express.Router();



// using routes
app.use('/api', userRoutes); // = localhost:3000/api/signup
app.use('/signin', signinRouter);
app.use('/signout', signoutRouter);
app.use('/movies', movieRoutes);

signinRouter.use(function(req, res, next) {
  console.log('Received sign in request');
  res.json("Welcome to Sign In");
  next();
});

signinRouter.post('/', (req, res, next) => {
  const {email, password} = req.body;

  User.findOne({email}, (err, user) => {
    if(err || !user) {
      return res.status(400).json({
        error: "Email was not found"
      });
    }

    //Authenticate user
    if(!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email and password do not match"
      });
    }

    //Create token
    const token = jwt.sign({_id: user._id}, process.env.SECRET);

    //Put token in cookie
    res.cookie('token', token, {expire: new Date() + 1 });

    //Send response to front end
    const {_id, name, email} = user;
    return res.json({
      token,
      user: {
        _id,
        name,
        email
      }
    });
  });
});


signoutRouter.get('/', (req, res, next) => {
  res.clearCookie('token');
  return res.json({ message: 'User signed out successfully' });
});



// Starting server
const port = 3000
app.listen(port, () =>{
  console.log(`App is running at ${port}`)
})

