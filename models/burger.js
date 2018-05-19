var orm = require("../config/orm.js");

var burger = {
    selectAll: function(results)    {
        orm.selectAll(function(res) {
            return res;
        });
    },
    insertOne: function(burger_name, result) {
        orm.insertOne(burger_name, function(res)    {
            return res;
        });
    },

    updateOne: function(burger1, result) {
        orm.updateOne(burger1, function(res) {
            return res;
        });
    }
    // selectAll: 
    // *functions go here - exercise 18??
};

module.exports = burger;