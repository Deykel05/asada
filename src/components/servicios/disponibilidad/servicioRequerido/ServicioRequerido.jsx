import React, { useState } from 'react'

const ServicioRequerido = ({ handleInputChange, formValues }) => {

    const { numeroMedidor } = formValues;

    const [radioValue, setRadioValue] = useState('0');

    if (radioValue === '1') {
        if (numeroMedidor) {
            delete formValues.numeroMedidor;
        }
    }
    return (
        <>
            <div className="col-1"></div>
            <div className="col-10 card bg-light my-2 p-3">
                <h5 >Servicio Requerido</h5>
                <hr />
                <div className="row gx-2 gy-1 align-items-center">
                    <div className="col-md-6 ">
                        <div className="mx-2 my-3">
                            <label className='form-label'>Servicio Requerido</label>
                            <select className="form-select form-select-sm" name='servicioRequerido' onChange={handleInputChange} required>
                                <option value=''>Elija una opcion</option>
                                <option>Agua Potable</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mx-2 my-3" >
                            <label className='form-label'>Cantidad de Unidades Habitacionales en el Inmueble</label>
                            <input className='form-control form-control-sm' type="number" placeholder="Cantidad" name='cantidadUnidadesHabitacionales' onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='mx-2 my-3'>
                            <label className='form-label ' >Inmueble tiene servicios asociados?</label>
                            <div className='row justify-content-center' >
                                <div className="col-auto">
                                    <div className="form-check ">
                                        <input className="form-check-input " type="radio" name="radioServicioAsociado" value='2' onChange={e => { setRadioValue(e.target.value) }} required />
                                        <label className="form-check-label"> Si</label>
                                    </div>

                                </div>
                                <div className="col-auto">
                                    <div className="form-check ">
                                        <input className="form-check-input " type="radio" name="radioServicioAsociado" value='1' onChange={e => { setRadioValue(e.target.value) }} />
                                        <label className="form-check-label" > No </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className=" mx-2 my-3">
                            {radioValue === '2' &&
                                <>
                                    <label className='form-label'>Numero de paja</label>
                                    <input type="number" placeholder='Numero de paja' className="form-control form-control-sm" name='numeroMedidor' onChange={handleInputChange} required />
                                </>
                            }
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default ServicioRequerido