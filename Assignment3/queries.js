/* Fill out these functions using Mongoose queries*/
'use strict';

var mongoose = require('mongoose'), 
    config = require('./config'),
    Listing = require('./ListingSchema.js');

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  return Listing.findOne({ code: "LBW"}).then(function(data) {
    console.log(data);
    return Promise.resolve();
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  return Listing.findOneAndRemove({ code: "CABL" }).then(function(data) {
    console.log(data);
    return Promise.resolve();
  });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  return Listing.findOneAndUpdate({ code: "PHL" }, { $set: { address: "Phelps Lab, Gainesville, FL 32603" } }, { new: true }, function(err, data) {
    console.log(data);
    return Promise.resolve();
  });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  return Listing.find({}).then(function(data) {
    console.log(data);
    return Promise.resolve();
  });
};

mongoose.connect(config.db.uri).then(function() {
  console.log("Connection opened");
  
  Promise.all([findLibraryWest(), removeCable(), updatePhelpsLab(), retrieveAllListings()]).then(function() {
    console.log("Connection closed");
    mongoose.connection.close();
  });
});