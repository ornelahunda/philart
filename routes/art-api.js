const axios = require('axios');
const express = require('express');
const Artwork = require('../models/art');
const router = express.Router();

// Route to call api to grab artwork
router.get('/art/callapi', (req, res) => {
     
    axios.get('http://www.philart.net/api/art/8.json')
        .then((response) => {

            //console.log(response);
            // console.log(response.data.body);

            let artwork = {};

            artwork.artist = response.data.body.artists[0].name;
            artwork.title = response.data.body.title.display;
            artwork.imageurl = response.data.body.pictures[0].large.url;
            artwork.lat = response.data.body.location.latitude;
            artwork.lng = response.data.body.location.longitude;

            Artwork.findOneAndUpdate(
                {title: response.data.body.title.display}, 
                artwork, 
                {upsert: true, new: true, runValidators: true})
                .then((dbArtwork) => {
                    // console.log(dbArtwork);
                })

            return res.json(artwork)

        })
        .catch(err => {
            return res.json(err);
        });
});

// TODO: Route to call database to retrieve artwork
router.get('/art/getart', (req, res) => {
    // console.log('getting arwork from db')
    Artwork.find({})
    .then((dbArtwork) => {
        // console.log(dbArtwork);
        res.json(dbArtwork);
    })
    .catch(err => {
        return res.json(err);
    })
})

module.exports = router;