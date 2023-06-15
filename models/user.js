const {Sequelize, DataTypes} = require ('sequelize');
const sequelize = require ('../config/cnx');
const Clientsmodel = sequelize.define (
  'Clients',
  {
    iduser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adresse_domicile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adresse_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero_telephone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'utilisateur',
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Clientsmodel.associate = models => {
  Clientsmodel.hasMany (models.commande, {
    onDelete: 'cascade',
  });
};
/**
 * 
 * (async () => {
  try {
    await sequelize.authenticate (); // Vérifier la connexion à la base de données
    await sequelize.sync ({force: true}); // Synchroniser avec la base de données en créant les tables (cela supprime les tables existantes)
    console.log (
      'La synchronisation de la base de données a été effectuée avec succès.'
    );
  } catch (error) {
    console.error (
      "Une erreur s'est produite lors de la synchronisation de la base de données:",
      error
    );
  }
}) ();

 */

module.exports = Clientsmodel;
