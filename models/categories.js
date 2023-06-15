const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/cnx");

const Categoriesmodel = sequelize.define(
  "Categories",
  {
    idcategorie: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom_categorie: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  }
);

Categoriesmodel.associate = (models) => {
  Categoriesmodel.hasMany(models.Produits, {
    onDelete: "cascade",
    foreignKey: "id_categorie"
  });
};


module.exports = Categoriesmodel;