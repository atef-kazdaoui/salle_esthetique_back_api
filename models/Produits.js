const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/cnx");
const categories=require("../models/categories");
const Produitsmodel = sequelize.define(
  "Produits",
  {
    idproduit: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom_produit: {
      type: DataTypes.STRING,
      allowNull:false
    },
    description_produit: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    prix_produit: {
      type: DataTypes.FLOAT,
      allowNull:false
    },
    nombre_produit: {
      type: DataTypes.INTEGER,
      defaultValue: null 
    },
    image: {
      type: DataTypes.STRING, // or BLOB, depending on the type of image you want to store
      allowNull: false
    },
    categorieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Categories', 
        key: 'idcategorie'
      }
    }
    
  },
  {
    timestamps: false,
  }
);

Produitsmodel.associate = (models) => {
 
  Produitsmodel.hasMany(models.Clients,{
    onDelete:"cascade"
  });
  Produitsmodel.hasMany(models.produit_commande,{
    onDelete:"cascade"
  });
  Produitsmodel.belongsTo(models.categories, { foreignKey: 'categorieId' });
};
 

 
module.exports = Produitsmodel;