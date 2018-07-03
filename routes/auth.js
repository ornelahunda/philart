const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { user: req.user });
});

router.get('/login', function (req, res) {
    res.render('login');
});
router.post('/login', passport.authenticate('local'), function (req, res) {
    console.log("REQ BODY: " + res.body);
    // change
    res.redirect('/'); 
});

router.get('/register', function (req, res) {
    res.render('register');
});
router.post('/register', function (req, res) {
    User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
        if (err) {
            return res.render('error', { error: err });
        }
        passport.authenticate('local')(req, res, function () {
            // change
            res.redirect('/');
        });
    });
});

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});


router.get('/error', function (req, res) {
    res.render('error');
});

module.exports = router;