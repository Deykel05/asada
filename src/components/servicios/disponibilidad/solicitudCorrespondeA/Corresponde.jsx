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
            <div className="col-10 card bg-light my-3 p-5" style={{ height: "325px" }}>
                <div className="row">
                    <div className="p-2">
                        <h5 htmlFor="disabledSelect">La Solicitud de Constancia de Disponibilidad Corresponde a:</h5>
                        <hr />
                    </div>
                    <div className="col-5 py-5">
                        <div className="form-check mx-5">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" onChange={handleRadioChange} value='1' />
                            <label className="form-check-label">
                                Proyecto para visados de planos
                            </label>
                        </div>
                        <div className="form-check mx-5">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" onChange={handleRadioChange} value='2' />
                            <label className="form-check-label" >
                                Proyetos realcionados en la construccion
                            </label>
                        </div>
                    </div>
                    <div className="col-7 p-2">
                        {tipo === '1' ?
                            <div className="container">
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
                            <div className="container ">
                                <select className="form-select mb-1" id="disabledSelect">
                                    <option >Elija una opcion</option>
                                    <option>Nuevo Proyecto Constructivo</option>
                                    <option>Remodelacion</option>
                                    <option>Ampliacion</option>
                                </select>
                                <div className="input-group mb-1">
                                    <input type="text" className="form-control" placeholder="Caudal Requerido" />
                                    <span className="input-group-text"> </span>
                                    <input type="text" className="form-control" placeholder="Niveles de Construccion" />
                                    <span className="input-group-text"> </span>
                                    <input type="text" className="form-control" placeholder="Area por Construir" />
                                </div>
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

                    {/* <div className="col-6">
                        <div className="mx-5 my-1" >
                            <label className='form-label'>Cantidad de Unidades Habitacionales en el Inmueble</label>
                            <input className='form-control' type="number" placeholder="Cantidad" />
                        </div>
                    </div>
                    <div className="col-6 px-5">
                        <div className="container">
                            {radioValue === '2' && <input type="number" placeholder='Cantidad' className="form-control " />}
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default Corresponde