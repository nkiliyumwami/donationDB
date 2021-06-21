//Import the module
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/donationsDB';

//import the model/module
const Donation = require('./models/donation');

//Connect to MongoDB
mongoose.connect(url, 
    {   useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true    
    })
.then(() => console.log(`Connected to MongoDB...`))
.catch(err => console.error(`Could not connect to MongoDB..`, err));

//Create a donation: Async Operations
async function createDonation() {
    const donation = new Donation({
        name: 'HP COMPUTER 55 4K',
        categories: ['Electronics', 'Devices'],
        isUsed: false
 });

 //Save a donation to the database 
  const result = await donation.save();
  console.log(result);
}

//Get donations: queries
async function getDonations() {
    const donations = await Donation
    .find({name: 'BIKE', isUsed: false})
    .limit(10)
    .sort({name: 1})
    .select({name: 1, categories: 1});
    console.log(donations);
} 


// createDonation();
getDonations();
 