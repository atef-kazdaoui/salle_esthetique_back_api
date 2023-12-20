const Rendez_vous_model = require('../../models/RendezVous');

const ajouter_rendez_vous = async (req, res) => {
  const iduser = req.params.id;
  const id_rendez_vous = req.body.id_rendez_vous;
   

  try {
    const rendezVous = await Rendez_vous_model.findByPk(id_rendez_vous);
      console.log(id_rendez_vous);
    if (rendezVous) {
      // Vérifiez si iduser est défini avant de l'assigner
      if (iduser !== undefined) {
        rendezVous.iduser = iduser;
        await rendezVous.save();

        res.status(200).json({
          message: 'ID utilisateur du rendez-vous modifié avec succès',
          rendezVous: rendezVous,
        });
      } else {
        res.status(400).json({
          message: 'ID utilisateur non fourni dans les paramètres de la requête',
        });
      }
    } else {
      res.status(404).json({
        message: 'Rendez-vous non trouvé',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Erreur lors de la modification de l'ID utilisateur du rendez-vous",
    });
  }
};

module.exports = {
  ajouter_rendez_vous,
};
