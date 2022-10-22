const {DataTypes} = require('sequelize')
const sequelize = require('../ultils/db')

const User = sequelize.define("user",{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})
module.exports = User