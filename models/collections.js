const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const CollectionsSchema = new Schema({

    artworks:[{ 
        type: Schema.Types.ObjectId,
        ref: "Artwork"
    }
    ],
    
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

});

// This creates our model from the above schema, using mongoose's model method
const Collections = mongoose.model("Collections", CollectionsSchema);

// Export the Note model
module.exports = Collections;
