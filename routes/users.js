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
router.get('/find/:id',auth,findClientbyID.findClientbyID);
router.get('/findall',auth,findall.findAll);
router.patch('/update/:id',auth,update.updateclient);
router.delete('/delete/:id',auth,supprimer.deleteClient);


//------------------------------------------------------------------------------------
module.exports = router;
