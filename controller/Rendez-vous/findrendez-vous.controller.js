const RendezVous = require('../../models/RendezVous');

const findRendezVous = async (req, res) => {
  try {
    const rendezVousDisponibles = await RendezVous.findAll({
      where: { iduser: null },
    });

    res.status(200).json({ rendezVousDisponibles });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  findRendezVous,
};
