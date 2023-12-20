const express = require('express');
const router = express.Router();
const ajouter=require('../controller/Categories/Ajout.categorie')
const affich=require('../controller/Categories/affich.categorie')
router.post('/ajouter',ajouter.ajoutercategorie);
router.get('/categories',affich.affichcategorie)
module.exports = router;