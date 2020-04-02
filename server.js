const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 8080;
const app = express();
const db = require("./models");

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd/api+json' }));

app.use(methodOverride("_method"));

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

require ("./routes/api-routes.js")(app);

db.sequelize.sync({force: false}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});