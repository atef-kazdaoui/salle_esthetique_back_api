const express = require('express');
const router = express.Router();
const find=require('../controller/Rendez-vous/findrendez-vous.controller');
const ajouter=require('../controller/Rendez-vous/ajouterrendez-vous.controller');
const findbyId =require('../controller/Rendez-vous/findrendez-vousbyID.controller')
const find_electron =require('../controller/Rendez-vous/findall.electron');
const ajouter_rendez_vous_electron=require('../controller/Rendez-vous/ajouter.electron')
const auth=require('../middlewear/auth');
router.get('/find',auth,find.findRendezVous);
router.post('/ajouter/:id',auth,ajouter.ajouter_rendez_vous);
router.get('/find/:id',auth,findbyId.findbyId);
router.get('/electron',auth,find_electron.find_electron);
router.post ('/ajouter_electron',auth, ajouter_rendez_vous_electron.ajouter_rendez_vous_electron);

module.exports = router;