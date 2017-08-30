'use strict';

var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    listings = require('./listings.json'),
    config = require('./config');

var listingsModelList = [];
listings.entries.forEach(function(entry) {
  listingsModelList.push(new Listing(entry));
});

mongoose.connect(config.db.uri).then(function() {
  console.log("Connection opened");
  return Listing.insertMany(listingsModelList);
}).then(function() {
  console.log("Connection closed");
  mongoose.connection.close();
});