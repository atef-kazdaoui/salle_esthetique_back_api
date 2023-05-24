const express = require('express');
const router = express.Router();
const ajouter=require('../controller/Produits/ajouterP.controller');
const findall=require('../controller/Produits/findallP.controller');
const findbyID=require('../controller/Produits/findproduitbyID.controller');
const supprimer=require('../controller/Produits/delete.produit');
const modifier=require('../controller/Produits/updateproduit.controller');
const multer=require('../middlewear/multer')
const auth=require('../middlewear/auth');
const filtre=require('../controller/Produits/Filtre.produit.controller')
router.post('/ajouter',multer,ajouter.ajouterproduit);
router.get('/find',findall.findAll);
router.get('/filtre/:id',filtre.getProduitsByCategorie);
router.get('/find/:id',findbyID.findproduitbyID);
router.delete('/delete/:id',auth,supprimer.deleteProduit);
router.patch('/update/:id',auth,modifier.updateproduit);
module.exports = router;