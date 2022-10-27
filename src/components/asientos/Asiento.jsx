import React, { useCallback, useEffect, useState } from "react";
import "../asientos/style.scss";
import Swal from "sweetalert2";
import { Outlet, useNavigate } from "react-router-dom";
import dollar from "../../icons/radio-button-checked/dollar-sign.svg";

const Asiento = () => {
  let asientos = [];

  const navigate = useNavigate();
  const ticket = JSON.parse(sessionStorage.getItem("ticket"));
  console.log(ticket);

  const [selectsit, setselectsit] = useState([]);
  const listaA = ["A1", "A2", "A3", "A4", "A5", "A6"];
  const listaB = ["B1", "B2", "B3", "B4", "B5", "B6"];
  const listaC = ["C1", "C2", "C3", "C4", "C5", "C6"];

  const getAsiento = useCallback(
    (asiento) => {
      if (asientos.length <= ticket.sillasCompradas - 1) {
        console.log(asiento);
        console.log(ticket.sillasCompradas);
        asientos.push(asiento);
      }
      console.log(asientos);

      if (asientos.length === ticket.sillasCompradas) {
        Swal.fire(
          "GRACIAS",
          `Por seleccionar sus sillas, confirme su compra  `,
          "info"
        );

        setselectsit(asientos);
      }
    },
    [asientos]
  );

  // const getAsiento = (asiento) => {

  // };
  const GoRegister = () => {
    
    console.log(selectsit);
    const newCost = ticket.costofinal + ticket.costofinal * (19 / 100)
    
    const vueloConAsientos={
     ...ticket,
     costofinal:newCost,
     sillas:selectsit
    }
    sessionStorage.clear()
   sessionStorage.setItem('vuelocomprado',JSON.stringify(vueloConAsientos))
    navigate('/vuelos/asiento/confirm')
  };
  const vaciar = () => {
    setselectsit([]);
  };
  return (
    <div className="mainseat">
      <div className="div">
        <div></div>
        <section className="divjet">
          {selectsit.length === ticket.sillasCompradas
            ? listaA.map((item, index) => (
                <button key={index}>
                  {" "}
                  Sillas ya elegidas
                  {}{" "}
                </button>
              ))
            : listaA.map((item, index) => (
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
          {selectsit.length === ticket.sillasCompradas
            ? listaB.map((item, index) => (
                <button key={index}>
                  {" "}
                  Sillas ya elegidas
                  {}{" "}
                </button>
              ))
            : listaB.map((item, index) => (
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
          {selectsit.length === ticket.sillasCompradas
            ? listaC.map((item, index) => (
                <button key={index}>
                  {" "}
                  Sillas ya elegidas
                  {}{" "}
                </button>
              ))
            : listaC.map((item, index) => (
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
      <div className="mainseat_datos">
        {" "}
        <h1>Datos generales</h1>
        <section className="mainseat_datosvuelo">
          <h3>Datos del vuelo</h3>

          <span>Pasajeros: {ticket.sillasCompradas} </span>
          <span> Vuelo de salida </span>
          <span className="mainseat_spaninfo">
            <section style={{ gap: "5px" }}>
              <p> orgien:{ticket.origen} </p>
              <p>Destino{ticket.destino} </p>
            </section>
            <section>
              <p>Hora salida:{ticket.departureTime}Pm </p>
              <p>Hora llegada:{ticket.departureTime + 2}Pm </p>
            </section>
            <span>Fecha:{ticket.salidaDate} </span>
          </span>

          <span>
            {selectsit.map((item, index) => (
              <p key={index}> Silla: {item} </p>
            ))}{" "}
          </span>
        </section>
        <section className="mainseat_spancosto">
          <h3>Costo del vuelo</h3>

          <span>
            Costo total:{ticket.costofinal}{" "}
            <img style={{ width: "18px" }} src={dollar} />
          </span>
          <span>
            IVA: {ticket.costofinal * (19 / 100)}{" "}
            <img style={{ width: "18px" }} src={dollar} />{" "}
          </span>
          <span>
            Costo total + Iva :{" "}
            {ticket.costofinal + ticket.costofinal * (19 / 100)}{" "}
            <img style={{ width: "18px" }} src={dollar} />{" "}
          </span>
        </section>
        {selectsit.length === ticket.sillasCompradas ? (
          <button className="mainseat_datos_button1" onClick={vaciar}>
            {" "}
            Cambiar sillas{" "}
          </button>
        ) : (
          ""
        )}
        {selectsit.length === ticket.sillasCompradas ? (
          <button onClick={GoRegister}> Confirmar compra </button>
        ) : (
          ""
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Asiento;
