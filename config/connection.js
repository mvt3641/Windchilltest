

var mongoose =require('mongoose');

mongoose.Promise = global.Promise;
var dbc;
// mongoose.Promise = Promise;
var connection = mongoose.connect("mongodb://localhost:27017/")
.then(function(){
console.log("database connected..");
});


  module.exports = connection;
