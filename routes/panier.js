const express = require('express');
const router = express.Router();
const ajouter=require('../controller/Panier/ajoutpanier.controller');
const find=require('../controller/Panier/findproduit.controller');
const supprimer =require('../controller/Panier/deletepanierbyidcontroller');
router.post('/ajouter',ajouter.ajouterProduitAuPanier);
router.get('/findP/:id',find.afficherPanier);
router.delete('/delete/:id',supprimer.delete_panier);
module.exports = router;