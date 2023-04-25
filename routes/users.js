const express = require("express");
const router = express.Router();
const ajoutclient= require("../controller/Clients/ajoutclient.controller");
const logincontroller= require('../controller/Clients/login.controller');
const findClientbyID = require('../controller/Clients/findclientbyID.controller');
const findall = require('../controller/Clients/findallclient.controller');
const update= require('../controller/Clients/updateclient.controller');
const supprimer=require('../controller/Clients/deleteclient.controller');
const auth=require('../middlewear/auth');
//-----------------------------------------------------------------------------------
router.post("/inscription", ajoutclient.ajouterclient);
router.post("/login",logincontroller.loginclient);
router.get('/find/:id',findClientbyID.findClientbyID);
router.get('/findall',findall.findAll);
router.patch('/update/:id',update.updateclient);
router.delete('/delete/:id',supprimer.deleteClient);


//------------------------------------------------------------------------------------
module.exports = router;
