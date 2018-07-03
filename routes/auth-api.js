const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

router.get('/auth/check', function (req, res) {
    if (req.user) {
        res.json({ user: req.user });
    }
    else {
        res.json(false);
    }
});

router.post('/auth/login', passport.authenticate('local'), function (req, res) {
    res.json(true);
});

router.post('/auth/register', function (req, res) {
    User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            return;
        }
        passport.authenticate('local')(req, res, function () {
            res.json(true);
        });
    });
});

router.get('/auth/logout', function (req, res) {
    req.logout();
    res.json(true);
});


module.exports = router;