const db = require("../models");

module.exports = function(app) {
    app.get("/", function(request, response) {
        db.Burger.findAll({}).then(function(result) {
            return response.render('index', {burgers: result});
        });
    });

    app.post("/", function(request, response) {
        db.Burger.create({
            burger_name: request.body.burger_name,
            devoured: request.body.devoured
        }).then(function() {
            response.redirect('/');
        });
    });

    app.put("/:id", function(request, response) {
        db.Burger.update(
            {devoured: 1},
            {where: {
                id: request.params.id
            }}
        ).then(function() {
            response.redirect('/');
        });
    });
};