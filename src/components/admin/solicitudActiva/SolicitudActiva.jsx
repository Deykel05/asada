import React, { useEffect, useRef, useState } from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import { activeRequest, startSaveRequest } from '../../../actions/requests';
import { useForm } from '../../../hooks/useForm';
import { DisponibilidadAdmin } from './disponibilidadAdmin/DisponibilidadAdmin';
import { InspeccionAdmin } from './inspeccionAdmin/InspeccionAdmin';
import { PrevistaNuevaAdmin } from './previstaNueva/PrevistaNuevaAdmin';
import { SuspensionAdmin } from './suspensionAdmin/SuspensionAdmin';
import { TraspasoAdmin } from './traspasoAdmin/TraspasoAdmin';

const SolicitudActiva = ({ request }) => {
    const dispatch = useDispatch();


    const [formValues, handleInputChange, reset, setValues] = useForm({
        ...request
    });

    const radios = [
        { name: 'Pendiente', value: '1' },
        { name: 'Aprobado', value: '2' },
        { name: 'Devuelto', value: '3' },
    ];


    const { tipoSolicitud } = request;

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const handleGuardar = () => {
        dispatch(startSaveRequest(request));
    }
    useEffect(() => {
        dispatch(activeRequest(request.id, { ...formValues }));
    }, [formValues, dispatch])

    return (
        <>
            <div className="text-center card" >
                <h5 className='fw-bold py-5'>Asociación Administradora Acueducto Rural Florida de Siquirres</h5>
                <div className='row justify-content-between w-100'>
                    <div className="col-md-4">
                        <label className='form-label w-100'>Estado Solicitud</label>
                        <ButtonGroup>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    size='sm'
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant={idx === 0 ? 'outline-warning' : idx === 1 ? 'outline-success' : 'outline-danger'}
                                    name="estado"
                                    value={radio.value}
                                    checked={formValues.estado === radio.value}
                                    onChange={handleInputChange}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </div>
                    <div className='col-md-4 text-end pt-4'>
                        <button className="btn btn-sm btn-secondary " onClick={handlePrint}>Exportar a PDF</button>
                        <button className="btn btn-sm btn-primary mx-1" onClick={handleGuardar}>Guardar Cambios</button>
                    </div>
                </div>
                {tipoSolicitud === 'disponibilidad' &&
                    <DisponibilidadAdmin ref={componentRef} request={request} />
                }
                {tipoSolicitud === 'nueva conexion' &&
                    <PrevistaNuevaAdmin ref={componentRef} request={request} />
                }
                {tipoSolicitud === 'individualizacion' &&
                    <PrevistaNuevaAdmin ref={componentRef} request={request} />
                }
                {tipoSolicitud === 'traslado de conexion' &&
                    <PrevistaNuevaAdmin ref={componentRef} request={request} />
                }
                {tipoSolicitud === 'suspension' &&
                    <SuspensionAdmin ref={componentRef} request={request} />
                }
                {tipoSolicitud === 'traspaso' &&
                    <TraspasoAdmin ref={componentRef} request={request} />
                }
                {tipoSolicitud === 'inspeccion' &&
                    <InspeccionAdmin ref={componentRef} request={request} />
                }
            </div >

        </>
    )
}

export default SolicitudActiva