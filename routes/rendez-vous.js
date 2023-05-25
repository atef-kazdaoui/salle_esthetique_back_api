const express = require('express');
const router = express.Router();
const ajouter=require('../controller/Rendez-vous/rendez-vous.controller');

router.post('/ajouter',ajouter.ajouter_rendez_vous);

module.exports = router;