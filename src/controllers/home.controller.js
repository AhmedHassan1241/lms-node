require('dotenv').config();

const methods = {
    async getCourses(req, res){
        try {
            res.render("faculty/list.ejs", {faculty : []})
        } catch (error) {
            res.error(error.message, error.status)
        }
    }
}

module.exports = { ...methods }