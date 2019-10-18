const configRouter = require("../routes/config");

module.exports = app =>{
    app.use('/', configRouter())
}