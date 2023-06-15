const Commandes = require('../../models/commande');

const ajoutercommande = (req, res) => {
  const { iduser } = req.params; 
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let frequence_commande = '';
  for (let i = 0; i < 7; i++) {
    frequence_commande += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  // Récupérer les autres valeurs nécessaires pour la commande à partir du corps de la requête
  const {  nombre_commande, montant_total } = req.body;

  // Créer une nouvelle commande dans la base de données
  console.log(iduser)
  console.log(req.body);
  Commandes.create({
    frequence_commande,
    nombre_commande,
    date_commande: new Date(),
    montant_total,
    id_user: iduser
  })
    .then(commande => {
      console.log()
      res.status(200).json(commande);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Une erreur s\'est produite lors de la création de la commande.' });
    });
};

module.exports = {
  ajoutercommande
};
