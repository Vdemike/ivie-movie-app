
const express = require('express')
const { signin, signout } = require('../controllers/user')
const {check}  = require('express-validator');
const { body, validationResult } = require('express-validator');
const router = express.Router()
const User = require('../models/user')

router.post('/signup', [
    body('firstName').isString().notEmpty(),
    body('lastName').isString().notEmpty(),
    body('pseudo').isString().notEmpty(),
    body('subscriptions').isString().notEmpty(),
    body('cardOwner').isString().notEmpty(),
    body('cardType').isString().notEmpty(),
    body('cardNumber').isString().notEmpty(),
    body('password').isString().notEmpty(),
    body('email').isString().notEmpty(),
    body('birthDate').isString().notEmpty(),

  ], async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { firstName, lastName, pseudo, subscriptions, cardOwner, cardType, cardNumber, password, email, birthDate, picture } = req.body;
  
    try {
      // Check if user with the given pseudo already exists
      const existingUser = await User.findOne({ pseudo });
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }
  
      // Create a new user with the given data
      const newUser = new User({ firstName, lastName, pseudo, subscriptions, cardOwner, cardType, cardNumber, password, email, birthDate, picture });
      await newUser.save();
  
      res.status(201).json({ message: 'User created successfully' });
      console.log("User created succesfully");
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

router.post('/signin', signin)

router.get("/signout", signout)

router.put("/profile-picture",  (req, res) => {
  const userId = req.user._id;
  const picture = req.body.picture;

  User.findByIdAndUpdate(
    userId,
    { picture: picture },
    { new: true },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to update profile picture",
        });
      }

      return res.json({
        message: "Profile picture updated successfully",
      });
    }
  );
});


module.exports = router;