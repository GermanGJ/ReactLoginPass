const cookieSession = require("cookie-session");
const express = require("express");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const cors = require("cors");
const app = express();

app.use(
    cookieSession({name:"session", keys:["lama"], maxAge: 24 * 60 * 100})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin:"https://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credential: true, 
}));

app.use("/auth", authRoute);

app.listen("5000", () => {
    console.log("Server is running!!!!");
});