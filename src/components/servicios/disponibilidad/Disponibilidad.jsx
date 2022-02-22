import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import MediosParaNotificacion from '../MediosParaNotificacion';
import DatosPropiedad from './datosPropiedad/DatosPropiedad';
import LocalizacionPropiedad from './localizacionPropiedad/LocalizacionPropiedad';
import NombreTitularInmueble from './nombreTitularInmueble/NombreTitularInmueble';
import ServicioRequerido from './servicioRequerido/ServicioRequerido';
import '../../../estilos/servicios/styles.css';
import Corresponde from './solicitudCorrespondeA/Corresponde';
const Disponibilidad = () => {

  const [datosPropiedad, setDatosPropiedad] = useState({
    naturaleza: '',
    tituloPropiedad: '',
    titularInmueble: '',
    representacionGraficaInmueble: ''
  });

  return (
    <div className="text-center card">
      <div className='card-header'>Instituto Costarricense de Acueductos y Alcantarillados</div>
      <div className='card-body'>
        <h5 className='py-3 card-title'>Disponibilidad de Agua Potable y Alcantarillado Sanitario</h5>
        <form>

          <div className="row">
            <ServicioRequerido />

            <DatosPropiedad
              datosPropiedad={datosPropiedad}
              setDatosPropiedad={setDatosPropiedad}
            />

            <NombreTitularInmueble />

            <LocalizacionPropiedad />

            <MediosParaNotificacion />
            
            <Corresponde/>
          </div>

          <Button type="submit">Enviar Solicitud</Button>

        </form>
      </div>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </div>
  )
};

export default Disponibilidad;
