let connection = require("../config/connection.js")

let orm = {
    selectAll: function (tableInput, callback) {
        //console.log("orm.all" )
        connection.query(`SELECT * FROM ${tableInput};`, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
            console.log(result);
        })
    },
    createBurger: function (table, burgerName, callback) {
        connection.query(`INSERT INTO ${tableInput} SET ?`, {
            burger_name: burgerName,
            devoured: false,
        }, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
            console.log(result);
        })
    },
    updateBurger: function (table, burgerID, callback) {
        connection.query(`INSERT INTO ${tableInput} SET ? WHERE`, [{ devoured: true }, { id: burgerID }], function (err, result) {
                if (err) {
                    throw err;
                }
                callback(result);
                console.log(result);
            })
    }
};


module.exports = orm;