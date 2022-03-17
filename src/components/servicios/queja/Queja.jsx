import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useForm } from '../../../hooks/useForm';

const Queja = () => {

    const [handleInputChange, reset] = useForm({
        tipoSolicitud: 'queja',
        fecha: new Date().getTime()
    });
    const handleForm = e => {
        e.preventDefault();
        reset({
            tipoSolicitud: 'queja',
            fecha: new Date().getTime()
        });
    }
    return (
        <div className="text-center card">
            <div className='card-header '>Asociación Administradora Acueducto Rural Florida de Siquirres</div>
            <div className='card-body py-5 my-5'>
                <h5 className='py-3 card-title'>Sugerencias o Quejas</h5>
                <form onSubmit={handleForm}>

                    <div className="row mb-3">
                        <div className="col-1 "></div>
                        <div className="col-10 bg-light card my-2 p-3 ">
                            <div className="row  gx-2 gy-1 align-items-center">
                                <div className="col-md-7">
                                    <div className='mx-2 my-3'>

                                        <div className="input-group input-group-sm mb-1">
                                            <input type="text" className="form-control" placeholder="Nombre" name='nombrePersona' onChange={handleInputChange} />
                                            <span className="input-group-text">-</span>
                                            <input type="text" className="form-control" placeholder="#1 Apellido" name='apellido1Persona' onChange={handleInputChange} />
                                            <span className="input-group-text">-</span>
                                            <input type="text" className="form-control" placeholder="#2 Apellido" name='apellido2Persona' onChange={handleInputChange} />
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-5">
                                    <div className='mx-2 my-3'>
                                        <input type="number" className="form-control form-control-sm" placeholder="# Telefono" name='telefonoPersona' onChange={handleInputChange} />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className='mx-2 my-3'>
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ resize: "none", height: "100px" }} name='detalleQueja' onChange={handleInputChange}></textarea>
                                            <label className=''>Detalle el la sugerencia o queja</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 "></div>
                    </div>

                    <Button type="submit" className='mb-2'>Enviar Solicitud</Button>

                </form>
            </div>
            <Card.Footer className="text-muted">Esta sugerencia sera recibida por un miembro de la junta</Card.Footer>
        </div>
    )
}

export default Queja