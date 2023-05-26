const Rendez_vous_model = require('../../models/rendez-vous');

const findbyId = async (req, res) => {
  const id_user = req.params.id;
  try {
    const rendez_vous_byId = await Rendez_vous_model.findAll({ where: { id_user: id_user } });
    res.status(200).json(rendez_vous_byId);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { findbyId };
