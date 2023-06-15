const Rendez_vous_model = require ('../../models/rendez-vous');

const ajouter_rendez_vous_electron = async (req, res) => {
  const date_disponible = req.body.date_disponible;
  const heure_disponible = req.body.heure_disponible;
  const minute_disponible = req.body.minute_disponible;
  const id_user = null;

  try {
    console.log (date_disponible);
    console.log (heure_disponible);
    console.log (minute_disponible);

    const rendezVous = await Rendez_vous_model.create ({
      id_user: id_user,
      date_disponible: date_disponible,
      heure_disponible: heure_disponible,
      minute_disponible: minute_disponible,
    });

    res.status (200).json ({
      message: 'Rendez-vous créé avec succès',
      rendezVous: rendezVous,
    });
  } catch (error) {
    console.log (error);
    res.status (500).json ({
      message: 'Erreur lors de la création du rendez-vous',
    });
  }
};

module.exports = {
  ajouter_rendez_vous_electron,
};
