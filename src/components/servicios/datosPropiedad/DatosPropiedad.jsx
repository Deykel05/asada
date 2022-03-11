import React, { useState } from 'react'
import { ToggleButton } from 'react-bootstrap';
import NaturalezaInmueble from './NaturalezaInmueble'
import RepresentacionGraficaInmueble from './RepresentacionGraficaInmueble';
import TitularInmueble from './TitularInmueble';
import TituloPropiedad from './TituloPropiedad';

const DatosPropiedad = ({ datosPropiedad, setDatosPropiedad }) => {
    const { naturaleza, tituloPropiedad, titularInmueble, representacionGraficaInmueble } = datosPropiedad;
    const [radioValue, setRadioValue] = useState('0');

    const radios = [
        { name: 'No', value: '1' },
        { name: 'Si', value: '2' },
    ];
    return (
        <>
            <div className="col-1 "></div>
            <div className="col-10 card bg-light my-2 p-3">
                <h5>Datos de la Propiedad</h5>
                <hr />
                <div className="row">
                    <div className="col-12 ">
                        <NaturalezaInmueble
                            setDatosPropiedad={setDatosPropiedad}
                        />
                    </div>
                    <div className="col-12">

                        <TituloPropiedad
                            naturaleza={naturaleza}
                        />
                    </div>
                    <div className="col-12">
                        <TitularInmueble
                            naturaleza={naturaleza}
                        />
                    </div>
                    <div className="col-12">
                        {naturaleza !== '' ?
                            <div className="mx-5 my-3">
                                <label className='form-label w-100' htmlFor="disabledSelect" >Cuenta con plano ?</label>
                                <div className='btn-group'>
                                    {radios.map((radio, idx) => (
                                        <ToggleButton
                                            key={`radioDatos-${idx}`}
                                            id={`radioDatos-${idx}`}
                                            type="radio"
                                            variant={idx % 2 ? 'outline-success  mx-1' : 'outline-danger '}
                                            name="radioDatosPropiedad"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            onChange={(e) => {
                                                setRadioValue(e.currentTarget.value);
                                            }}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                    ))}
                                </div>
                            </div>
                            : null}
                        {radioValue === '2' ?
                            <RepresentacionGraficaInmueble
                                representacionGraficaInmueble={representacionGraficaInmueble}
                                setDatosPropiedad={setDatosPropiedad}
                                naturaleza={naturaleza}
                            />
                            : null}
                    </div>
                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default DatosPropiedad
