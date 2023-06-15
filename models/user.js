<<<<<<< HEAD
const {Sequelize, DataTypes} = require ('sequelize');
const sequelize = require ('../config/cnx');
const Clientsmodel = sequelize.define (
  'Clients',
=======
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/cnx");
const Clientsmodel = sequelize.define(
  "CLients",
>>>>>>> effee5d1ff00343b9f0741dcb15bd858fbae4571
  {
    iduser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
<<<<<<< HEAD
=======
      
>>>>>>> effee5d1ff00343b9f0741dcb15bd858fbae4571
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
<<<<<<< HEAD
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
=======
      defaultValue: "utilisateur",
      allowNull: false
    },image: {
      type: DataTypes.STRING, // or BLOB, depending on the type of image you want to store
      allowNull: false // 
    }
  }, 
   {
    timestamps: false,
  }
);
Clientsmodel.associate=models=>{
  Clientsmodel.hasMany(models.commande,{
    onDelete:"cascade"
    });    
}
/**
 * (async () => {
  await sequelize.sync({ force: true }); // Synchronisation avec la base de données en créant les tables, cette opération supprime les tables existantes
  console.log('La table User a été synchronisée avec la base de données');
})(); 
>>>>>>> effee5d1ff00343b9f0741dcb15bd858fbae4571

 */

module.exports = Clientsmodel;
<<<<<<< HEAD
=======



>>>>>>> effee5d1ff00343b9f0741dcb15bd858fbae4571
