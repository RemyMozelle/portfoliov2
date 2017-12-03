const express = require('express');
const route = express.Router();
const requests = require('../../app/controllers/allRequestController');

route.get('/menu', requests.getAllRequest);

module.exports = route;