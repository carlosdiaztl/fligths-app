import React from "react";
import logoAvion  from '../../../icons/plane.svg'
import useForm from "../../../hooks/useForm";

const Form1 = () => {
  const [dataForm, handleChangeInput] = useForm({

   
});
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(dataForm);
   
}
  return (
    <form onSubmit={handleSubmit} className="main_form">
      <span className="main_form_span">
       
        <h6>Origen</h6>
        <select name="origen" onChange={handleChangeInput}> 
                 <option value='' >---</option>
                <option value='medellin' > Medellin</option>
            </select>
      </span>
      <span className="main_form_span">
   
        <h6>Seleccion un destino</h6>
        <select name="destino" onChange={handleChangeInput}> 
                <option value='' >---</option>
                <option value='medellin' > Medellin</option>
            </select>
      </span>
      <span className="main_form_spancitos">
   
        <h6>Salida</h6>
        <input onChange={handleChangeInput}
          type="date"
          name='salidaDate'
          className="main_form_control"
          aria-label="Fecha"
          aria-describedby="date"
          min="2022-10-27"
          max="2022-12-31"
           />
      </span>
      <span className="main_form_spancitos">
        <h6>Regreso</h6>
        <input onChange={handleChangeInput}
          type="date"
          name='regresoDate'
          className="main_form_control"
          aria-label="Fecha"
          aria-describedby="date"
          min="2022-10-27"
         max="2022-12-31"
           />
          
      </span>
      <span className="main_form_spancitos">
        <h6>Pasajeros</h6>
        <select name="pasajeros" onChange={handleChangeInput}> 
                <option value='' >---</option>  
                <option value='1'> 1 Adulto</option>
                <option  value='2'> 2 Adulto</option>
                <option  value='3'> 3 Adulto</option>
                <option value='4'> 4 Adulto</option>
            </select>
      </span>
      <span className="main_form_spancitos">
        {" "}
        <h6>¿Tienes un código de promoción?</h6>
       <input type="text" style={{marginLeft:"5px"}} placeholder="-- -- -- --" />
      </span>
      <button type="submit"> <img style={{width:'12px'}} src={logoAvion} alt="logo avion" /> <p>Buscar vuelos </p>  </button>
      
      
    </form>
  );
};
export default Form1;
