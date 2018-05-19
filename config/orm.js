var connection = require("./connection.js");

var orm = {
    selectAll: function(results)    {
        connection.query("SELECT * FROM burgers", function(err, res)    {
            if(err) throw err;
            return res;
        });
    },
    insertOne: function(burger_name, result)    {
        connection.query("INSERT INTO burgers SET ?", {
            burger_name: burger_name,
            dovoured: false,
        },
            function(err, results)  {
                if (err) throw err;
                return results;
            });
    },
    updateOne: function(burger1, result) {
        connection.query("UPDATE burgers SET ? WHERE ?", [{ dovoured: true}, { id: burger1}], function(err, res) {
            if (err) throw err;
            return result;
        });
    }
};

module.exports = orm;
    // *code goes here - exercise 13??

    // insertOne: function()
    // *code goes here

    // addOne: function()
    // *code goes here


module.exports = orm;