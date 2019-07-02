const Sequelize = require('sequelize');




module.exports = (sequelize)=> {
    const products = sequelize.define('products', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull:false
        },
        precio: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        category: {
            type: Sequelize.STRING,
           
        },
        existencia: {
            type: Sequelize.BOOLEAN,
            allowNull: true
        },
        cantidad: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        descripcion: {
            type: Sequelize.STRING,
            allowNull: true
        },

    }, {timestamps: false});
    return products;
}