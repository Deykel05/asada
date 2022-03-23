import React from 'react'
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { startNewRequest } from '../../../actions/requests';
import { useForm } from '../../../hooks/useForm';

const Inspeccion = () => {

    const dispatch = useDispatch();

    const listaMotivos = ['Alto consumo', 'Fugas internas', 'Daños en el medidor', 'Baja presion', 'Otro'];


    const [formValues, handleInputChange, reset, setValues] = useForm({
        estado: '1',
        tipoSolicitud: 'inspeccion',
        fecha: new Date().getTime()
    });
    const { motivoInspeccion, motivoInspeccionDetallado } = formValues;

    if (motivoInspeccion && motivoInspeccion !== 'Otro') {
        if (motivoInspeccionDetallado) {
            delete formValues.motivoInspeccionDetallado;
        }
    }
    const handleForm = e => {
        e.preventDefault();
        dispatch(startNewRequest(formValues));
        reset({
            tipoSolicitud: 'inspeccion',
            fecha: new Date().getTime()
        });
    }
    return (
        <div className="text-center card" >
            <div className='card-header '>Asociación Administradora Acueducto Rural Florida de Siquirres</div>
            <div className='card-body pt-4 pb-5'>
                <h5 className='py-3 card-title'>Solicitud de Inspeccion</h5>
                <form onSubmit={handleForm}>
                    <div className="row mb-3">
                        <div className="col-1"></div>
                        <div className="col-10 bg-light card my-2 p-3 ">
                            <div className="row gx-2 gy-1 align-items-center">
                                <div className="col-md-12 ">
                                    <div className='mx-2 my-3'>
                                        <label className='form-label' >Suscrito</label>
                                        <div className="input-group input-group-sm mb-1">
                                            <input type="text" className="form-control" placeholder="Nombre" name='nombreSuscrito' onChange={handleInputChange} required />
                                            <span className="input-group-text">-</span>
                                            <input type="text" className="form-control" placeholder="#1 Apellido" name='primerApellidoSuscrito' onChange={handleInputChange} required />
                                            <span className="input-group-text">-</span>
                                            <input type="text" className="form-control" placeholder="#2 Apellido" name='segundoApellidoSuscrito' onChange={handleInputChange} required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className='mx-2 my-3'>
                                        <label className='form-label' >Numero de identificacion</label>
                                        <input type="number" className="form-control form-control-sm" placeholder="# Identificacion" name='cedulaSuscrito' onChange={handleInputChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='mx-2 my-3'>
                                        <label className='form-label' >Medios de comunicacion</label>
                                        <div className="input-group input-group-sm mb-2">
                                            <input type="number" className="form-control" placeholder="# Telefono" name='telefonoSuscrito' onChange={handleInputChange} required />
                                            <span className="input-group-text">-</span>
                                            <input type="email" className="form-control" placeholder="Correo Electronico" name='correoSuscrito' onChange={handleInputChange} required />

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='mx-2 my-3'>
                                        <label className='form-label' >Numero de paja</label>

                                        <input type="number" className="form-control form-control-sm" placeholder="Numero de Paja" name='numeroPaja' onChange={handleInputChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className='mx-2 my-3'>
                                        <label className='form-label' htmlFor="disabledSelect">Motivo de Inspeccion</label>
                                        <select className="form-select form-select-sm" name='motivoInspeccion' onChange={handleInputChange} required>
                                            <option value='' >Elija una opcion</option>
                                            {listaMotivos.map((n, x) =>
                                                <option key={x + '-' + n}>{n}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    {motivoInspeccion && motivoInspeccion === 'Otro' ?
                                        <div className='mx-2 my-3'>
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a comment here" style={{ resize: "none", height: "100px" }} name='motivoInspeccionDetallado' onChange={handleInputChange} required></textarea>
                                                <label className=''>Detalle el motivo</label>
                                            </div>
                                        </div>

                                        :
                                        null
                                    }
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