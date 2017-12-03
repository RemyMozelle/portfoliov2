const menus = require('../models/menu');
const cards = require('../models/cards');
const savoirs = require('../models/savoir');

const allRequest = {
  getAllRequest(req, res){
    menus.listMenu().then(menu => {
      cards.listCards().then(card => {
        savoirs.listSavoir().then(savoir => {
          res.render('portfolio.pug', {
            getMenus : menu,
            getCards : card,
            getSavoirs : savoir
          })
        })
      }) 
    })
  }
}
module.exports = allRequest;
