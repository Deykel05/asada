import React from 'react'
import { useState } from 'react'
import '../../../estilos/servicios/styles.css';
import { Button, Card } from 'react-bootstrap'
import DatosPropiedad from '../datosPropiedad/DatosPropiedad'
import LocalizacionPropiedad from '../localizacionPropiedad/LocalizacionPropiedad'
import MediosParaNotificacion from '../MediosParaNotificacion'
import NombreTitularInmueble from '../nombreTitularInmueble/NombreTitularInmueble'
import FormaPago from './formaPago/FormaPago'
import Informacion from './informacion/Informacion'
import TipoSolicitudNuevaConexion from './tipoSolicitud/TipoSolicitudNuevaConexion'
import { useDispatch } from 'react-redux';
import { useForm } from '../../../hooks/useForm';
import { startNewRequest } from '../../../actions/requests';

const NuevaConexion = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset, setValues] = useForm({
    naturaleza: '',
    fecha: new Date().getTime(),
    tipoPersona: '1'

  });
  const handleForm = e => {
    e.preventDefault();
    dispatch(startNewRequest(formValues));
    reset({
      naturaleza: '',
      fecha: new Date().getTime(),
      tipoPersona: '1'
    });
  }
  return (
    <div className="text-center card">
      <div className='card-header'>Asociación Administradora Acueducto Rural Florida de Siquirres</div>
      <div className='card-body'>
        <h5 className='py-3 card-title'>Nueva Conexion(Agua Potable)</h5>
        <form onSubmit={handleForm}>

          <div className="row">
            <TipoSolicitudNuevaConexion
              handleInputChange={handleInputChange}
            />
            <NombreTitularInmueble
              handleInputChange={handleInputChange}
              formValues={formValues}
              setValues={setValues}
            />
            <LocalizacionPropiedad
              handleInputChange={handleInputChange}
            />
            <DatosPropiedad
              handleInputChange={handleInputChange}
              formValues={formValues}
            />
            <MediosParaNotificacion
              handleInputChange={handleInputChange}
            />
            <FormaPago
              handleInputChange={handleInputChange}
            />
            <Informacion />
          </div>

          <Button type="submit">Enviar Solicitud</Button>

        </form>
      </div>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </div>
  )
}

export default NuevaConexion