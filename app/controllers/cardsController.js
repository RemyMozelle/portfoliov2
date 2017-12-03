const cards = require('../models/cards');

const cardsController = {
  getListCards(req, res){
    cards.listCards().then(cards => {
      console.log(cards);
      res.render('portfolio.pug', {
        cards: cards
      })
    }).catch(err => {console.log(err, 'erreur sur cardsController')})
  }
}

module.exports = cardsController;