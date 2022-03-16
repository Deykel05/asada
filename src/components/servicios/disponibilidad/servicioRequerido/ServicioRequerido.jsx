import React, { useState } from 'react'
import { ToggleButton } from 'react-bootstrap';

const ServicioRequerido = ({ handleInputChange }) => {
    const [radioValue, setRadioValue] = useState('0');
    console.log(radioValue);

    return (
        <>
            <div className="col-1"></div>
            <div className="col-10 card bg-light my-2 p-3">
                <div className="row ">
                    <div className="col-12 ">
                        <h5 >Servicio Requerido</h5>
                        <hr />
                        <div className="mx-2 my-3">
                            <select className="form-select mt-5" name='servicioRequerido' onChange={handleInputChange} required>
                                <option value=''>Elija una opcion</option>
                                <option>Agua Potable</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="mx-2 my-3" >
                            <label className='form-label'>Cantidad de Unidades Habitacionales en el Inmueble</label>
                            <input className='form-control' type="number" placeholder="Cantidad" name='cantidadUnidadesHabitacionales' onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className='mx-2 my-3'>
                            <label className='form-label w-100' >Inmueble tiene servicios asociados?</label>
                            <div className='row justify-content-center' >
                                <div className="col-auto">
                                    <div className="form-check ">
                                        <input className="form-check-input " type="radio" name="radioServicioAsociado" value='2' required="required" onChange={e => { setRadioValue(e.target.value) }} />
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
                    <div className="col-12 ">
                        <div className=" mx-2 my-3">
                            {radioValue === '2' && <input type="number" placeholder='Numero de Medidor' className="form-control " name='numeroMedidor' onChange={handleInputChange} required />}
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default ServicioRequerido