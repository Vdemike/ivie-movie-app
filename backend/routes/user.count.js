const express = require('express');
const router = express.Router();
const User = require('../models/user'); 

router.get('/users/count', async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.status(200).json({ count });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur serveur');
  }
});

module.exports = router;
