const express = require("express");
const router = express.Router();
const passport = require('passport');
let bcrypt = require('bcrypt');
let LocalStrategy = require('passport-local').Strategy;
const models = require("../../../models/index.js");


const login_controller = require('../../controllers/login.controller')
const app = express();

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
    },
    async function (username, password, done) {
        try {
            // check if this user with entered email exists
            let user = await models.users.findOne({where: {email: username}});
            if (!user) {
                return done(null, false);
            }

            // check if found user's password match the entered one
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                return done(null, user);
            }
            return done(null, false);
        } catch (err) {
            console.log(err)
        }
    }
));

router.get("/", login_controller.getLogin);
router.post('/',
    passport.authenticate('local', {failureRedirect: '/login'}),
    login_controller.login);

passport.serializeUser(function (user, done) {
    process.nextTick(function () {
        done(null, {id: user.id, name: user.name});
    });
});

passport.deserializeUser(function (user, done) {
    process.nextTick(function () {
        return done(null, user);
    });
});

router.get("/logout", login_controller.logout);

module.exports = router;
