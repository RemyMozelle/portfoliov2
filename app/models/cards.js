const database = require('../../config/database/database');

const cards = {
  listCards(){
    return new Promise((resolve, reject) => {
      database.getConnection().query('select * from cards', (error, cards) => {
        error ? reject(error) : resolve(cards)
      })
    })
  }
}

module.exports = cards;