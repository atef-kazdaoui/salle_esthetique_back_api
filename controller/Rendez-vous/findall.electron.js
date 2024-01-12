const Rendez_vous_model = require('../../models/RendezVous');
const moment = require('moment');

const find_electron = async (req, res) => {
  try {
    const rendezVousDisponibles = await Rendez_vous_model.findAll();

    // Boucle sur chaque rendez-vous pour obtenir les heures et les minutes
    const heuresMinutesList = rendezVousDisponibles.map(rendezVous => {
      const dateHeureDisponible = moment(rendezVous.date_heure_disponible);
      const iduser=rendezVous.iduser;
      // Utiliser la fonction utc() pour éviter les problèmes de fuseau horaire
      const annee = dateHeureDisponible.utc().year();
      const mois = dateHeureDisponible.utc().month() + 1; // Les mois sont indexés à partir de 0
      const jour = dateHeureDisponible.utc().date();
      const heure = dateHeureDisponible.utc().hour();
      const minute = dateHeureDisponible.utc().minute();
      
      

      return { iduser,annee, mois, jour, heure, minute };
    });

    console.log(heuresMinutesList);

    res.status(200).json({ rendezVousDisponibles: heuresMinutesList });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  find_electron,
};
