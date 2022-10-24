import React from "react";
import amexlogo from "../../icons/amex.jfif";
import paypallogo from "../../icons/paypal.jfif";
import invexlogo from "../../icons/invexbanco.jfif";
import mastercardlogo from "../../icons/mastercard.png";
import visalogo from "../../icons/visa.jfif";
//part2
import oxxologo from "../../icons/oxxo.jfif";
import sevenelevenlogo from "../../icons/seveneleven.png";
import walmartlogo from "../../icons/walmart.jfif";
import ahorrologo from "../../icons/ahorro.png";



let listaI = [
  { img: amexlogo },
  { img: paypallogo },
  { img: invexlogo },
  { img: mastercardlogo },
  { img: visalogo }
];
const listaD=[
  { img:oxxologo},
  { img: sevenelevenlogo },
  { img: walmartlogo},
  { img:ahorrologo },
]
const SectionFooter = () => {
  return (
    <>
      <div className="main_SectionFooterI">
        <p>Tarjetas de crédito, tarjeta débito y pago electrónico</p>

        <figure>
          {
            listaI.map((item,index)=>(
              <img key={index} src={item.img} alt="x" />
            ))
           
          }
          
        </figure>
      </div>
      <div className="main_SectionFooterD">
        <p>Efectivo en cualquiera de las sucursales participantes</p>

        <figure>
        {
          listaD.map((item,index)=>(
            <img  key={index} src={item.img} alt="x"/>
          ))
          
        }
         
          
        </figure>
      </div>
    </>
  );
};

export default SectionFooter;
