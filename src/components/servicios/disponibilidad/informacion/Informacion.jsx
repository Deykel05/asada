import React from 'react'
import { BsCheck2All } from 'react-icons/bs';
const Informacion = () => {
    return (
        <>
            <div className="col-1"></div>
            <div className="col-10 card bg-light my-2 p-3">
                <h5>Requisitos de modo informativo</h5>
                <hr />
                <div className="">
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
                        </ol>
                    </div>

                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default Informacion