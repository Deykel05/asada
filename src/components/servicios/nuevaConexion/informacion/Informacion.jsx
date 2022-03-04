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
                    <div className="row-12">
                        <p>Conforme a lo establecido en el artículo 6 de la Ley 8220, Publicada en La Gaceta No. 49 de 11 de marzo de 2002, en caso de no cumplir
                            con la presentación de la totalidad de los requisitos, se otorgará un plazo de 10 días hábiles para que los aporte. Transcurrido el plazo
                            sin que se atienda el requerimiento, el tramite quedará denegado y en caso de requerir el servicio deberá realizar una nueva solicitud.
                            Cumplida la presentación de la totalidad de requisitos; la Institución contará con un plazo de 30 días hábiles para la resolucion del tramite
                        </p>

                    </div>
                    <div className="col-2"></div>
                    <div className="col-4">
                        <ul>
                            <li>Certificacion literal </li>
                            <li>Copia de la cedula</li>
                            <li>Copia del plano </li>
                            <li>El pago de la tarifa de conexion sera conforme a lo establecido en el articulo 57</li>

                        </ul>
                    </div>
                    <div className="col-4">
                        <ul>
                            <li>En caso de personas jurídicas, certificación de personería</li>
                            <li>En caso de segregaciones debe presentar crokies de fraccionamiento</li>
                            <li>Copia del permiso municipal de construccion vigente</li>
                        </ul>
                    </div>
                    <div className="col-2"></div>

                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default Informacion