import React from 'react'

import "../selectvuelos/style.scss";
import "../main/form/Form1";
import { searchFligths } from "../../services/getflight";
import "../selectvuelos/style.scss";

const Vueloidaregresp = () => {
    
   const vueloIda= JSON.parse(sessionStorage.getItem("vueloGo"));
   const vueloRegreso= JSON.parse(sessionStorage.getItem("vueloBack"))
   console.log(vueloIda);
   console.log(vueloRegreso);
  return (
    <div className="mains">
    <div className="vuelos">
      <h2>  Vuelo de salida </h2>
      <h3> salida fehca vuelos ida </h3>
      
        <span className="vuelos_span">
          {" "}
          <strong>Origen:</strong> <p> cartagena </p>{" "}
          <strong>Destino:</strong>
          <p> medellin</p>
        </span>
      
      <h4 className="vuelos_h4">Selección de horarios y equipajes </h4>
      <div className="vuelos_container">
       
          <>

          <div >
            <section className="vuelos_section">
              {" "}
              <p>
                {" "}
                <strong> hora salida </strong>
              </p>
              ○-----○{" "}
              <p>
                {" "}
                <strong>hora llegada</strong>
              </p>
            </section>
            <section className="vuelos_sections">
              {" "}
              img
              <p> 1 objeto personal</p>
              <h4> 500$ </h4>
            </section>
            <section className="vuelos_sections">
              {" "}
              img
              <p> equipaje de mano</p>
              <h4> 700$ </h4>
            </section>
            <section className="vuelos_sections">
              {" "}
              img
              <p> Equipaje 25Kg</p>
              <h4> 1000$ </h4>
            </section>
          </div>
          
          </>
        
      </div>
    </div>
    <aside className="aside">
      <section className="aside_section1"> 

      <p className="aside_p"> pasajeros <strong> pasajeros de vuelo Adulto</strong></p>
      <p className="aside_p"> Vuelo de salida </p>

      
        <span className="aside_span2">
          {" "}
          <h4> vuelos de ida origen</h4>___<h4>vuelos de destino</h4>
        </span>
        
   
         

          
            <span   className="aside_span3">
              {" "}
              <p>
                {" "}
                 hora slaida
              </p>
              <p>
                {" "}
                hora llegada
              </p>
            </span>
            
       
      <h6> vuelos de ida Fecha </h6>
      </section>
      <section className="aside_section2" >
      sss

      </section>
    </aside>
  </div>
  )
}

export default Vueloidaregresp