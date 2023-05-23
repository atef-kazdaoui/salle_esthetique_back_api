const express = require('express');
const router = express.Router();
const ajouter=require('../controller/Panier/ajoutpanier.controller');
const find=require('../controller/Panier/findpanier.controller');
router.post('/ajouter',ajouter.ajouterProduitAuPanier);
router.get('/find/:id',find.afficherPanier);
module.exports = router;