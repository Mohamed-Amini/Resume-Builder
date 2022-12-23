const mysql = require('mysql2');

const dbConnection = mysql.createPool({
    host: 'localhost',
    user: 'madara',
    password: 'Meliodas223',
    database: 'nodejs'
});

module.exports = dbConnection.promise();