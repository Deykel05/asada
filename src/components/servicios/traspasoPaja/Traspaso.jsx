import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { startNewRequest } from '../../../actions/requests';
import { useForm } from '../../../hooks/useForm';
import MediosParaNotificacion from '../MediosParaNotificacion';

const Traspaso = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange, reset, setValues] = useForm({
        tipoSolicitud: 'traspaso',
        fecha: new Date().getTime(),
        tipoPersona: '1'
    });
    const { inmuebleConstaDe, representacionGrafica, planoCatastroProvincia, planoCatastroNumero,
        planoCatastroDerecho, codigoApt, declaracionJurada, certificacionProvincia, certificacionNumero, certificacionDerecho } = formValues;
    const listaTipos = ['Propietario Registral', 'Representante Legal', 'Autorizado Legal'];
    if (representacionGrafica && representacionGrafica === 'Plano de Agrimesura') {
        if (planoCatastroProvincia) {
            delete formValues.planoCatastroProvincia;
        }
        if (planoCatastroNumero) {
            delete formValues.planoCatastroNumero;
        }
        if (planoCatastroDerecho) {
            delete formValues.planoCatastroDerecho;
        }
    }
    if (representacionGrafica && representacionGrafica === 'Plano de Catastro') {
        if (codigoApt) {
            delete formValues.codigoApt;
        }
    }
    if (inmuebleConstaDe && inmuebleConstaDe === 'Certificacion Literal') {
        if (declaracionJurada) {
            delete formValues.declaracionJurada;
        }
    }
    if (inmuebleConstaDe && inmuebleConstaDe === 'Declaracion Jurada') {
        if (certificacionProvincia) {
            delete formValues.certificacionProvincia;
        }
        if (certificacionNumero) {
            delete formValues.certificacionNumero;
        }
        if (certificacionDerecho) {
            delete formValues.certificacionDerecho;
        }
    }
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
                <h5 className='py-3 card-title'>Solicitud de Traspaso Paja</h5>
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
                                <hr />
                                <div className="col-md-6">
                                    <div className='mx-2 my-3'>
                                        <label className='form-label' >Por ser titular del inmueble que consta de</label>
                                        <select className="form-select form-select-sm" name='inmuebleConstaDe' onChange={handleInputChange} required>
                                            <option value='' >Elija una opcion</option>
                                            <option >Certificacion Literal</option>
                                            <option >Declaracion Jurada</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='mx-2 my-3'>
                                        {inmuebleConstaDe && inmuebleConstaDe === 'Certificacion Literal' &&
                                            <>
                                                <label className='form-label' >Certificacion Literal</label>
                                                <div className="input-group input-group-sm mb-2">
                                                    <input type="number" className="form-control" placeholder="Provincia" name='certificacionProvincia' onChange={handleInputChange} required />
                                                    <span className="input-group-text">-</span>
                                                    <input type="number" className="form-control" placeholder="Numero" name='certificacionNumero' onChange={handleInputChange} required />
                                                    <span className="input-group-text">-</span>
                                                    <input type="number" className="form-control" placeholder="Derecho" name='certificacionDerecho' onChange={handleInputChange} required />

                                                </div>
                                            </>
                                        }
                                        {inmuebleConstaDe && inmuebleConstaDe === 'Declaracion Jurada' &&
                                            <>
                                                <label className='form-label' >Declaracion Jurada</label>
                                                <input type="number" className="form-control form-control-sm" placeholder="Privada o Protocolizada" name='declaracionJurada' onChange={handleInputChange} required />
                                            </>
                                        }
                                    </div>
                                </div>
                                <hr />
                                <div className="col-md-6">
                                    <div className='mx-2 my-3'>
                                        <label className='form-label' >Que se representa gráficamente mediante</label>
                                        <select className="form-select form-select-sm" name='representacionGrafica' onChange={handleInputChange} required>
                                            <option value='' >Elija una opcion</option>
                                            <option >Plano de Catastro</option>
                                            <option >Plano de Agrimesura</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='mx-2 my-3'>
                                        {representacionGrafica && representacionGrafica === 'Plano de Catastro' &&
                                            <>
                                                <label className='form-label' >Plano de Catastro</label>
                                                < div className="input-group input-group-sm mb-2">
                                                    <input type="number" className="form-control" placeholder="Provincia" name='planoCatastroProvincia' onChange={handleInputChange} required />
                                                    <span className="input-group-text">-</span>
                                                    <input type="number" className="form-control" placeholder="Numero" name='planoCatastroNumero' onChange={handleInputChange} required />
                                                    <span className="input-group-text">-</span>
                                                    <input type="number" className="form-control" placeholder="Derecho" name='planoCatastroDerecho' onChange={handleInputChange} required />

                                                </div>
                                            </>
                                        }
                                        {representacionGrafica && representacionGrafica === 'Plano de Agrimesura' &&
                                            <>
                                                <label className='form-label' >Plano de Agrimesura</label>
                                                <input type="number" className="form-control form-control-sm" placeholder="Codigo APT" name='codigoApt' onChange={handleInputChange} required />
                                            </>
                                        }
                                    </div>
                                </div>
                                <hr />
                                <div className="col-md-6">
                                    <div className='mx-2 my-3'>
                                        <label className='form-label' >Solicito el traspaso del numero de paja</label>
                                        <input type="number" className="form-control form-control-sm" placeholder="Numero de Paja" name='numeroPaja' onChange={handleInputChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='mx-2 my-3'>
                                        <label className='form-label' >A nombre de:</label>
                                        <div className="input-group input-group-sm mb-2">
                                            <input type="text" className="form-control" placeholder="Nombre" name='nombreNuevoSuscrito' onChange={handleInputChange} required />
                                            <span className="input-group-text">-</span>
                                            <input type="text" className="form-control" placeholder="#1 Apellido" name='primerApellidoNuevoSuscrito' onChange={handleInputChange} required />
                                            <span className="input-group-text">-</span>
                                            <input type="text" className="form-control" placeholder="#2 Apellido" name='segundoApellidoNuevoSuscrito' onChange={handleInputChange} required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row justify-content-center">
                                        <div className="col-auto">
                                            <div className='mx-2 my-3' onChange={handleInputChange}>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="tipoPersona" id="flexRadioDefault1" value='1' required />
                                                    <label className="form-check-label">
                                                        Persona Fisica
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="tipoPersona" id="flexRadioDefault2" value='2' />
                                                    <label className="form-check-label" >
                                                        Persona Juridica
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='mx-2 my-3'>
                                        <label className='form-label' >Documento de identificación numero</label>
                                        <input type="number" className="form-control form-control-sm" name='cedulaNuevoSuscrito' placeholder="# Identificacion" onChange={handleInputChange} required />
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
};

export default Traspaso;
