const express = require("express");
var path = require('path');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// 
// var path = require("path");
// const routes = require("./routes");

// models
// var db = require("./models");

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


app.use(cookieParser());

// Define middleware here
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(require("express-session")({
    secret: process.env.COOKIEHASH || 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


// Add routes, both APIs and view
const routes = require("./routes/auth-api");
const art_routes = require("./routes/art-api");
const collections_routes = require("./routes/collectionRoute");

app.use(routes);
app.use(art_routes);
app.use(collections_routes);


// 



// passport config
const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/passportdb");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    console.log(`🌎  ==> http://localhost:${PORT}`);
});