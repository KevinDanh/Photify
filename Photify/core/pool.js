/**
 * Connection to the database.
 */
const util = require('util');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'PhotifyDB',
});

pool.getConnection((err, connection) => {
    if(err){
        console.error("Something went wrong connecting to the database...");
        throw err;
    }
    if(connection){
        console.log('Connected!');
        connection.release();
    }
    return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;