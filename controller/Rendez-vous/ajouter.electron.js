const Rendez_vous_model = require('../../models/RendezVous');
const moment = require('moment');
const { Op } = require('sequelize');

const ajouter_rendez_vous_electron = async (req, res) => {
  const date_disponible = req.body.date_disponible;
  const heure_disponible = req.body.heure_disponible;
  const minute_disponible = req.body.minute_disponible;

  try {
    const date_heure_disponible = moment(`${date_disponible}T${heure_disponible}:${minute_disponible}:00`);

    // Vérifier s'il existe déjà un rendez-vous à la même date et heure
    const rendezVousExist = await Rendez_vous_model.findOne({
      where: {
        date_heure_disponible: {
          [Op.between]: [
            date_heure_disponible.toDate(), // Convertir la date en objet Date
            date_heure_disponible.add(1, 'minute').toDate() // Ajoute une minute à la date pour créer une plage
          ],
        },
      },
    });

    if (rendezVousExist) {
      return res.status(400).json({
        message: 'Un rendez-vous existe déjà à cette date et heure.',
      });
    }

    const rendezVous = await Rendez_vous_model.create({
      iduser: null,
      date_heure_disponible: date_heure_disponible,
    });

    res.status(200).json({
      message: 'Rendez-vous créé avec succès',
      rendezVous: rendezVous,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Erreur lors de la création du rendez-vous',
    });
  }
};

module.exports = {
  ajouter_rendez_vous_electron,
};
