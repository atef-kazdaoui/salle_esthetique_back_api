var express = require('express');
var router = express.Router();
const ajouter=require('../controller/Produit_commande/ajout.controller');
router.post('/ajout',ajouter.ajouter_produit_commande);
module.exports = router;