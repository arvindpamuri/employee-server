const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 100, //important
    host: 'employeeserver-aravind.mysql.database.azure.com',
    user: 'aravind@employeeserver-aravind',
    password: 'Pamoori@123',
    database: 'CRM',
    debug    :  false
});

module.exports = pool;