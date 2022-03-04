import React from 'react'
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap'

const Inspeccion = () => {
    const listaMotivos = ['Alto consumo', 'Fugas internas', 'Daños en el medidor', 'Baja presion', 'Otro'];
    const [motivoInspeccion, setMotivoInspeccion] = useState('');
    const handleMotivo = e => {
        setMotivoInspeccion(e.target.value)
    }
    return (
        <div className="text-center card" style={{height:"70vh"}}>
            <div className='card-header '>Asociación Administradora Acueducto Rural Florida de Siquirres</div>
            <div className='card-body pt-4'>
                <h5 className='py-3 card-title'>Solicitud de Inspeccion</h5>
                <form>

                    <div className="row">
                        <div className="col-1 "></div>
                        <div className="col-10 bg-light card my-2 p-3 ">
                            <div className="radio">
                                <div className="row">
                                    <div className="col-8 p-2">
                                        <div className="input-group mb-1">
                                            <input type="text" className="form-control" placeholder="Nombre" />
                                            <span className="input-group-text">-</span>
                                            <input type="text" className="form-control" placeholder="Primer Apellido" />
                                            <span className="input-group-text">-</span>
                                            <input type="text" className="form-control" placeholder="Segundo Apellido" />
                                        </div>
                                    </div>
                                    <div className="col-4 p-2">
                                        <input type="number" className="form-control" placeholder="Numero de Identificacion" />
                                    </div>

                                    <div className="col-6 mb-1">
                                        <label className='form-label' htmlFor="disabledSelect">Motivo de Inspeccion</label>
                                        <select className="form-select" onChange={handleMotivo}>
                                            <option value='' >Elija una opcion</option>
                                            {listaMotivos.map((n, x) =>
                                                <option key={x + '-' + n}>{n}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="col-6 mb-2">
                                    <div className="input-group mb-2">
                                            <input type="number" className="form-control" placeholder="Numero de Telefono" />
                                            <span className="input-group-text">-</span>
                                            <input type="email" className="form-control" placeholder="Correo electronico" />
                                            
                                        </div>
                                        
                                        <input type="number" className="form-control " placeholder="Numero de Paja" />
                                    </div>
                                    <div className="col-12">
                                        {motivoInspeccion === 'Otro' ?
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ resize: "none", height: "100px" }} ></textarea>
                                                <label className=''>Detalle el motivo</label>
                                            </div>
                                            :
                                            null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 "></div>
                    </div>

                    <Button type="submit">Enviar Solicitud</Button>

                </form>
            </div>
            <Card.Footer className="text-muted">La ASADA Florida cuenta con 3 dias habiles para contestar la solicitud</Card.Footer>
        </div>
    )
}

export default Inspeccion