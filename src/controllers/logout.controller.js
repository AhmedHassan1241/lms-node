require("dotenv").config();

const methods = {
    async logout(req, res) {
        console.log("tttttttttttttttt")
        req.logout()
        res.redirect("/login")
    }

};

module.exports = {...methods};
