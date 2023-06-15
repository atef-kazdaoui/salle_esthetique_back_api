<<<<<<< HEAD
const Rendez_vous_model = require ('../../models/rendez-vous');

const ajouter_rendez_vous = async (req, res) => {
  const {
    id_rendez_vous,
    iduser,
    date_disponible,
    heure_disponible,
    minute_disponible,
  } = req.body;
  try {
    const rendezVous = await Rendez_vous_model.findByPk (id_rendez_vous);
    if (rendezVous) {
      rendezVous.iduser = iduser;
      rendezVous.date_disponible = date_disponible;
      rendezVous.heure_disponible = heure_disponible;
      rendezVous.minute_disponible = minute_disponible;
      await rendezVous.save ();
      res.status (200).json ({
        message: 'ID utilisateur du rendez-vous modifié avec succès',
        rendezVous: rendezVous,
      });
    } else {
      res.status (404).json ({
        message: 'Rendez-vous non trouvé',
      });
    }
  } catch (error) {
    console.log (error);
    res.status (500).json ({
      message: "Erreur lors de la modification de l'ID utilisateur du rendez-vous",
    });
=======
const Rendez_vous_model = require('../../models/rendez-vous');

const ajouter_rendez_vous = async (req, res) => {
  const id_rendez_vous = req.body.id_rendez_vous;
  const id_user = req.body.id_user;

  try {
    const rendezVous = await Rendez_vous_model.findOne({ where: { id_rendez_vous: id_rendez_vous } });

    rendezVous.id_user = id_user;
    await rendezVous.save();

    res.status(200).json({ message: 'ID utilisateur ajouté au rendez-vous avec succès' });
    console.log(Rendez_vous_model);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'ID utilisateur' });
>>>>>>> effee5d1ff00343b9f0741dcb15bd858fbae4571
  }
};

module.exports = {
<<<<<<< HEAD
  ajouter_rendez_vous
,
=======
  ajouter_rendez_vous,
>>>>>>> effee5d1ff00343b9f0741dcb15bd858fbae4571
};
