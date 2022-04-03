module.exports = function authenticate(req, res, next) {
    console.log("auth", req.isAuthenticated())
    console.log("auth", req.session.passport)
    // req.logout();
    console.log("auth", req.session)

    console.log("ddd", req.isAuthenticated())
    if (req.isAuthenticated())
        return next()
    res.redirect("/login")
}