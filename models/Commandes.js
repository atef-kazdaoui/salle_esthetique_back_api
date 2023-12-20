const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/cnx");
const user = require("./Clients"); 
const produits = require("./Produits");
const Panier = require("./Paniers");
const Commandesmodel = sequelize.define(
  "Commandes",
  {
    idcommande: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    frequence_commande: {
      type: DataTypes.STRING,
    },
    nombre_commande: {
      type: DataTypes.STRING,
    },
    date_commande: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW, 
    },
    montant_total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    iduser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: user,
        key: "iduser"
      }
    },
    idpanier: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
  },
  {
    timestamps: false,
  }
);
Commandesmodel.belongsTo(Panier, { foreignKey: 'idpanier' });
Commandesmodel.associate = (models) => {
  
  Commandesmodel.hasOne(models.user, {
    onDelete: "cascade"
  });
  Commandesmodel.hasMany(models.produit_commane,{
    onDelete: "cascade"
  })
};
module.exports = Commandesmodel;