import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import '../ConfirmIDA/style.scss'
import Swal from "sweetalert2";
import { Outlet, useNavigate } from "react-router-dom";
import { SendBuy, SendFligth } from "../../services/sendBuy";
const ConfirmIda = () => {
  const navigate = useNavigate();
  const compra = JSON.parse(sessionStorage.getItem("vuelocomprado"));
  
  // const [isTi, setIsTi] = useState(false);
  const [isCC, setIsCC] = useState(false);

  const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
      setValue
  } = useForm({
      defaultValues: {
          name: '',
          identificationType: ''
      }
  });

  useEffect(() => {
      //PETICION A LA API
      setValue('age', 18)
  }, [])
 

  const onSubmit = async(data) => {
      
     const {sillas}=compra
    const compraAenviar={
      costo:compra.costofinal,
      idVuelo:compra.id,
      origen:compra.origen,
      destino:compra.destino,
      sillas:compra.sillas,
      cliente:data.name,
      telefono:data.phone,
      idPerson:data.identificationNumber,
      typeId:data.identificationType
    }
    console.log(compraAenviar);
    const actualziarVueloInfo={
      salidaDate: compra.salidaDate,
      id: compra.id,
      asientos:(compra.asientos-compra.sillasCompradas),
      departureTime: compra.departureTime,
      origen: compra.origen,
      destino: compra.destino,
      costo:compra.costo

    }
  //  await  SendBuy(compraAenviar)
   //actualizar info sin permisos
   await  SendFligth(actualziarVueloInfo,compra.id,)
    console.log(actualziarVueloInfo);
      Swal.fire(
        `GRACIAS POR TU COMPRA ${data.name} `,
        `Origen :${compra.origen} , Destino: ${compra.destino},Pasajeros: ${compra.sillasCompradas
        } Asientos: ${sillas} Ida: ${compra.departureTime}PM , Regreso:  ${compra.departureTime +2} PM , Costo: ${compra.costofinal} $      `,
        'info'
      )
      sessionStorage.clear()

      navigate('/')


  };
  const nuevaCompra=()=>{
    sessionStorage.clear()
 navigate('/')
  }
 

  // useEffect(() => {
  //     if (watch('identificationType') === 'TI') {
  //         setIsTi(true);
  //     }else {
  //         setIsTi(false);
  //     }
  // }, [watch('identificationType')])

  useEffect(() => {
    if (watch('identificationType') === 'CC') {
        setIsCC(true);
    }else {
        setIsCC(false);
    }
}, [watch('identificationType')])


  // const ValidatePass = (value) => {
  //     if (value.length < 8) {
  //         return "La contraseña debería contener al menos 8 caracteres"
  //     } else if (value.length > 16) {
  //         return "La contraseña debe contener menos de 16 de caracteres"
  //     } else {
  //         return true;
  //     }
  // }
  const ValidateName = (value) => {
      if (/^[A-Za-z]+$/i.test(value)) {
          return true
      } else {
          return "El nombre ingresado contiene caracteres no permitidos"
      }
  }

  return (
    <div className="confirm">
    <h1> LLene los datos del pagador</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
          <label>
              Nombre:
              <input
                  type="text"
                  placeholder="Escriba su nombre"
                  {...register("name", { required: true, validate: ValidateName })}
                  className={errors.name ? "input--error" : ""}
              />
              {errors.name && <span>{errors.name.message}</span>}
          </label>
          <label>
              Teléfono:
              <input
                  type="number"
                  placeholder="Escriba su número telefónico"
                  {...register("phone", { required: true })}
              />
              {errors.phone && <span>Este campo es obligatorio</span>}
          </label>
          {/* <label>
              Password:
              <input
                  type="password"
                  placeholder="Escriba su contraseña"
                  {...register("password", { required: true})}
              />
              {errors.password && <span>{errors.password.message}</span>}
          </label> */}
          <label>
              Edad:
              <input
                  type="number"
                  placeholder="Escriba su contraseña"
                  {...register("age", { min: 18, max: 100 })}
              />
              {errors.age && <span>{errors.age.message}</span>}
          </label>
          <label>
              Género:
              <select
                  {...register('gender')}
              >
                  <option value="">Seleccione su género</option>
                  <option value="F">Femenino</option>
                  <option value="M">Masculino</option>
              </select>
          </label>
          <p>Tipo de documento</p>
          <label>
              <input
                  type="radio"
                  value="CC"
                  {...register('identificationType',{ required: true })}
              />
              Cédula de Ciudadanía
          </label>
          {/* <label>
              <input
                  type="radio"
                  value="TI"
                  {...register('identificationType')}
              />
              Tarjeta de Identidad
          </label> */}
          {/* <label>
              <input
                  type="radio"
                  value="NIT"
                  {...register('identificationType')}
              />
              NIT
          </label> */}
          {/* {
              isTi && (
                  <label>
                      Número de TI:
                      <input
                          type="number"
                          placeholder="Escriba su número de TI"
                          {...register("identificationNumber")}
                      />
                      {errors.identificationNumber && <span>{errors.identificationNumber.message}</span>}
                  </label>
              )
          } */}
          {
              isCC && (
                  <label>
                      Número de CC:
                      <input
                          type="number"
                          placeholder="Escriba su número de CC"
                          {...register("identificationNumber",{ required: true })}
                      />
                      {errors.identificationNumber && <span>{errors.identificationNumber.message}</span>}
                  </label>
              )
          }

          <button type="submit">Guardar</button>
          <button onClick={nuevaCompra} >Nueva compra</button>
      </form>
      
     </div>
  );
};

export default ConfirmIda