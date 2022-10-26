import React, { useEffect, useState } from "react";
import "../selectvuelos/style.scss";
import "../main/form/Form2";
import { searchFligths } from "../../services/getflight";
import "../selectvuelos/style.scss";

const SelectVuelos = () => {

  const [vuelos, setVuelo] = useState({}||vuelos)
  const [costo, setcosto] = useState(0)
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
  const getVuelo=(item)=>{
    console.log(item);
    setVuelo(item)

  }
 
 const  changevalue=(value)=>{
  if (value === '1') {
    console.log(500);
    setcosto(500)
    
  }
  if (value === '2') {
    console.log(700);
    setcosto(700)
  }
  if (value === '3') {
    console.log(1000);
    setcosto(1000)
    
  }

 }

 const goAsientos=()=>{
  const precioFinal=(vuelos.costo + costo)*Number(vueloIda.pasajeros)
  
  if (precioFinal) {
    
    console.log('borrando session');
    console.log('cargar session');
    console.log('cargar yendo a select asientos');
    
    
  }else{
    console.log('selecione vuelo y maleta');
  }
 
 }

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

            <div   >
              <section onClick={()=>{getVuelo(item)} } key={index} className="vuelos_section">
                {" "}
                <p>
                  {" "}
                  <strong> {item.departureTime}pm </strong>
                </p>
                ○---2h--○{" "}
                <p>
                  {" "}
                  <strong>{item.departureTime+2}pm</strong>
                </p>
              </section>
              <button onClick={()=>{changevalue('1')} } className="vuelos_sections">
                {" "}
                img
                <p> 1 objeto personal</p>
                <h4> 500$ </h4>
              </button>
              <button  onClick={ ()=>{changevalue('2')} } className="vuelos_sections">
                {" "}
                img
                <p> equipaje de mano</p>
                <h4> 700$ </h4>
              </button>
              <button onClick={ ()=>{changevalue('3')}  }  className="vuelos_sections">
                {" "}
                img
                <p> Equipaje 25Kg</p>
                <h4> 1000$ </h4>
              </button>
            </div>
            
            </>
          ))}
        </div>
      </div>
      <aside className="aside">
        <section className="aside_section1"> 

        {<p className="aside_p"> pasajeros <strong> {vueloIda.pasajeros} Adulto</strong></p>}
        <p className="aside_p"> Vuelo de salida </p>

        {
          <span className="aside_span2">
            {" "}
            <h4> {vueloIda.origen}</h4>___<h4>{vueloIda.destino}</h4>
          </span>
          
        }
           

            
              <span  className="aside_span3">
                {" "}
                
                  <>

                  <p >
                  {" "}
                   {vuelos.departureTime} pm
                </p>
                <p >
                  {" "}
                  {vuelos.departureTime+2}pm
                </p>
                  </>
          
          




                
              </span>
              
          
        {<h6> {vueloIda.salidaDate} </h6>}
        </section>
        <section className="aside_section2" >
       <p> Tarifa base: {vuelos.costo} </p>
       <p>Costo Maletas:{costo} </p> 
       <p> Monto a pagar {(vuelos.costo + costo)*Number(vueloIda.pasajeros)} </p>
       
       <button onClick={()=>{goAsientos()} }>Seleccionar asientos </button>

        </section>
      </aside>
    </div>
  );
};

export default SelectVuelos;
