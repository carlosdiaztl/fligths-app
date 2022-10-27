import React, { useState } from "react";
import "../asientos/style.scss";
import Swal from "sweetalert2";
import { Outlet, useNavigate } from "react-router-dom";

const Asiento = () => {
  const navigate = useNavigate()
  const ticket = JSON.parse(sessionStorage.getItem("ticket"));
  console.log(ticket);
  const [buttonGO, setbuttonGO] = useState(<></>)

  const [selectsit, setselectsit] = useState([]);
  const listaA = ["A1", "A2", "A3", "A4",'A5','A6'];
  const listaB = ["B1", "B2", "B3", "B4",'B5','B6'];
  const listaC = ["C1", "C2", "C3", "C4",'C5','C6'];
  let asientos = [];
  const getAsiento = (asiento) => {
    
    if (asientos.length <= (ticket.sillasCompradas-1)) {
    console.log(asiento);
    console.log(ticket.sillasCompradas);
    asientos.push(asiento);
    }
    console.log(asientos);
      if (asientos.length === (ticket.sillasCompradas)) {
        Swal.fire(
          'GRACIAS',
          `Por seleccionar sus sillas, confirme su compra  `,
          'info'
        )
        setbuttonGO(<button onClick={GoRegister} > Confirmar compra </button>)
        
      }
  };
  const GoRegister=()=>{
    navigate('/vuelos/asiento/confirm')
    

  }
  return (
    <div className="mainseat">
    
      
     

      <div className="div">
     
      
     <div> 
     </div>
        <section className="divjet">
          {listaA.map((item, index) => (
            <button
              onClick={() => {
                getAsiento(item);
              }}
              key={index}
            >
              {item}{" "}
            </button>
          ))}
        </section>
        <section className="divjet">
          {listaB.map((item, index) => (
            <button
              onClick={() => {
                getAsiento(item);
              }}
              key={index}
            >
              {item}{" "}
            </button>
          ))}
        </section>
        <section className="divjet">
          {listaC.map((item, index) => (
            <button
              onClick={() => {
                getAsiento(item);
              }}
              key={index}
            >
              {item}{" "}
            </button>
          ))}
        </section>
      </div>
      <div className="mainseat_datos"> <h1>Aqui los datos </h1>

      {buttonGO}
      
      </div>
      <Outlet/>
    </div>
  );
};

export default Asiento;
