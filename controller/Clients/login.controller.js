const clientsmodel = require('../../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports.loginclient = async (req, res) => {
  try {
    clientsmodel.findOne({ where: { adresse_email: req.body.adresse_email } }).then(user => {
      if (!user) {
        res.status(400).json({ msg: "email ou password non valider" })
      } else {
        bcrypt.compare(req.body.password, user.password).then(same => {
          if (same) {
            let token = jwt.sign({ id: user.iduser, nom: user.nom,role:user.role }, process.env.PRIVATE_KEY, {expiresIn: "1h"})
           res.status(200).json({ token: token ,message:"vous etes connecter " + user.nom +" "+user.prenom})
          } else {
            res.status(400).json({ msg: "email ou password non valider" })
            
          }
        })
      }
    })
  } catch (e) {
    return res.status(401).json({ error: e.message });
  }
  
};







