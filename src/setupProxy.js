const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/newsarticle", {
            target: "https://www.sti.edu/alumniapi/api",
            changeOrigin: true
        })
    );
};