import React from 'react'
import { useState } from 'react';

const Corresponde = () => {
    const [corresponde, setCorresponde] = useState({
        tipo: ""
    });
    const { tipo } = corresponde;
    const handleRadioChange = e => {
        if (e.target.value === '1') {
            setCorresponde({
                tipo: e.target.value
            })
        }
        if (e.target.value === '2') {
            setCorresponde({
                tipo: e.target.value
            })
        }
    }
    return (
        <>
            <div className="col-1"></div>
            <div className="col-10 card bg-light my-2 p-3">
                <h5 htmlFor="disabledSelect">La Solicitud de Constancia de Disponibilidad Corresponde a:</h5>
                <hr />
                <div className="row">
                    <div className="col-6 ">
                        <div className='mx-2 my-3'>
                            <div className="form-check ">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" onChange={handleRadioChange} value='1' />
                                <label className="form-check-label">
                                    Proyecto para visados de planos
                                </label>
                            </div>
                            <div className="form-check ">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" onChange={handleRadioChange} value='2' />
                                <label className="form-check-label" >
                                    Proyetos realcionados en la construccion
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ">
                        {tipo === '1' ?
                            <div className="mx-2 my-3">
                                <select className="form-select mb-1" id="disabledSelect">
                                    <option >Elija una opcion</option>
                                    <option>Fraccionamiento,Segregacion,Lotificacion</option>
                                    <option>Reunion de Fincas</option>
                                    <option>Rectificacion de medidas</option>
                                </select>
                                <input className='form-control' type="number" placeholder="Cantidad de Lotes" />
                            </div>
                            : null
                        }
                        {tipo === '2' ?
                            <div className="mx-2 my-3 ">
                                <select className="form-select mb-1" id="disabledSelect">
                                    <option >Elija una opcion</option>
                                    <option>Nuevo Proyecto Constructivo</option>
                                    <option>Remodelacion</option>
                                    <option>Ampliacion</option>
                                </select>

                                <div className="div">
                                    <label className='mb-1'>Tipo de Proyecto</label>
                                    <select className="form-select" >
                                        <option >Elija una opcion</option>
                                        <option >Vivienda</option>
                                        <option >Local Comercial</option>
                                        <option>Granjas o proyectos Agroindustriales</option>
                                    </select>
                                </div>
                            </div>
                            : null
                        }
                    </div>
                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default Corresponde