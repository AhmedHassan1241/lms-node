const Service = require("../services/users.service");
const {Validator} = require("node-input-validator");
var session = require("express-session");
require("dotenv").config();

const methods = {
    async getUsers(req, res) {
        try {
            if (req.session.user && req.cookies.user_sid) {
                //  console.log(req.session.user.password);
                const stuData = await db.csisStudent.findOne({
                    where: {uid: req.session.user.uid},
                });

                await db.users
                    .findOne({where: {email: req.session.user.email}})
                    .then(function (user) {
                        // console.log(user);
                        if (!user) {
                            res.redirect("/");
                        } else {
                            res.render("users/student.ejs", {
                                currentUser: req.session.user,
                                userData: user,
                                studentData: stuData
                            });
                        }
                    });
            } else {
                res.redirect("/login");
            }
        } catch (error) {
            res.error(error.message, error.status);
        }
    },

    async createUser(req, res) {
        try {
            res.render("users/create.ejs", {currentUser: null});
        } catch (err) {
            res.error(err, err.status)
        }
    },

    async saveUser(req, res) {
        try {
            const user = Service.saveUser(req, res);
            res.redirect("users/create");
        } catch (err) {
            console.log("error", err)
            res.error(err, err.status)
        }
    }
};

module.exports = {...methods};
