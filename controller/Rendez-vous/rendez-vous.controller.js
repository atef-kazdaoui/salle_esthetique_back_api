const Rendez_vous_model = require('../../models/rendez-vous');

const ajouter_rendez_vous = async (req, res) => {
    try {
      await Rendez_vous_model.create({
        id_user: req.body.id_user,
        date_diponible: req.body.date_diponible
      });
  
      res.status(200).json({ message: "Ajout de la declaration avec succes" });
      console.log(Rendez_vous_model);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  module.exports = {
    ajouter_rendez_vous,
  };