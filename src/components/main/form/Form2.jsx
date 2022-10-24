import React, { useState }  from "react";
import logoAvion  from '../../../icons/plane.svg'
import useForm from "../../../hooks/useForm";
import { searchFligths } from "../../../services/getflight";
import Swal from "sweetalert2";
import { useNavigate} from "react-router-dom";

const Form2 = () => {
  const navigate = useNavigate()
  let listaDestinos=['cartagena','medellin','cali','monteria']
  const [dataForm, handleChangeInput] = useForm({
    origen: "",
    destino: "",
    salidaDate: "",
    pasajeros: "",
});
// suma o resta
// const initialValue=0
// const [cantidad, setcantidad] = useState(initialValue)
// const cantidadChange=(op)=>{
//   if (op==='sum') {
//     setcantidad(cantidad +1)
    
//   }
//   if(op==='min'){
//     setcantidad(cantidad -1)

//   }

// }
const filterFligth =async(dataForm)=>{
  const vuelosFiltrados= await searchFligths(dataForm)
  
  if (vuelosFiltrados.length) {
    console.log(vuelosFiltrados);
    sessionStorage.setItem('vueloIda', JSON.stringify(dataForm));
    sessionStorage.setItem('vuelos', JSON.stringify(vuelosFiltrados));
    navigate('vuelos');
    
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
      
      console.log("se puede continuar");
      await filterFligth(dataForm);
     
     
    }else {
      Swal.fire(
        'Faltan datos',
        'Llene los datos por favor',
        'error'
      )
    }
    
   
}
  return   (
    <form onSubmit={handleSubmit} className="main_form">
      <span className="main_form_span">
       
        <h6>Origen</h6>
        <select name="origen" onChange={handleChangeInput}> 
        <option value='' >---</option>
        {listaDestinos.map((item,index)=>(
          <option key={index} value={item} >{item} </option>
          
        ))}
            </select>
      </span>
      <span className="main_form_span">
   
        <h6>Seleccion un destino</h6>
        <select name="destino" onChange={handleChangeInput}> 
        <option value='' >---</option>
        {listaDestinos.map((item,index)=>(
          <option key={index} value={item} >{item} </option>
          
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
        <h6>Pasajeros</h6>
        <select name="pasajeros" onChange={handleChangeInput}>
            <option value="">---</option>
            <option value={1}> 1 Adulto</option>
            <option value={2}> 2 Adulto</option>
            <option value={3}> 3 Adulto</option>
            <option value={4}> 4 Adulto</option>
          </select>


        {/* <input name="pasajeros" onChange={handleChangeInput} value={cantidad}/> 
        <button onClick={()=>{cantidadChange('min')}} >- </button>
       {cantidad}
       <button onClick={()=>{cantidadChange('sum')}}> +</button> */}
        
       
      </span>
      <span className="main_form_spancitos">
        {" "}
        <h6>¿Tienes un código de promoción?</h6>
       <input type="text" style={{marginLeft:"5px"}} placeholder="-- -- -- --" />
      </span>
      <button type="submit" onClick={handleSubmit} > <img style={{width:'12px'}} src={logoAvion} alt="logo avion" /> <p>Buscar vuelos </p>  </button>
      
    </form>
  );
};
export default Form2;
