import React from 'react';
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
import { useDispatch } from 'react-redux';
import { startNewRequest } from '../../../actions/requests';
const Disponibilidad = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset, setValues] = useForm({
    estado: '1',
    tipoSolicitud: 'disponibilidad',
    naturaleza: '',
    fecha: new Date().getTime(),
    tipoPersona: '1'

  });

  const handleForm = e => {
    e.preventDefault();
    dispatch(startNewRequest(formValues));
    reset({
      tipoSolicitud: 'disponibilidad',
      naturaleza: '',
      fecha: new Date().getTime(),
      tipoPersona: '1'
    });
  }
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
              setValues={setValues}
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
      <Card.Footer className="text-muted">La ASADA Florida cuenta con 3 dias habiles para contestar la solicitud</Card.Footer>
    </div>
  )
};

export default Disponibilidad;
