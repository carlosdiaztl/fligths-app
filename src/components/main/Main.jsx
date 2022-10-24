import React from "react";
import MainSection from "./MainSection";
import '../../styles/style.scss'
import fondo from '../../icons/fondoAvion.jpg'
import SectionFooter from "../footer/SectionFooter";



const Main=()=>{
    return(
        <>
        <main className="main">
        <div>

            <MainSection/>
        </div>
            <img className="main_img" src={fondo} alt="fondoavion" />
            <div className="main_pagoseguro">
            <h2 className="main_h21"> Pago seguro</h2>
            <div className="main_divs">

            <SectionFooter/> 
            </div>
            

            </div>
           
        </main>
    
        </>

    )
}
export default Main