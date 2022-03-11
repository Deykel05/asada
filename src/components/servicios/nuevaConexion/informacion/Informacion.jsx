import React from 'react'
import { BsCheck2All } from 'react-icons/bs';

const Informacion = () => {
    return (
        <>
            <div className="col-1"></div>
            <div className="col-10 card bg-light my-2 p-3">
                <div className="p-2">
                    <h5>Requisitos de modo informativo</h5>
                    <hr />
                </div>
                <div className="row">
                    <div className="row-12">
                        <div className="mx-2 my-3">
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="">
                                        Conforme a lo establecido en el artículo 6 de la Ley 8220, Publicada en La Gaceta No. 49 de 11 de marzo de 2002, en caso de no cumplir
                                        con la presentación de la totalidad de los requisitos, se otorgará un plazo de 10 días hábiles para que los aporte. Transcurrido el plazo
                                        sin que se atienda el requerimiento, el tramite quedará denegado y en caso de requerir el servicio deberá realizar una nueva solicitud.
                                        Cumplida la presentación de la totalidad de requisitos; la Institución contará con un plazo de 30 días hábiles para la resolucion del tramite
                                    </div>

                                </div>
                            </li>
                        </div>

                    </div>
                    <div className="col-12">
                        <div className="mx-2 my-3">
                            <ol className="list-group list-group-numbered">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Certificacion literal</div>

                                    </div>
                                    <span className="badge bg-primary rounded-pill"><BsCheck2All /></span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold"> Copia de la cedula</div>

                                    </div>
                                    <span className="badge bg-primary rounded-pill"><BsCheck2All /></span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Copia del plano</div>

                                    </div>
                                    <span className="badge bg-primary rounded-pill"><BsCheck2All /></span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">El pago de la tarifa de conexion sera conforme a lo establecido en el articulo 57</div>
                                    </div>
                                    <span className="badge bg-primary rounded-pill"><BsCheck2All /></span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">En caso de personas jurídicas, certificación de personería</div>
                                    </div>
                                    <span className="badge bg-primary rounded-pill"><BsCheck2All /></span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">En caso de segregaciones debe presentar crokies de fraccionamiento</div>
                                    </div>
                                    <span className="badge bg-primary rounded-pill"><BsCheck2All /></span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Copia del permiso municipal de construccion vigente</div>
                                    </div>
                                    <span className="badge bg-primary rounded-pill"><BsCheck2All /></span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default Informacion