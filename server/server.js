var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();


app.use(express.static('__dirname'));
app.use(bodyParser.json());
app.listen(1234);
console.log('Listening on port 1234');

var db = mongoose.connect('mongodb://localhost/servertesting');
var db = mongoose.connection;

db.on('error', function(err) {
  console.log(err);
})

db.on('open', function() {

  var userSchema = {
    name: String,
    userId: String,
    numberOfPosts: Number,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }

  var User = mongoose.model('User', userSchema);

});