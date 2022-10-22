const { Sequelize, DataTypes } = require('sequelize');
//Connect DB
const sequelize = new Sequelize('cake', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
  try {
    sequelize.authenticate();
    console.log('Kết nối dữ liệu');
  } catch (error) {
    console.error('Không thể kết nối dữ liệu:', error);
  }
  

  module.exports = sequelize