const mysql = require('mysql');

const database = {
  getConnection(){
    return mysql.createConnection({
      database: 'portfolio',
      host: 'localhost',
      user: 'root',
      password: ''
    })
  }
}

module.exports = database;