const express = require('express');
const router = express.Router();
const ajouter=require('../controller/Panier/ajoutpanier.controller');
const find=require('../controller/Panier/findproduit.controller');
router.post('/ajouter',ajouter.ajouterProduitAuPanier);
router.get('/findP/:id',find.afficherPanier);
module.exports = router;