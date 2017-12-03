const savoir = require('../models/savoir');

const savoirController = {
  getListSavoir(req, res){
    savoir.listCards().then(savoirs => {
      console.log(cards);
      res.render('portfolio.pug', {
        savoir: savoirs
      })
    }).catch(err => {console.log(err, 'erreur sur savoirController')})
  }
}

module.exports = savoirController;