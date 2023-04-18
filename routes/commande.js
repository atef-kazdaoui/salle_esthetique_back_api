const express = require('express');
const router = express.Router();
const ajouter=require('../controller/Commande/ajouter.controller')
router.post('/ajouter',ajouter.ajoutercommande)
module.exports = router;