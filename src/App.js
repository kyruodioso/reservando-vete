import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {

  //citas en local storage
  let citasIniciales= JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales){
    citasIniciales=[];
  }

  //Arreglo de citas
  const [citas, setCitas] = useState([]);

  // Uso de use Effect
  useEffect(()=>{
if(citasIniciales){
  localStorage.setItem('citas',JSON.stringify([]))
}else{
  localStorage.setItem('citas',)
} },[citas, citasIniciales])

  //Funcion que toma las citas actuales y agrega nuevas
  const crearCitas = cita => {
    setCitas([
      ...citas,
      cita
    ])
  }

  //funcion que elimina una cita por su Id

  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas)
  }

  // Mensaje condicional
  const titulo= citas.length === 0 ?  'No hay citas pendientes' : 'Administra tus citas'

  return (
    <Fragment >
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCitas={crearCitas}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
