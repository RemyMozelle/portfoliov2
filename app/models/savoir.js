const database = require('../../config/database/database');

const savoir = {
  listSavoir(){
    return new Promise((resolve, reject) => {
      database.getConnection().query('select title, description from savoir_faire', (error, savoir) => {
        error ? reject(error) : resolve(savoir)
      })
    })
  }
}

module.exports = savoir;