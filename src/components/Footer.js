import React from 'react';


//Escribe "sfc" y se colocara lo siguiente, gracias a los plugins instalados

//Puedes quitarlas llaves y el return si es un function declaration cuando no se tiene codigo extra 
// previo al return como en el caso de abajo

/*
const Footer = () => {
     return (
         <footer>
             <p>Todos los derechos reservados &copy;</p>
         </footer>
     );
 }
*/
 const Footer = ({fecha}) => (
     <footer>
            <p>Todos los derechos reservados &copy; {fecha}</p>
    </footer>
    );


export default Footer;

