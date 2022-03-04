import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import MediosParaNotificacion from '../MediosParaNotificacion';
import DatosPropiedad from '../datosPropiedad/DatosPropiedad';
import LocalizacionPropiedad from '../localizacionPropiedad/LocalizacionPropiedad';
import NombreTitularInmueble from '../nombreTitularInmueble/NombreTitularInmueble';
import ServicioRequerido from './servicioRequerido/ServicioRequerido';
import '../../../estilos/servicios/styles.css';
import Corresponde from './solicitudCorrespondeA/Corresponde';
import Informacion from './informacion/Informacion';
const Disponibilidad = () => {

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
        <h5 className='py-3 card-title'>Disponibilidad de Agua Potable</h5>
        <form>

          <div className="row">
            <NombreTitularInmueble />

            <LocalizacionPropiedad />
            <ServicioRequerido />

            <DatosPropiedad
              datosPropiedad={datosPropiedad}
              setDatosPropiedad={setDatosPropiedad}
            />
            <MediosParaNotificacion />

            <Corresponde />
            <Informacion/>
          </div>

          <Button type="submit">Enviar Solicitud</Button>

        </form>
      </div>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </div>
  )
};

export default Disponibilidad;
