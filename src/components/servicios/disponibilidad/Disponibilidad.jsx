import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import MediosParaNotificacion from '../MediosParaNotificacion';
import DatosPropiedad from '../datosPropiedad/DatosPropiedad';
import LocalizacionPropiedad from '../localizacionPropiedad/LocalizacionPropiedad';
import NombreTitularInmueble from '../nombreTitularInmueble/NombreTitularInmueble';
import ServicioRequerido from './servicioRequerido/ServicioRequerido';
import '../../../estilos/servicios/styles.css';
import Corresponde from './solicitudCorrespondeA/Corresponde';
import Informacion from './informacion/Informacion';
import { useForm } from '../../../hooks/useForm';
const Disponibilidad = () => {

  //   const [disponibilidad, setDisponibilidad] = useState({
  //     tipo:'disponibilidad',
  //     titularInmueble: {},
  //     localizacionPropiedad: {},
  //     servicioRequerido: {},
  //     datosPropiedad: {},
  //     mediosNotificacion: {},
  //     solicitudConstancia: {},
  //     date: new Date().getTime()
  // });
  const [formValues, handleInputChange, reset] = useForm({
    tipo: 'disponibilidad',
    naturaleza: '',
    fecha: new Date().getTime(),
    tipoPersona:'1'

  });
  const handleForm = e => {
    e.preventDefault();
  }
  console.log(formValues);
  return (
    <div className="text-center card">
      <div className='card-header'>Asociación Administradora Acueducto Rural Florida de Siquirres</div>
      <div className='card-body'>
        <h5 className='py-3 card-title'>Disponibilidad de Agua Potable</h5>
        <form onSubmit={handleForm}>

          <div className="row">
            <NombreTitularInmueble
              handleInputChange={handleInputChange}
              formValues={formValues}
            />

            <LocalizacionPropiedad
              handleInputChange={handleInputChange}
            />
            <ServicioRequerido
              handleInputChange={handleInputChange}
              formValues={formValues}
            />

            <DatosPropiedad
              handleInputChange={handleInputChange}
              formValues={formValues}
            />
            <MediosParaNotificacion
              handleInputChange={handleInputChange}
            />

            <Corresponde
              handleInputChange={handleInputChange}
              formValues={formValues}
            />
            <Informacion />
          </div>

          <Button type="submit">Enviar Solicitud</Button>

        </form>
      </div>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </div>
  )
};

export default Disponibilidad;
