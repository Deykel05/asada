import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Queja = () => {
    return (
        <div className="text-center card">
            <div className='card-header '>Asociación Administradora Acueducto Rural Florida de Siquirres</div>
            <div className='card-body pt-4 mb-5'>
                <h5 className='py-3 card-title'>Sugerencias o Quejas</h5>
                <form>

                    <div className="row mb-3">
                        <div className="col-1 "></div>
                        <div className="col-10 bg-light card my-2 p-3 ">
                            <div className="row">
                                <div className="col-12">
                                    <div className='mx-2 my-3'>

                                        <div className="input-group input-group-sm mb-1">
                                            <input type="text" className="form-control" placeholder="Nombre" />
                                            <span className="input-group-text">-</span>
                                            <input type="text" className="form-control" placeholder="#1 Apellido" />
                                            <span className="input-group-text">-</span>
                                            <input type="text" className="form-control" placeholder="#2 Apellido" />
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12">
                                    <div className='mx-2 my-3'>
                                        <input type="number" className="form-control form-control-sm" placeholder="# Telefono" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className='mx-2 my-3'>
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ resize: "none", height: "100px" }} ></textarea>
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