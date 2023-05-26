const express = require('express');
const router = express.Router();
const find=require('../controller/Rendez-vous/findrendez-vous.controller');
const ajouter=require('../controller/Rendez-vous/ajouterrendez-vous.controller');

router.get('/find',find.find_rendez_vous);
router.post('/ajouter',ajouter.ajouter_rendez_vous);
module.exports = router;