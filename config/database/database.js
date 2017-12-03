const mysql = require('mysql');

const database = {
  getConnection(){
    return mysql.createConnection({
      database: process.env.database,
      host: process.env.host,
      user: process.env.user,
      password: process.env.password
    })
  }
}

module.exports = database;