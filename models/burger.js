module.exports = function(sequelize, DataTypes) {
  let Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        defaultValue: false
      }
    }
  });
  return Burger;
};

// const orm = require("../config/orm.js");

// const burger = {
//   selectAll: function(callback) {
//     orm.selectAll("burgers", function(response) {
//       callback(response);
//     });
//   },
//   insertOne: function(columns, values, callback) {
//     orm.insertOne("burgers", columns, values, function(response) {
//       callback(response);
//     });
//   },
//   updateOne: function(objectColumnValues, condition, callback) {
//     orm.updateOne("burgers", objectColumnValues, condition, function(response) {
//       callback(response);
//     });
//   }
// };

// module.exports = burger;
