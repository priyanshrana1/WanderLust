const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError.js");


// ================= INDEX =================

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};


// ================= NEW FORM =================

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};


// ================= SHOW =================

module.exports.showListing = async (req, res) => {
  let { id } = req.params;

  const listing = await Listing.findById(id)
    .populate("owner")
    .populate("reviews");

  res.render("listings/show.ejs", { listing });
};


// ================= CREATE =================

module.exports.createListing = async (req, res) => {

  let url = req.file.path;
  let filename = req.file.filename;

  console.log(url, "..", filename);

  // Get coordinates from location
  const response = await fetch(
    `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(
      req.body.listing.location
    )}&access_token=${process.env.MAP_TOKEN}`
  );

  const data = await response.json();

  if (!data.features || data.features.length === 0) {
    throw new ExpressError(400, "Location not found");
  }

  const coordinates = data.features[0].geometry.coordinates;

  // Create listing
  const newListing = new Listing(req.body.listing);

  newListing.owner = req.user._id;

  newListing.image = {
    url,
    filename
  };

  // Save coordinates
  newListing.geometry = {
    type: "Point",
    coordinates: coordinates
  };

  await newListing.save();

  req.flash("success", "New Listing Created!");

  res.redirect("/listings");
};


// ================= EDIT FORM =================

module.exports.renderEditForm = async (req, res) => {

  let { id } = req.params;

  const listing = await Listing.findById(id);

  res.render("listings/edit.ejs", { listing });
};


// ================= UPDATE =================

module.exports.updateListing = async (req, res) => {

  let { id } = req.params;

  await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing }
  );

  req.flash("success", "Listing Updated!");

  res.redirect(`/listings/${id}`);
};


// ================= DELETE =================

module.exports.destroyListing = async (req, res) => {

  let { id } = req.params;

  await Listing.findByIdAndDelete(id);

  req.flash("success", "Listing Deleted!");

  res.redirect("/listings");
};