let bcrypt = require('bcrypt');
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
const models = require("../models/index.js");

module.exports = function (passport){
    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
        },
        async function (username, password, done) {
            try {
                await models.users.findOne({where: {email: username}}, async function (err, user) {
                    await console.log("testttt")
                    if (err) {
                        return done(err);
                    }
                    if (!user) {
                        return done(null, false);
                    }
                    console.log(username, "test")

                    return done(null, user);
                });
            } catch (err) {
                console.log(err)
            }
        }
    ));
}
