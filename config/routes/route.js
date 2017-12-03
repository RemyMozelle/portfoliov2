const express = require('express');
const route = express.Router();
const requests = require('../../app/controllers/allRequestController');
const database = require('../database/database');

console.log(database.getConnection())

route.get('/menu', requests.getAllRequest);

module.exports = route;