import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import '../ConfirmIDA/style.scss'
const ConfirmIda = () => {
  const [isTi, setIsTi] = useState(false);

  const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
      setValue
  } = useForm({
      defaultValues: {
          name: 'luis',
          identificationType: ''
      }
  });

  useEffect(() => {
      //PETICION A LA API
      setValue('age', 18)
  }, [])

  const onSubmit = (data) => {
      console.log(data);
  };

  useEffect(() => {
      if (watch('identificationType') === 'TI') {
          setIsTi(true);
      }else {
          setIsTi(false);
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
                  {...register('identificationType')}
              />
              Cédula de Ciudadanía
          </label>
          <label>
              <input
                  type="radio"
                  value="TI"
                  {...register('identificationType')}
              />
              Tarjeta de Identidad
          </label>
          <label>
              <input
                  type="radio"
                  value="NIT"
                  {...register('identificationType')}
              />
              NIT
          </label>
          {
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
          }

          <button type="submit">Guardar</button>
      </form>
     </div>
  );
};

export default ConfirmIda