require("dotenv").config();

const methods = {
    async getLogin(req, res) {
        try {
            res.render("Login/login.ejs");
        } catch (error) {
            res.error(error.message, error.status);
        }
    },
    async getUser(req, res) {
        try {
            return res.redirect("/login");
        } catch (er) {
            console.log(er)
        }
    },
    async login(req, res) {
        res.redirect('/');
    },
    async logout(req, res) {
        req.logout()
        res.redirect("/login")
    }

};

module.exports = {...methods};
