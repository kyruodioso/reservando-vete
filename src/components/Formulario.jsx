import React, {Fragment, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

const Formulario = ({crearCitas}) => {

    const [cita, setCita]= useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    const [error, setError]= useState(false)

    //Se ejecuta cada vez que el usuario escribe en un input
    const actualizarState=(e)=>{
setCita({
    ...cita,
   [e.target.name]: e.target.value
})  
  }

  // Extraer valores

  const{mascota,propietario,fecha,hora,sintomas}= cita;


  //Enviar formulario
  const submitCita=(e)=>{
      e.preventDefault();

      //validar
      if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''   ){
          setError(true)
      }

      // Eliminar mensaje previo
      setError(false)

      //Asignar un ID
      cita.id = uuidv4()
      //Crear Cita
       crearCitas(cita)
      //Reiniciar el Form
      setCita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
      })
  }

    return (
     <Fragment>
         <h2>Crear Cita</h2>

         {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

         <form
         onSubmit={submitCita}
         >
             <label>Nombre de Mascota</label>
             <input type="text" name="mascota" className="u-full-width" placeholder="Nombre de Mascota" 
             onChange={actualizarState}
             value={mascota}
             />
             <label>Nombre del responsable</label>
             <input type="text" name="propietario" className="u-full-width" placeholder="Nombre del responsable" 
             onChange={actualizarState}
             value={propietario}
             />
             <label>Fecha</label>
             <input type="date" name="fecha" className="u-full-width" onChange={actualizarState}
             value={fecha}
/>
             <label>Hora</label>
             <input type="time" name="hora" className="u-full-width" onChange={actualizarState}
             value={hora}
/>
             <label>Sintomas</label>
             <textarea 
             className="u-full-width"
             name="sintomas" onChange={actualizarState}
             value={sintomas}
             ></textarea>
             <button
             type="submit"
             className="u-full-width button-primary"
             >Agregar Cita</button>
         </form>
     </Fragment>
    )
}

Formulario.propTypes ={
    crearCitas: PropTypes.func.isRequired
}

export default Formulario