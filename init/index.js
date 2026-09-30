
const mongoose = require("mongoose");

const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://priyanshrana1_db_user:TjHamPAfE9qUtOxO@cluster0.smmwnvp.mongodb.net/";


main()
  .then(() => {
    console.log("connected to DB");
    return initDB();
  })
  .then(() => {
    console.log("data was initialized");
    return mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });


async function main() {
  await mongoose.connect(MONGO_URL);
}


const initDB = async () => {

  await Listing.deleteMany({});

  await Listing.insertMany(initData.data);

};

