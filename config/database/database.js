const mysql = require('mysql');
const dotenv = require('dotenv').config({path: '.env'})

const database = {
  getConnection(){
    return mysql.createConnection(process.env.JAWSDB_URL);
  }
}

module.exports = database;