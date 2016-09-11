var express = require('express');
var router = express.Router();

module.exports = function (passport) {
    router.get('/', function (req, res) {
        res.render('index', {flash: req.flash("message")[0], title: 'Parking Monitor', angularApp: "parkApp"});
    });

    router.post('/login', passport.authenticate('login', {
        successRedirect: '/app/',
        failureRedirect: '/',
        failureFlash: true
    }));

    router.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });
    return router;
};

