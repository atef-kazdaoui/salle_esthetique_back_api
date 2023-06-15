const express = require('express');
const router = express.Router();
const find=require('../controller/Rendez-vous/findrendez-vous.controller');
const ajouter=require('../controller/Rendez-vous/ajouterrendez-vous.controller');
const findbyId =require('../controller/Rendez-vous/findrendez-vousbyID.controller')
const find_electron =require('../controller/Rendez-vous/findall.electron');
const ajouter_rendez_vous_electron=require('../controller/Rendez-vous/ajouter.electron')
router.get('/find',find.find_rendez_vous);
router.post('/ajouter',ajouter.ajouter_rendez_vous);
router.get('/mes_rendez_vous/:id',findbyId.findbyId);
router.get('/electron',find_electron.find_electron);
router.post ('/ajouter_electron', ajouter_rendez_vous_electron.ajouter_rendez_vous_electron);

module.exports = router;