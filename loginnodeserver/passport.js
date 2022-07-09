const passport = require('passport');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = "200185081150-r5oc8qbcqhjqqvi87q5v482dlocs0fm9.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile);
    //const user = {
    //  username: profile.displayName,
    //  avatar: profile.photos[0],
    //};
  }
));

passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})