const {DataTypes} = require('sequelize')
const db = require('../ultils/db')

const Product = db.define('Product',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image: {
        type: DataTypes.CHAR(100),
        defaultValue: 'defaut.jpg'
    },
    title: {
        type: DataTypes.CHAR(100),
    },
    description: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.INTEGER
    }

})

module.exports = Product