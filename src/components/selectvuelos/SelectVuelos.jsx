import React, { useEffect, useState } from "react";
import "../selectvuelos/style.scss";
import "../main/form/Form2";
import { searchFligths } from "../../services/getflight";
import "../selectvuelos/style.scss";

const SelectVuelos = () => {
  const [vuelos, setVuelo] = useState({});
  const flyes = JSON.parse(sessionStorage.getItem("vuelos"));
  console.log(flyes);
  const vueloIda = JSON.parse(sessionStorage.getItem("vueloIda"));
  console.log(vueloIda);
  useEffect(() => {
    const vueloIda = JSON.parse(sessionStorage.getItem("vueloIda"));
    console.log(vueloIda);
    const flyes = JSON.parse(sessionStorage.getItem("vuelos"));
    console.log(flyes);
  }, []);

  return (
    <div className="mains">
      <div className="vuelos">
        <h2>  Vuelo de salida </h2>
        {<h3> {vueloIda.salidaDate} </h3>}
        {
          <span className="vuelos_span">
            {" "}
            <strong>Origen:</strong> <p> {vueloIda.origen} </p>{" "}
            <strong>Destino:</strong>
            <p> {vueloIda.destino}</p>
          </span>
        }
        <h4 className="vuelos_h4">Selección de horarios y equipajes </h4>
        <div className="vuelos_container">
          {flyes.map((item, index) => (
            <>

            <div key={index}>
              <section className="vuelos_section">
                {" "}
                <p>
                  {" "}
                  <strong> {item.departureTime} </strong>
                </p>
                ○-----○{" "}
                <p>
                  {" "}
                  <strong>{item.arriveTime}</strong>
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
          ))}
        </div>
      </div>
      <aside className="aside">
        <section className="aside_section1"> 

        {<p className="aside_p"> pasajeros <strong> {vueloIda.pasajeros} Adulto</strong></p>}
        <p className="aside_p"> Vuelo de salida</p>

        {
          <span className="aside_span2">
            {" "}
            <h4> {vueloIda.origen}</h4>___<h4>{vueloIda.destino}</h4>
          </span>
          
        }{flyes.map((item, index) => (
           

            
              <span  key={index} className="aside_span3">
                {" "}
                <p>
                  {" "}
                   {item.departureTime} 
                </p>
                <p>
                  {" "}
                  {item.arriveTime}
                </p>
              </span>
              
          ))}
        {<h6> {vueloIda.salidaDate} </h6>}
        </section>
        <section className="aside_section2" >
        sss

        </section>
      </aside>
    </div>
  );
};

export default SelectVuelos;
