import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {
    const {nombre, precio, id} = producto;

    //Agregar producto al carrito
    const seleccionarProducto = id => {
        const producto = productos.filter(producto =>producto.id === id)[0];
        //No puedes usar metodos comunes para agregar elementos al carrito
        //por que estarias modificando el state directamente como el siguiente ejemplo

        //carrito.push(producto)
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    // El arrow function del evento del boton es como si fuera "{function()}"


    // Elimina un producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);
    
        //Colocar los productos en el state
        agregarProducto(productos);
    }

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            
            {productos
            
            ?
            //Ternario
                (
                    <button 
                        type="button"
                        onClick= { () =>  seleccionarProducto(id)}
                    >Comprar</button>
                )
            :
                (
                    <button 
                        type="button"
                        onClick= { () =>  eliminarProducto(id)}
                    >Eliminar</button>
                )

            }
        </div>
    
    );
}

export default Producto;