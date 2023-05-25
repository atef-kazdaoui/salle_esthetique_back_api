const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/cnx");
const User = require("./user");
const Rendez_vous_model = sequelize.define(
  "Rendez_vous",
  {
    id_rendez_vous: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    date_diponible: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rendez_vous: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
              },
  },
  {
    timestamps: false,
  }
);


Rendez_vous_model.belongsTo(User, { foreignKey: 'id_user', onDelete: 'SET NULL' });

module.exports = Rendez_vous_model;