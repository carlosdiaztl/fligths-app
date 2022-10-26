import React, { useEffect, useState } from "react";
import "../selectvuelos/style.scss";
import "../main/form/Form2";
import { searchFligths } from "../../services/getflight";
import "../selectvuelos/style.scss";
import { useNavigate } from "react-router-dom";
import Asiento from "../asientos/Asiento";
import Swal from "sweetalert2";
import imgMaleta from '../../icons/radio-button-checked/briefcase.svg'
import dollar from '../../icons/radio-button-checked/dollar-sign.svg'


const SelectVuelos = () => {
  const navigate = useNavigate()

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
    console.log(vuelos);
    const vueloCompleto={
      ...vuelos,
      asientos:Number(vueloIda.pasajeros),
      costofinal:precioFinal
    }
    Swal.fire(
      'datos ',
      `Origen :${vueloCompleto.origen} , Destino: ${vueloCompleto.destino}, Pasajeros: ${vueloCompleto.asientos} Ida: ${vueloCompleto.departureTime}PM , Regreso:  ${vueloCompleto.departureTime +2} PM , Costo: ${vueloCompleto.costofinal} $      `,
      'info'
    )
    
    console.log(vueloCompleto);
    sessionStorage.setItem('ticket', JSON.stringify(vueloCompleto));
    navigate('asiento')

    
    
    
  }else{
    Swal.fire(
      'Por favor',
      'Selecciona un vuelo ',
      'info'
    )
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

            <div >
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
                <img  src={imgMaleta} />
                <p> 1 objeto personal</p>
                <h4> 500  <img className="dollar" src={dollar} /> </h4>
              </button>
              <button  onClick={ ()=>{changevalue('2')} } className="vuelos_sections">
                {" "}
                <img  src={imgMaleta} />
                <p> equipaje de mano</p>
                <h4> 700<img className="dollar" src={dollar} />   </h4>
              </button>
              <button onClick={ ()=>{changevalue('3')}  }  className="vuelos_sections">
                {" "}
                <img  src={imgMaleta} />
                <p> Equipaje 25Kg</p>
                <h4> 1000<img className="dollar" src={dollar} /> </h4>
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
       <p> Tarifa base: {vuelos.costo} <img className="dollar" src={dollar} />  </p>
       <p>Costo Maletas:{costo} <img className="dollar" src={dollar} />  </p> 
       <p> Monto a pagar {(vuelos.costo + costo)*Number(vueloIda.pasajeros)}  <img className="dollar" src={dollar} /> </p>
       
       <button onClick={()=>{goAsientos()} }>Seleccionar asientos </button>

        </section>
      </aside>
    </div>
  );
};

export default SelectVuelos;
