const RendezVous = require('../../models/RendezVous');
const moment = require('moment');

const findRendezVous = async (req, res) => {
  try {
    const rendezVousDisponibles = await RendezVous.findAll({
      where: { iduser: null },
    });

    const heuresMinutesList = rendezVousDisponibles.map((rendezVous) => {
      const dateHeureDisponible = moment(rendezVous.date_heure_disponible);

      // Utiliser la fonction utc() pour éviter les problèmes de fuseau horaire
      const annee = dateHeureDisponible.utc().year();
      const mois = dateHeureDisponible.utc().month() + 1; // Les mois sont indexés à partir de 0
      const jour = dateHeureDisponible.utc().date();
      const heure = dateHeureDisponible.utc().hour();
      const minute = dateHeureDisponible.utc().minute();

      return {
        id_rendez_vous: rendezVous.id_rendez_vous, // Ajout de l'id_rendez_vous
        annee,
        mois,
        jour,
        heure,
        minute,
      };
    });

    console.log(heuresMinutesList);

    res.status(200).json({ heuresMinutesList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  findRendezVous,
};
