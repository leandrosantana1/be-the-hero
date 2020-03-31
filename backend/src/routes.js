const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const Sessioncontroller = require('./controllers/SessionController');

const routes  = express.Router();


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/session', Sessioncontroller.create);

module.exports = routes;