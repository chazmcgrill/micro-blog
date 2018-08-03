const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/micro-blog', {
  useNewUrlParser: true,
  keepAlive: true
});

module.exports.User = require('./user');
module.exports.Message = require('./message');