const cookieSession = require("cookie-session");
const express = require("express");
const app = express();

app.use(
    cookieSession({name:"session", keys:["lama"], maxAge: 24 * 60 * 100})
);

app.listen("5000", () => {
    console.log("Server is running!!!!");
});