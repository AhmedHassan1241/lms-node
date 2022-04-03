
const models = require("../models/index.js");
var passport = require('passport');
var LocalStrategy = require('passport-local');
var bcrypt = require('bcrypt');

module.exports = function (passport) {
    passport.use(
        new LocalStrategy(
            {
                usernameField: 'email',
            },
            function verify(username, password, cb) {
                console.log("ttttttttttyyyyyyyyyyyyyy")
                // let user =  models.users.findOne({where: {email: username}}, async function (err, user) {
                    if (err) {
                        return cb(err);
                    }
                    if (!user) {
                        return cb(null, false, {message: 'Incorrect username or password.'});
                    }


                    return cb(null, user);
                    // });
                // });
            }));
}