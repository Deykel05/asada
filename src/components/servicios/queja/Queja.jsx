import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Queja = () => {
    return (
        <div className="text-center card" style={{ height: "70vh" }}>
            <div className='card-header '>Asociación Administradora Acueducto Rural Florida de Siquirres</div>
            <div className='card-body pt-4'>
                <h5 className='py-3 card-title'>Sugerencias o Quejas</h5>
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
                                        <input type="number" className="form-control" placeholder="Telefono" />
                                    </div>
                                    <div className="col-12">
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

                    <Button type="submit">Enviar Solicitud</Button>

                </form>
            </div>
            <Card.Footer className="text-muted">Esta sugerencia sera recibida por un miembro de la junta</Card.Footer>
        </div>
    )
}

export default Queja