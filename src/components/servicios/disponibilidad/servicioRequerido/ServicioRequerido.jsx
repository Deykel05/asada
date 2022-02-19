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
            <div className="col-10 card bg-light my-2 p-3" style={{ height: "280px" }}>
                <div className="row">
                    <div className="col-12 my-3">
                        <div className="container px-5">
                            <h5 htmlFor="disabledSelect">Servicio Requerido</h5>
                            <hr />
                            <select className="form-select" id="disabledSelect">
                                <option>Agua Potable</option>
                                <option>Alcantarillado Sanitario</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
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
                                        return console.log(e.currentTarget.value)
                                    }}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mx-5 my-1" >
                            <label className='form-label'>Cantidad de Unidades Habitacionales en el Inmueble</label>
                            <input className='form-control' type="number" placeholder="Cantidad" />
                        </div>
                    </div>
                    <div className="col-6 px-5">
                        <div className="container">
                            {radioValue === '2' && <input type="number" placeholder='Cantidad' className="form-control " />}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default ServicioRequerido