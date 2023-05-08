const clientservice = require('../../models/user');
const bcrypt = require('bcrypt');
const Joi = require('joi');

const schema = Joi.object({
  nom: Joi.string().required(),
  prenom: Joi.string().required(),
  adresse_email: Joi.string().email().required(),
  adresse_domicile: Joi.string().required(),
  numero_telephone: Joi.string().required(),
  password: Joi.string()
.required()
.min(8)
.max(20),
re_password:Joi.string()
.valid(Joi.ref('password'))
.required()
});
const ajouterclient = async (req, res) => {
  try {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    clientservice.count({ where: { adresse_email: req.body.adresse_email } }).then(docs => {
      if (docs != 0) {
        res.status(400).json("ce email est déja utilisée");
      } else {
        bcrypt.hash(req.body.password, 10).then(hashedPassword => {
          clientservice.create({
            nom: req.body.nom,
            prenom: req.body.prenom,
            adresse_email: req.body.adresse_email,
            adresse_domicile: req.body.adresse_domicile,
            numero_telephone: req.body.numero_telephone,
            password: hashedPassword,
            image:req.file.filename
            
            
          }).then(() => {
            res.status(200).send("inscription terminer");
          });
        });
      }
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });   
  }
};
module.exports = {
  ajouterclient,
};