const Rendez_vous_model = require ('../../models/RendezVous');
const moment = require('moment');
const ajouter_rendez_vous_electron = async (req, res) => {
  const annee = req.body.annee;
  const mois = req.body.mois;
  const jour = req.body.jour;
  const heure = req.body.heure+2; // j'ai fais +2 pour le decalage horraire 
  const minute = req.body.minute;
  const id_user = null;

  try {
    console.log ('anne : '+annee);
    console.log ('mois :'+mois);
    console.log ('jour :'+jour);
    console.log ('heure :'+heure);
    console.log ('minute: '+minute);

    // Créez la date sans ajustement de fuseau horaire
    const date_heure_disponible = moment(`${annee}-${mois.toString().padStart(2, '0')}-${jour.toString().padStart(2, '0')}T${heure.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:00`);

    console.log(date_heure_disponible);
    
    const rendezVous = await Rendez_vous_model.create({
      id_user: id_user,
      date_heure_disponible: date_heure_disponible,
    });

    res.status(200).json({
      message: 'Rendez-vous créé avec succès',
      rendezVous: rendezVous,
    });
  } catch (error) {
    console.log (error);
    res.status(500).json({
      message: 'Erreur lors de la création du rendez-vous',
    });
  }
};

module.exports = {
  ajouter_rendez_vous_electron,
};
