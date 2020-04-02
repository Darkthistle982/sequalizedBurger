const connection = require("../config/connection.js");

function printQuestionMarks(number) {
  var arr = [];
  for (var i = 0; i < number; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

orm = {
  selectAll: function(tableInput, callback) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(error, result) {
      if (error) {
        throw error;
      }
      callback(result);
    });
  },
  insertOne: function(table, columns, values, callback) {
    let queryString = `INSERT INTO ${table} (${columns.toString()}) VALUES (${printQuestionMarks(
      values.length
    )})`;
    connection.query(queryString, values, function(error, result) {
      if (error) {
        throw error;
      }
      callback(result);
    });
  },
  updateOne: function(table, objectColumnValues, condition, callback) {
    let queryString = `UPDATE ${table} SET ${objToSql(
      objectColumnValues
    )} WHERE ${condition}`;
    connection.query(queryString, function(error, result) {
      if (error) {
        throw error;
      }
      callback(result);
    });
  }
};

module.exports = orm;
