const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema({

    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    image: {
        url: String,
        filename: String,
    },

    price: {
        type: Number,
        required: true
    },

    location: {
        type: String,
    },

    geometry: {
        type: {
            type: String,
            enum: ["Point"],
            required: true
        },

        coordinates: {
            type: [Number],
            required: true
        }
    },

    country: {
        type: String
    },

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        },
    ],

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;