// Created methods that will execute the necessary MySQL commands in the controllers. These methods are needed in order to retrieve and store data in the database.

// Import MySQL connection.
const connection = require("../config/connection.js");

// Create an empty array where the function will loop through the question marks and then return the array to a string.
function createQmarks(questionNumbers) {
    const arr = [];
    for(var i = 0; i < questionNumbers; i++) {
        arr.push("?");
    }
    return arr.toString();
};

// Creating a (helper) function that will translate the string (from the array) into SQL readable query.
function translateSql(ob) {
    const arr = [];
    for(var key in ob) {
        const value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            // The if loop creates the string and concatenates the values.
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
};

const orm = {
    selectAll: function(table, cb) {
        const dbQuery = "SELECT * FROM " + table + ";";
        connection.query(dbQuery, function(err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        const dbQuery = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ") ";
        console.log(dbQuery);
        connection.query(dbQuery, function(err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        const dbQuery = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition;
        console.log(dbQuery);
        connection.query(dbQuery, function(err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },
    deleteOne: function(table, condition, cb) {
        const dbQuery = "DELETE FROM " + table + " WHERE " + condition;
        console.log(dbQuery);
        connection.query(dbQuery, function(err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;