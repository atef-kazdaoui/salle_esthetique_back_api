const Rendez_vous_model = require('../../models/RendezVous');
const moment = require('moment');

const findbyId = async (req, res) => {
  const iduser = req.params.id;
  console.log('la' + iduser);
  try {
    const rendez_vous_byId = await Rendez_vous_model.findAll({ where: { iduser: iduser } });
    
    const heuresMinutesList = rendez_vous_byId.map((rendezVous) => {
      const dateHeureDisponible = moment(rendezVous.date_heure_disponible);
      const annee = dateHeureDisponible.utc().year();
      const mois = dateHeureDisponible.utc().month() + 1; // Les mois sont indexés à partir de 0
      const jour = dateHeureDisponible.utc().date();
      const heure = dateHeureDisponible.utc().hour();
      const minute = dateHeureDisponible.utc().minute();

      return {
        annee,
        mois,
        jour,
        heure,
        minute,
      };
    });

    console.log(heuresMinutesList);
    res.status(200).json(heuresMinutesList);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { findbyId };
