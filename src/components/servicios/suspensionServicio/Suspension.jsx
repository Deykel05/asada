import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { startNewRequest } from '../../../actions/requests';
import { useForm } from '../../../hooks/useForm';
import MediosParaNotificacion from '../MediosParaNotificacion';

const Suspension = () => {
    const dispatch = useDispatch();
    const listaTipos = ['Titular', 'Representante Legal', 'Poseedor'];

    const [formValues, handleInputChange, reset, setValues] = useForm({
        tipoSolicitud: 'suspension',
        fecha: new Date().getTime(),
        tipoPersona: '1'
    });
    const handleForm = e => {
        e.preventDefault();
        dispatch(startNewRequest(formValues));
        reset({
            tipoSolicitud: 'traspaso',
            fecha: new Date().getTime(),
            tipoPersona: '1'
        });
    }
    return (
        <div className="text-center card" >
            <div className='card-header '>Asociación Administradora Acueducto Rural Florida de Siquirres</div>
            <div className='card-body pt-4'>
                <h5 className='py-3 card-title'>Solicitud de Suspension Servicio</h5>
                <form onSubmit={handleForm}>
                    <div className="row  mb-3">
                        <div className="col-1"></div>
                        <div className="col-10 bg-light card my-2 p-3 ">
                            <div className="row  gx-2 gy-1 align-items-center">
                                <div className="col-md-12 ">
                                    <div className='mx-2 my-3'>
                                        <label className='form-label' >El suscrito</label>
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
                                        <label className='form-label' >Documento de identificación numero</label>
                                        <input type="number" className="form-control form-control-sm" placeholder="# Identificacion" name='cedulaSuscrito' onChange={handleInputChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6 ">
                                    <div className='mx-2 my-3'>
                                        <label className='form-label' >En calidad de</label>
                                        <select className="form-select form-select-sm" name='enCalidadDe' onChange={handleInputChange} required>
                                            <option value='' >Elija una opcion</option>
                                            {listaTipos.map((n, x) =>
                                                <option key={x + '-' + n}>{n}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='mx-2 my-3'>
                                        <label className='form-label' >Solicito formalmente a la ASADA Florida, la</label>
                                        <select className="form-select form-select-sm" name='inmuebleConstaDe' onChange={handleInputChange} required>
                                            <option value='' >Elija una opcion</option>
                                            <option >Suspension</option>
                                            <option >Eliminacion</option>
                                        </select>

                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className='mx-2 my-3'>
                                        <label className='form-label' >Del numero de paja</label>
                                        <input type="number" className="form-control form-control-sm" placeholder="Numero de Paja" name='numeroPaja' onChange={handleInputChange} required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className='mx-2 my-3'>
                                        <label className='form-label' >Por el siguiente motivo</label>
                                        <div className="form-floating">
                                            <textarea className="form-control" style={{ resize: "none", height: "100px" }} name='motivoSuspensionDetallado' onChange={handleInputChange} required></textarea>
                                            <label className=''>Detalle el motivo</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 "></div>
                        <MediosParaNotificacion
                            handleInputChange={handleInputChange}
                        />
                    </div>
                    <Button type="submit">Enviar Solicitud</Button>
                </form>
            </div >
            <Card.Footer className="text-muted">La ASADA Florida cuenta con 3 dias habiles para contestar la solicitud</Card.Footer>
        </div >
    )
}

export default Suspension