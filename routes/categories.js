const express = require('express');
const router = express.Router();
const ajouter=require('../controller/Categories/Ajout.categorie')
router.post('/ajouter',ajouter.ajoutercategorie)
module.exports = router;