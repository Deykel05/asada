import React from 'react'

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
                    <div className="col-3"></div>
                    <div className="col-6">
                        <ul>
                            <p>Certificacion literal </p>
                            <p>Copia de la cedula</p>
                            <p>Copia del plano </p>
                            <p>En caso de personas jurídicas, certificación de personería</p>
                            <p>En caso de segregaciones debe presentar crokies de fraccionamiento</p>
                        </ul>
                    </div>
                    <div className="col-3"></div>

                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default Informacion