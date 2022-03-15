const Service = require("../services/users.service");
const {Validator} = require("node-input-validator");
var session = require("express-session");
require("dotenv").config();

const methods = {
    async getUsers(req, res) {
        try {
            // const v = new Validator(
            //           req.body,
            //     {
            //         'imageDetails': 'required|object',
            //         'imageDetails.startPoint.x': 'required|numeric',
            //         'imageDetails.startPoint.y': 'required|numeric',
            //         'imageDetails.width': 'required|numeric',
            //         'imageDetails.height': 'required|numeric',
            //         'imageDetails.angle': 'required|numeric',
            //     },
            // );
            //
            // if (v.fails()) {
            //     if (!(Object.keys(v.errors).length === 0 && v.errors.constructor === Object))
            //          res.status(400).render()
            // }

            // let result =  await Service.getUsers()
            // console.log("res", result)

            res.render("users/student.ejs", {currentUser: req.session.user});
        } catch (error) {
            console.log(error.message);
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
            res.redirect("users/create", {currentUser: null});
        } catch (err) {
            console.log(err)
            res.error(err, err.status)
        }
    }
};

module.exports = {...methods};
