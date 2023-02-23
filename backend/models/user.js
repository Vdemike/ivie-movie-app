const mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require('uuid');
const { ObjectId } = mongoose.Schema;
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    encry_password: {
      type: String,
      maxlength: 64,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    pseudo: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    birthDate: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    subscriptions: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    cardOwner: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    cardType: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    cardNumber: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    picture: {
      type: String,
      required: true,
      maxlength: 64,
      trim: true,
    },
    verification_code: {
      type: Number,
      default: null,
    },
    salt: String,
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
) ;

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv4();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function (plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  }, 
};

module.exports = mongoose.model("User", userSchema);