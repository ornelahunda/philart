const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const ArtworkSchema = new Schema({
    
    artist: String,
    title: String,
    imageurl: String,
    lat: String,
    lng: String,

});

// This creates our model from the above schema, using mongoose's model method
const Artwork = mongoose.model("Artwork", ArtworkSchema);

// Export the Note model
module.exports = Artwork;


