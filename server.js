
var express = require('express')
app = express(),
port = process.env.PORT || 3000;
 
var productsModel= require('./api/products')
console.log ('sequelize loaded');

const Sequelize =require ('sequelize');

var dbName ='text_crud';
var dbPass='root';
var dbUser = 'LaContraseña';

const sequelize = new Sequelize('text_crud', 'root', 'LaContraseña',{
    host: 'localhost',
    dialect:'mysql'
});

var productsCrud= productsModel(sequelize);
crearProducto();
//listarProducto();
//actualizarProducto();
//eliminarProducto();

app.listen(port);


function crearProducto(){
    var productoNuevo={
      nombre: 'test',
      precio: '100',
      categoria: 'algo',
      existencia:'true',
      cantidad: '5',
      descripcion:'me oyen me sienten'
    }

    productsCrud.create(productoNuevo).then(resp => {
        console.log('creado...');
        console.log(resp);
    });
}

function listarProducto(){
  productsCrud.findAll().then(resp=>{
        console.log('listando...');
        console.log(resp);
    });
}


function actualizarProducto(){

    var productoNuevo={
        nombre: 'testedit',
        precio: '108',
        categoria: 'algoedit',
        existencia:'true',
        cantidad: '50',
        descripcion:'me oyen me sientenedit'
    }
    productsCrud.update(productoNuevo, {
        where:{
            id: 1
        }
    }).then(resp =>{
        console.log('actualizado');
        console.log(resp);
        
    })
}

function eliminar(){
  productsCrud.destroy({
        where: {
            id:1
        }
        }).then(()=>{
            console.log('eliminado...')
        });
}