const Clientsmodel = require('../../models/user')

const updateclient = async (req, res) => {
  try {
    const verif = await Clientsmodel.count({ where: { iduser: req.params.id } });
    if (verif === 0) {
      const message = "on n'a pas trouvé ce client";
      return res.status(404).json({ message });
    }
    await Clientsmodel.update({
      nom: req.body.nom,
      prenom: req.body.prenom,
      adresse_domicile: req.body.adresse_domicile,
      numero_telephone: req.body.numero_telephone,
      adresse_email: req.body.adresse_email,
      password: req.body.password
    }, { where: { iduser: req.params.id } });
    const updatedClient = await Clientsmodel.findOne({ where: { iduser: req.params.id } });
    res.status(200).json({ updatedClient });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

module.exports = { updateclient };

