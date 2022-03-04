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

const NuevaConexion = () => {
  const [datosPropiedad, setDatosPropiedad] = useState({
    naturaleza: '',
    tituloPropiedad: '',
    titularInmueble: '',
    representacionGraficaInmueble: ''
  });
  return (
    <div className="text-center card">
      <div className='card-header'>Asociación Administradora Acueducto Rural Florida de Siquirres</div>
      <div className='card-body'>
        <h5 className='py-3 card-title'>Nueva Conexion(Agua Potable)</h5>
        <form>

          <div className="row">
            <TipoSolicitudNuevaConexion/>
            <NombreTitularInmueble/>
            <LocalizacionPropiedad/>
            <DatosPropiedad
            datosPropiedad={datosPropiedad}
            setDatosPropiedad={setDatosPropiedad}
            />
            <MediosParaNotificacion/>
            <FormaPago/>
            <Informacion/>
          </div>

          <Button type="submit">Enviar Solicitud</Button>

        </form>
      </div>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </div>
  )
}

export default NuevaConexion