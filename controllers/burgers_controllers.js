const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(request, response) {
  burger.selectAll(function(data) {
    let burgerObject = {
      burgers: data
    };
    response.render("index", burgerObject);
  });
});

router.post("/", function(request, response) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [request.body.burger_name, request.body.devoured],
    function() {
      response.redirect("/");
    }
  );
});

router.put("/:id", function(request, response) {
  let condition = "id = " + request.params.id;
  burger.updateOne(
    {
      devoured: request.body.devoured
    },
    condition,
    function() {
      response.redirect("/");
    }
  );
});

module.exports = router;