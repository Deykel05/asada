import React from 'react'

const FormaPago = ({ handleInputChange }) => {
    return (
        <>
            <div className="col-1"></div>
            <div className="col-10 card bg-light my-2 p-3">
                <div className="row">
                    <div className="col-12 my-3">
                        <div className="container px-5">
                            <h5 htmlFor="disabledSelect">Formas para cancelar la tarifa del derecho de conexion</h5>
                            <hr />
                        </div>
                    </div>
                    <div className="col-7 " onChange={handleInputChange}>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="formaPago" value='1' required />
                            <label className="form-check-label">
                                En efectivo en un solo tracto, previo a la conexion del servicio
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="formaPago" value='2' />
                            <label className="form-check-label" >
                                Incluir el monto por tarifa de dececho de conexion en la primer facturacion
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="formaPago" value='3' />
                            <label className="form-check-label" >
                                Arreglo de pago
                            </label>
                        </div>
                    </div>
                    <div className="col-5">
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    Cuadro infomativo con las formas de pago
                                </div>

                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="">
                                    Banco Nacional Colones Cuenta IBAN: CR02 0151 0171 0010 0488 95
                                </div>

                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="">
                                    SINPE 8920-4319
                                </div>

                            </div>
                        </li>
                    </div>

                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default FormaPago