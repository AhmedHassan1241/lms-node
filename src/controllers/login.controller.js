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
            //   var username = req.body.email,
            //       password = req.body.password;
            //   //sequelize check user
            //   await User.users
            //       .findOne({ where: { email: username, password: password } })
            //       .then(function (user) {
            //         if (!user) {
            //           res.redirect("/login");
            //         } else {
            //           req.session.user = user.dataValues;
            //           res.redirect("/");
            //         }
            //       });
            // } catch (error) {
            //   console.log(error)
            //   res.error(error.message, error.status);
            // }

            console.log("ttsst")


        } catch (er) {
            console.log(er)
        }
    }

};

module.exports = {...methods};
