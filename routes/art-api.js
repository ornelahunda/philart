const axios = require('axios');
const express = require('express');
const Artwork = require('../models/art');
const router = express.Router();


// Route to call api to grab artwork

router.get('/art/callapi', (req, res) => {
console.log("route hit");




    // const axios = require('axios');
    function makeRequestsFromArray(arr) {
        let index = 0;
        console.log("function test1");
       

         request();



        function request() {
            console.log("ugh");
            return axios.get('http://www.philart.net/api/art/' + index + '.json').then((response) => {
                let artwork = {};
                console.log("function test");
                artwork.artist = response.data.body.artists[0].name;
                artwork.title = response.data.body.title.display;
                artwork.imageurl = response.data.body.pictures[0].large.url;
                artwork.lat = response.data.body.location.latitude;
                artwork.lng = response.data.body.location.longitude;

                Artwork.findOneAndUpdate(
                    { title: response.data.body.title.display },
                    artwork,
                    { upsert: true, new: true, runValidators: true })
                    .then((dbArtwork) => {
                        // console.log(dbArtwork);
                    });
                index++;
                console.log(index);
                if (index >= arr.length) {
                    return 'done';
                }
                return request();
            })

                .catch(err => {
                    console.log("There was an error");
                   index++;
                    return request();
                });
        };
    };

    makeRequestsFromArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]);
});




// router.get('/art/callapi', (req, res) => {

//     axios.get('http://www.philart.net/api/art/8.json')
//         .then((response) => {

//             //console.log(response);
//             // console.log(response.data.body);

//             let artwork = {};

//             artwork.artist = response.data.body.artists[0].name;
//             artwork.title = response.data.body.title.display;
//             artwork.imageurl = response.data.body.pictures[0].large.url;
//             artwork.lat = response.data.body.location.latitude;
//             artwork.lng = response.data.body.location.longitude;

//             Artwork.findOneAndUpdate(
//                 {title: response.data.body.title.display}, 
//                 artwork, 
//                 {upsert: true, new: true, runValidators: true})
//                 .then((dbArtwork) => {
//                     // console.log(dbArtwork);
//                 })

//             return res.json(artwork)

//         })
//         .catch(err => {
//             return res.json(err);
//         });
// });

// Route to call database to retrieve artwork
router.get('/art/getart', (req, res) => {
    Artwork.find({})
        .then((dbArtwork) => {
            res.json(dbArtwork);
        })
        .catch(err => {
            return res.json(err);
        })
})

// Route to call database to retrieve specific work of art
router.get('/artwork/:id', (req, res) => {
    Artwork.findById(req.params.id, (err, dbArtwork) => {
        if (err) {
            return res.json(err);
        }
        res.json(dbArtwork);
    });
})

module.exports = router;