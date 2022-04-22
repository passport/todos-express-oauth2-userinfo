var express = require('express');
var passport = require('passport');
var OAuth2UserInfoStrategy = require('passport-oauth2-userinfo').Strategy;


passport.use(new OAuth2UserInfoStrategy({
  authorizationURL: 'http://localhost:8080/oauth2/authorize',
  tokenURL: 'http://localhost:8080/oauth2/token',
  userProfileURL: 'http://localhost:8080/openidconnect/userinfo',
  clientID: process.env['CLIENT_ID'],
  clientSecret: process.env['CLIENT_SECRET'],
  callbackURL: 'http://localhost:3000/oauth2/redirect'
}, function verify(accessToken, refreshToken, profile, cb) {
  return cb(null, profile);
}));

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username, name: user.displayName });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});


var router = express.Router();

router.get('/login', passport.authenticate('oauth2'));

router.get('/oauth2/redirect', passport.authenticate('oauth2', {
  successReturnToOrRedirect: '/',
  failureRedirect: '/login'
}));

router.post('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
