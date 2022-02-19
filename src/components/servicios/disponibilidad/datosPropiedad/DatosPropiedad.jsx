import React from 'react'
import NaturalezaInmueble from './NaturalezaInmueble'
import RepresentacionGraficaInmueble from './RepresentacionGraficaInmueble';
import TitularInmueble from './TitularInmueble';
import TituloPropiedad from './TituloPropiedad';

const DatosPropiedad = ({ datosPropiedad, setDatosPropiedad }) => {
    const { naturaleza, tituloPropiedad, titularInmueble, representacionGraficaInmueble } = datosPropiedad;
    return (
        <>
            <div className="col-1 "></div>
            <div className="col-10 card bg-light my-2 p-3" style={{ height: "420px" }}>
                <h5>Datos de la Propiedad</h5>
                <hr />
                <div className="row">
                    <div className="col-6 py-5">
                        <NaturalezaInmueble
                            setDatosPropiedad={setDatosPropiedad}
                        />
                    </div>
                    <div className="col-6">
                        <TituloPropiedad
                            naturaleza={naturaleza}
                        />
                        <TitularInmueble
                            naturaleza={naturaleza}
                        />
                        <RepresentacionGraficaInmueble
                            representacionGraficaInmueble={representacionGraficaInmueble}
                            setDatosPropiedad={setDatosPropiedad}
                            naturaleza={naturaleza}
                        />
                    </div>
                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default DatosPropiedad
