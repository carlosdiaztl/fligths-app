import React from "react";
import Form1 from "./form/Form1.jsx";
import { useState } from "react";
import Form2 from "./form/Form2.jsx";
const MainSection = () => {
const initialState=<Form1/>
  const [typeFly, setTypeFly] = useState(initialState)
 const  changeFlyType =(type)=>{
  if (type === 'idaYvuelta') {
    setTypeFly(<Form1/>)
    
  }if(type === 'soloIda'){
    setTypeFly(<Form2/>)

  }

 }
  
  return (
    
      <div className="main_viajes">
      <h3 className="main_h2"> Busca un nuevo destino y <br/> comienza la aventura.</h3>
      <h6 className="main_h6"> Descubre vuelos al mejor precio y perfectos para cualquier viaje </h6>
       <span className="main_span">
       <button onClick={()=>{changeFlyType('idaYvuelta')} }>Viaje redondo</button>
       <button onClick={()=>{changeFlyType('soloIda')}}>Viaje sencillo</button>
       </span>
        {typeFly}
      </div>
    
  );
};
export default MainSection;
