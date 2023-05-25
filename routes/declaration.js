const express = require('express');
const router = express.Router();
const ajouter=require('../controller/Declaration/ajoutdeclaration.controller')
router.post('/ajouter/:id',ajouter.ajouterdeclaration);
module.exports = router;