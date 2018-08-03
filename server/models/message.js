const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  msg: {
    type: String,
    required: true,
    maxLength: 200
  },
  userId: {
    type: String
  },
  time: {
    type: Date,
    default: Date.now()
  }
});