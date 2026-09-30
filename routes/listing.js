const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");

const { isLoggedIn } = require("../middleware.js");

const listingController = require("../controllers/listing.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

console.log("wrapAsync:", typeof wrapAsync);
console.log("showListing:", typeof listingController.showListing);


// Validation middleware
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }

  next();
};

// INDEX
router.get(
  "/",
  wrapAsync(listingController.index)
);


// NEW
router.get(
  "/new",
  isLoggedIn,
  listingController.renderNewForm
);


// SHOW
router.get(
  "/:id",
  wrapAsync(listingController.showListing)
);


// CREATE
router.post(
  "/",
  isLoggedIn,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.createListing)
);


// EDIT
router.get(
  "/:id/edit",
  isLoggedIn,
  wrapAsync(listingController.renderEditForm)
);





module.exports = router;