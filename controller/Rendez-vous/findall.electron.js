const Rendez_vous_model = require ('../../models/rendez-vous');

const find_electron = async (req, res) => {
  try {
    const rendezVousDisponibles = await Rendez_vous_model.findAll ();

    res.status (200).json ({rendezVousDisponibles});
  } catch (error) {
    return res.status (500).json ({message: error.message});
  }
};

module.exports = {
  find_electron,
};
