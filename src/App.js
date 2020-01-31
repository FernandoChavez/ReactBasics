import React, { Fragment, useState }from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  //return solo  puede retornar un solo valor, a menos que pongas varios valores en un contenedor como un div
  
  // Crear un listado de productos
  //Destructuring
  //Usualmente el primero es la referencia al valor del state y el segundo una funcion que reescriba  o modifique el state
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa Node.js', precio: 30 },
    { id: 4, nombre: 'Camisa Angular', precio: 20 },
  ]);

  //State para un carrito de compras
  const [carrito, agregarProducto] = useState([]);

  const fecha = new Date().getFullYear();
  // en el productos.map es un return pero se omite por que es no hay codigo previo y los parentesis da
  //implicito el return. El map cumplira la funcion de un map, realizando un forEach
  //, recorriendo todo el arreglo y asignandole el valor actual al prop "producto"
  return (
    <Fragment>
      <Header 
        titulo = 'Tienda Virtual'
      />

      <h1>Lista de Productos</h1>

      {productos.map(producto => (
        <Producto 
          key={producto.id}
          producto = {producto}
          productos = {productos}
          carrito = {carrito}
          agregarProducto= {agregarProducto}
        />
      ))}
      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer 
        fecha = {fecha}
      />
    </Fragment>
  );
}

export default App;
