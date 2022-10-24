import React from "react";
import transporte from "../../icons/transporte.png";
import vuelosyhotel from "../../icons/vuelosyhoteles.png";
import grupos from "../../icons/grupos.png";
import hoteles from "../../icons/hoteles.png";
import carga from "../../icons/carga.png";



const Footer = () => {
  let listaServicios=[{img:transporte,text:"Transporte",description:"Renta un auto o reserva un shuttle"},
  {img:vuelosyhotel,text:"Vuelos + Hoteles",description:"Encuentra las mejores ofertas para tu viaje."},
  {img:grupos,text:"Grupos",description:"Obtén una cotización para grupos de más de 9 personas."},
  {img:hoteles,text:"Hoteles",description:"Reserva cualquier habitación en cualquier parte del mundo."},
  {img:carga,text:"Carga",description:"Contamos con servicio de carga y mensajería."},]
  //creditos de ayuda en diseño a la bebé
  return (
    <footer>
    
      <h2> Servicios disponibles</h2>
      <div>
        
        {
          listaServicios.map((item,index)=>(
            <section key={index} >
            <img  src={item.img} alt="transporte" />
            <h3> {item.text} </h3>
            <p >{item.description} </p>
            </section>
          ))
        }
          
        
        
      
        
      </div>
    </footer>
  );
};

export default Footer;
