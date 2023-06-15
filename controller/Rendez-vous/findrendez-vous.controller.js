const Rendez_vous_model = require('../../models/rendez-vous');

const find_rendez_vous = async (req, res) => {
  try {
    const rendezVousDisponibles = await Rendez_vous_model.findAll({
<<<<<<< HEAD
      where: { iduser: null }
=======
      where: { id_user: null }
>>>>>>> effee5d1ff00343b9f0741dcb15bd858fbae4571
    });

    res.status(200).json({ rendezVousDisponibles });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  find_rendez_vous,
};
