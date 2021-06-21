//Import mongoose
const mongoose = require('mongoose');

//Create a schema 
const donationSchema = new mongoose.Schema({
    name: String,
    categories: [ String ],
    date: {type: Date, default: Date.now()},
    isUsed: Boolean
});

//Create a model from the schema
const Donation = mongoose.model('Donation', donationSchema);


//Export the module/model to be used in index.js or elsewhere
module.exports = Donation;