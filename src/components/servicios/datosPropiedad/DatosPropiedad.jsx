import React, { useState } from 'react'
import { ToggleButton } from 'react-bootstrap';
import NaturalezaInmueble from './NaturalezaInmueble'
import RepresentacionGraficaInmueble from './RepresentacionGraficaInmueble';
import TitularInmueble from './TitularInmueble';
import TituloPropiedad from './TituloPropiedad';

const DatosPropiedad = ({ formValues, handleInputChange, reset }) => {


    const { naturaleza, planoAgrimesura, planoCatastroProvincia, planoCatastroNumero, planoCatastroAño, cuentaConPlano } = formValues

    if (cuentaConPlano !== 'Si') {
        if (planoAgrimesura) {
            delete formValues.planoAgrimesura;
        }
        if (planoCatastroProvincia) {
            delete formValues.planoCatastroProvincia;
        }
        if (planoCatastroNumero) {
            delete formValues.planoCatastroNumero;
        }
        if (planoCatastroAño) {
            delete formValues.planoCatastroAño;
        }
    }
    return (
        <>
            <div className="col-1 "></div>
            <div className="col-10 card bg-light my-2 p-3">
                <h5>Datos de la Propiedad</h5>
                <hr />
                <div className="row">
                    <div className="col-12 ">
                        <NaturalezaInmueble
                            formValues={formValues}
                            handleInputChange={handleInputChange}
                            reset={reset}
                        />
                    </div>
                    <div className="col-12">

                        <TituloPropiedad
                            formValues={formValues}
                            handleInputChange={handleInputChange}
                        />
                    </div>
                    <div className="col-12">
                        <TitularInmueble
                            formValues={formValues}
                            handleInputChange={handleInputChange}
                        />
                    </div>
                    <div className="col-12">
                        {naturaleza !== '' ?
                            <div className="mx-5 my-3">
                                <label className='form-label w-100'  >Cuenta con plano ?</label>
                                <div className='row justify-content-center' >
                                    <div className="col-auto">
                                        <div className="form-check ">
                                            <input className="form-check-input " type="radio" name="cuentaConPlano" value='Si' onChange={handleInputChange} required />
                                            <label className="form-check-label"> Si</label>
                                        </div>

                                    </div>
                                    <div className="col-auto">
                                        <div className="form-check ">
                                            <input className="form-check-input " type="radio" name="cuentaConPlano" value='No' onChange={handleInputChange} />
                                            <label className="form-check-label" > No </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : null}
                        {cuentaConPlano && cuentaConPlano === 'Si' ?
                            <RepresentacionGraficaInmueble
                                formValues={formValues}
                                handleInputChange={handleInputChange}
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
