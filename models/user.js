const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/cnx");
const Clientsmodel = sequelize.define(
  "CLients",
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

 */

module.exports = Clientsmodel;



