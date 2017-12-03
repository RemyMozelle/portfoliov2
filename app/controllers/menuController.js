const menus = require('../models/menu');

const menuController = {
  getListMenu(req, res){
    menus.listMenu().then(menu => {
      res.render('portfolio.pug', {
        menus : menu
      })
    }).catch(err => {console.log(err, 'menuController error')})
  }
}



module.exports = menuController;