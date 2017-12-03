const database = require('../../config/database/database');

const menu = {
  listMenu(){
    return new Promise((resolve, reject) => {
      database.getConnection().query('select name, url from menu', (error, menu) => {
        error ? reject(error) : resolve(menu)
      })
    })
  }
}

module.exports = menu;