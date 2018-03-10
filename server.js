'use strict';
//server.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connect('mongodb://duytan:duytanduytan@ds249398.mlab.com:49398/dam-trade-system');

var stickers = mongoose.model('stickers', new Schema({ name: String }));

stickers.find({}, function(err, data)  { console.log(err, data); })
mongoose.connection.once('open', function(){
  console.log('Connect successfully!!!');

}).on('error', function(error){
  console.log('ERROR', error);
});

module.export = mongoose.nmodel('stickers', stickers);
