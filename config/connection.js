var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "passwordzrus",
    database: "burgers_db"
});

connection.connect(function(err, res)   {
    if (err) {console.log("Error connecting to " + err.stack);
    return;
}
    console.log("Connected on thread " + connection.threadId);
});

module.exports = connection;