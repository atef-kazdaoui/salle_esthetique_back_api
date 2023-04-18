const express = require('express');
const router = express.Router();
const ajouter=require('../controller/Produits/ajouterP.controller');
const findall=require('../controller/Produits/findallP.controller');
const findbyID=require('../controller/Produits/findproduitbyID.controller');
const supprimer=require('../controller/Produits/delete.produit')
const modifier=require('../controller/Produits/updateproduit.controller');
const ajouterC=require('../controller/Commande/ajouter.controller')
router.post('/ajouter',ajouter.ajouterproduit);
router.post('/ajoutercommande',ajouterC.ajoutercommande)
router.get('/find',findall.findAll);
router.get('/find/:id',findbyID.findproduitbyID);
router.delete('/delete/:id',supprimer.deleteProduit);
router.patch('/update/:id',modifier.updateproduit);
module.exports = router;
