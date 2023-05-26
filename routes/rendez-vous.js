const express = require('express');
const router = express.Router();
const find=require('../controller/Rendez-vous/findrendez-vous.controller');
const ajouter=require('../controller/Rendez-vous/ajouterrendez-vous.controller');
const findbyId =require('../controller/Rendez-vous/findrendez-vousbyID.controller')

router.get('/find',find.find_rendez_vous);
router.post('/ajouter',ajouter.ajouter_rendez_vous);
router.get('/mes_rendez_vous/:id',findbyId.findbyId)
module.exports = router;