const express = require("express");
const router = express.Router();
const passport = require('passport');
let bcrypt = require('bcrypt');
let LocalStrategy = require('passport-local').Strategy;
const models = require("../../../models/index.js");


var session = require("express-session");

// const user = require('../../../models/user');
const login_controller = require('../../controllers/login.controller')
// const check_controller = require('../../controllers/loginCheck.controller')
const app = express();
// app.use((req, res, next) => {
//     if (req.cookies.user_sid && !req.session.user) {
//         res.clearCookie("user_sid");
//     }
//     next();
// });
// var sessionChecker = (req, res, next) => {
//     if (req.session.user && req.cookies.user_sid) {
//         res.redirect("/");
//     } else {
//         next();
//     }
// };

// passport.use(new LocalStrategy(
//     {
//         usernameField: 'email',
//     },
//     async function (username, password, done) {
//         try {
//             await models.users.findOne({where: {email: username}}, async function (err, user) {
//                 await console.log("testttt")
//                 if (err) {
//                     return done(err);
//                 }
//                 if (!user) {
//                     return done(null, false);
//                 }
//                 console.log(username, "test")
//
//                 return done(null, user);
//             });
//         } catch (err) {
//             console.log(err)
//         }
//     }
// ));

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

router.get("/", login_controller.getLogin);
router.post('/', passport.authenticate('local', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
    failureMessage: true
}));

router.get('/login-success', (req, res, next) => {
    res.send('<p>You successfully logged in. --> <a href="/protected-route">Go to protected route</a></p>');
});

router.get('/login-failure', (req, res, next) => {
    res.send('You entered the wrong password.');
});

passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, {id: user.id, username: user.username});
    });
});

passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});

module.exports = router;
