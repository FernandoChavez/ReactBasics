// Siempre se debe importar la libreria 'react'
import React from 'react';

// Si usas "props" como parametros, recibes todas las propiedades declaradas en el app.js
// como props.namePropertie pero tambien puedes pasar props especificos entre llaves

//function Header(props){


function Header({titulo}){
    

    // Todo lo que se coloca en el return, es lo que se va a mostrar
    // en pantalla

    return (
        <h1 className="encabezado">{titulo}</h1>
    )
}

export default Header;
