import React from 'react'
import { BsCheck2All } from 'react-icons/bs';

const Informacion = () => {
    return (
        <>
            < div className="col-1" ></div >
            <div className="col-10 card bg-light my-2 p-3">
                <div className="p-2">
                    <h5>Condiciones</h5>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="mx-2 my-3">
                            <ol className="list-group list-group-numbered">
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold"> La solicitud procede y será efectiva, cuando la Institución verifique que el servicio no se encuentre en
                                            uso. En caso contrario, informará al usuario, el motivo o razón de la improcedencia de la suspensión o
                                            eliminación.</div>

                                    </div>
                                    <span className="badge bg-primary rounded-pill"><BsCheck2All /></span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold"> En el caso de suspensión, el usuario deberá cancelar el cargo fijo, durante todo el periodo de inactividad
                                            del servicio.</div>

                                    </div>
                                    <span className="badge bg-primary rounded-pill"><BsCheck2All /></span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold"> Autorizada la eliminación y en caso de que el usuario requiera posteriormente de una conexión, deberá
                                            tramitarse como un nuevo servicio.</div>

                                    </div>
                                    <span className="badge bg-primary rounded-pill"><BsCheck2All /></span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Cumplida la presentación de la totalidad de requisitos; la Institución contará con un plazo de 8 días
                                            hábiles para la resolución de la solicitud.</div>
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