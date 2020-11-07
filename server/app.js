const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
require("./db/mongodb");

const app = express();
const httpServer = http.createServer(app);

// Middleware
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("trust proxy", 1);
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	})
);
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user");
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Static folders
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));

// Routes
app.use("/users", require("./routes/users"));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = { app, httpServer };
