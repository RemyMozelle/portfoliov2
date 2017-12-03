const express = require('express');
const route = express.Router();
const allRequestController = require('../../app/controllers/allRequestController');

route.get('/', allRequestController.getAllRequest)

module.exports = route;