import React from "react";
import logoAvion  from '../../../icons/plane.svg'
import useForm from "../../../hooks/useForm";
import { searchFligths } from "../../../services/getflight";
import Swal from "sweetalert2";
import { Navigate, useNavigate} from "react-router-dom";

const Form1 = () => {
  const navigate = useNavigate()
  const [dataForm, handleChangeInput] = useForm({
    origen: "",
    destino: "",
    salidaDate: "",
    pasajeros: "",
    regresoDate:""
});
let listaDestinos=['Cartagena','Medellin','Cali','Monteria']
const filterFligthxs =async(vueloDeIda,vueloDeVuelta)=>{
  const vuelosGo= await searchFligths(vueloDeIda)
  const vuelosBack= await searchFligths(vueloDeVuelta)
  
  if (vuelosGo.length && vuelosBack.length) {
    console.log(vuelosGo,vuelosBack);
    navigate('vuelosidaconvuelta')
    sessionStorage.setItem('vueloGo', JSON.stringify(vuelosGo));
    sessionStorage.setItem('vueloBack', JSON.stringify(vuelosBack));
    
    
  }else{
    Swal.fire(
      'Upps',
      'No se encontraron vuelos!',
      'error'
    )
  }
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(dataForm);
    if ( dataForm.origen !== "" &&
    dataForm.destino !== "" &&
    dataForm.salidaDate !== "" &&
    dataForm.regresoDate !== "" &&
    dataForm.pasajeros !== "") {
    
      console.log('se puede continuar');
      const vueloDeIda={
      origen:  dataForm.origen,
      destino: dataForm.destino,
      salidaDate: dataForm.salidaDate,
      pasajeros: dataForm.pasajeros,
      }
      console.log(vueloDeIda);
      const vueloDeVuelta={
        origen:  dataForm.origen,
        destino: dataForm.destino,
        salidaDate: dataForm.regresoDate,
        pasajeros: dataForm.pasajeros,
      }
      console.log(vueloDeVuelta);
      await filterFligthxs(vueloDeIda,vueloDeVuelta);
      
    }
    else{
      console.log('llene los campos');
    }
   
}
  return (
    <form onSubmit={handleSubmit} className="main_form">
      <span className="main_form_span">
       
        <h6>Origen</h6>
        <select name="origen" onChange={handleChangeInput}> 
                 <option value='' >---</option>
                 {listaDestinos.map((item,index)=>(
          <option key={index} value={item} > {item} </option>

        ))}
            </select>
      </span>
      <span className="main_form_span">
   
        <h6>Seleccion un destino</h6>
        <select name="destino" onChange={handleChangeInput}> 
        <option value='' >---</option>
        {listaDestinos.map((item,index)=>(
          <option key={index} value={item} > {item} </option>

        ))}
                
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
          min="2022-09-01"
          max="2022-10-31"
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
          min="2022-09-01"
          max="2022-10-31"
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
