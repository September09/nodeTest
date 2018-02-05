var easyMySQL = require('easy-mysql');

var settings = {
    host: "localhost",
    user: 'root',
    password: 'root123',
    port: '3306',
    database: 'mydatabase',
};

var connection = easyMySQL.connect_with_easy_pool(settings);
module.exports = connection;