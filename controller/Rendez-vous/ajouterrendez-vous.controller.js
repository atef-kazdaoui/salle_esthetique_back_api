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
  }
};

module.exports = {
  ajouter_rendez_vous,
};
