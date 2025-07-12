const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },

  location: {
    type: String,
    trim: false,
    default: "",
  },

  skillsOffered: {
    type: [String],
    default: [],
  },

  skillsWanted: {
    type: [String],
    default: [],
  },

  availability: {
    type: [String], // Example: ["weekends", "evenings", "Monday"]
    default: [],
  },

  isPublic: {
    type: Boolean,
    default: true,
  },

}, { timestamps: true });

const User = mongoose.model('User', userSchema, 'User');

module.exports = User;
