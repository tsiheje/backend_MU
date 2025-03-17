const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const modelVehicule = require("./utilisateur");
const modelCoop = require("./cooperatives");


const Vehicules = modelVehicule(sequelize, DataTypes)
const Cooperatives = modelCoop(sequelize, DataTypes)

const db = {
    Vehicules,
    Cooperatives
}
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  
db.sequelize = sequelize;
module.exports = db;