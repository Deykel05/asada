import React, { useState } from 'react'
import { ToggleButton } from 'react-bootstrap';

const ServicioRequerido = () => {
    const [radioValue, setRadioValue] = useState('0');

    const radios = [
        { name: 'No', value: '1' },
        { name: 'Si', value: '2' },
    ];
    return (
        <>
            <div className="col-1"></div>
            <div className="col-10 card bg-light my-2 p-3">
                <div className="row ">
                    <div className="col-12 ">
                        <h5 htmlFor="disabledSelect">Servicio Requerido</h5>
                        <hr />
                        <div className="mx-2 my-3">
                            <select className="form-select mt-5" id="disabledSelect">
                                <option>Agua Potable</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="mx-2 my-3" >
                            <label className='form-label'>Cantidad de Unidades Habitacionales en el Inmueble</label>
                            <input className='form-control' type="number" placeholder="Cantidad" />
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <div className='mx-2 my-3'>
                            <label className='form-label w-100' htmlFor="disabledSelect" >Inmueble tiene servicios asociados?</label>
                            <div className='btn-group'>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        variant={idx % 2 ? 'outline-success  mx-1' : 'outline-danger '}
                                        name="radio"
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
                    </div>
                    <div className="col-12 ">
                        <div className=" mx-2 my-3">
                            {radioValue === '2' && <input type="number" placeholder='Numero de Medidor' className="form-control " />}
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default ServicioRequerido