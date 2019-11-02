//引入mysql
const mysql = require('mysql');
//定义模块的connection()去链接
const connection = mysql.createConnection({
    host: 'localhost',
    localAddress: '127.0.0.1',
    user: 'root',
    password: 'aa.112233',
    database: 'aann'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

module.exports = connection;