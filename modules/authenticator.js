/**
 * Created by ralemy on 9/11/16.
 * Initialization and authorization routines for passport
 */

const LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport, db) {
    passport.serializeUser(function (user, done) {
        done(null, user.name);
    });
    passport.deserializeUser(function (userName, done) {
        db.findUser(userName)
            .then(user=>done(null, user))
            .catch(err=>done(err, null));
    });

    passport.use("login", new LocalStrategy({
        passReqToCallback: true
    }, function (req, username, password, done) {
        db.findUser(username)
            .then(user => user.pass === password ? done(null, user) : q.reject())
            .catch(()=>done(null, false, req.flash("message", "Authentication failed")));
    }));

    return function (req, res, next) {
        if (req.isAuthenticated()) next();
        else res.redirect("/");
    };
};
