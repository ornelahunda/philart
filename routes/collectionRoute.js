const axios = require('axios');
const express = require('express');
const Collections = require('../models/collections');
const Artwork = require('../models/art');
const User = require('../models/user');

const router = express.Router();


// router.get('/collections', function (req, res) {
//     // console.log("COLLECTIONS HIT ON BACK END!");
//     if (req.collections) {
//         res.json({ collections: req.collections });
//         // console.log(collections);
//     }
//     else {
//         res.json(false);
//     }
// });

router.post("/add/collections", function (req, res) {
    console.log('Post Route req.body.id: ' + req.body.userId);
    User.findOneAndUpdate({ _id: req.body.userId }, { $push: { mycollection: req.body.artworkId } }, { new: true })
    .then(function (User) {
        console.log("Success: " + User);
        res.json(User);
    })
    .catch(function (err) {
        res.json(err);
    })
});

router.post("/get/collections", function (req, res) {
    console.log('get collections req.body: ' + req.body.userId)
    User.findById(req.body.userId, (err, dbUser) => {
        if (err) {
            return res.json(err);
        }
        console.log('user: ' + dbUser)
    })
    .populate("mycollection")
    .then(userCollection => {
        console.log('user collection: ' + userCollection)
        res.json(userCollection);
    }) 
    .catch(err => res.json(err));

});

//     Artwork.findById(req.params.id, (err, dbArtwork) => {
//         if (err) {
//             return res.json(err);
//         }
//         res.json(dbArtwork);
//     });
//     //   .populate("mycollection")
//       .then(function (userCollection) {
//         console.log("populating: " + userCollection);
//         res.json(userCollection);
//       })
//       .catch(function(err) {
//         res.json(err);
//       });
//   });


// router.get('/artwork/:id', (req, res) => {
//     Collections.save(req.params.id, (err, dbCollections) => {
//         if (err) {
//             return res.json(err);
//         }
        
//         res.json(dbCollections);
//         console.log(res.json);
//     } );
// });


module.exports = router;