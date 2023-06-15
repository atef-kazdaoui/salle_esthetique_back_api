const Rendez_vous_model = require('../../models/RendezVous');

const findbyId = async (req, res) => {
  const iduser = req.params.id;
  console.log(iduser);
  try {
    const rendez_vous_byId = await Rendez_vous_model.findAll({ where: { iduser: iduser } });
    res.status(200).json(rendez_vous_byId);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { findbyId };
