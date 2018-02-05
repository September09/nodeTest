const mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root123',
    port: '3306',
    database: 'mydatabase',
});
connection.connect();

const sql = 'SELECT * FROM websites';

connection.query(sql, (err, result) => {
   if (err) {
       console.log('[SELECT ERROR] - ',err.message);
       return;
   }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});

connection.end();