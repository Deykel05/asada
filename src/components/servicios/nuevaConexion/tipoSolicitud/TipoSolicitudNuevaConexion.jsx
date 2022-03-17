import React from 'react'

const TipoSolicitudNuevaConexion = ({ handleInputChange }) => {
    return (
        <>
            <div className="col-1"></div>
            <div className="col-10 card bg-light my-2 p-3">
                <h5 >Servicio Requerido Agua Potable</h5>
                <hr />
                <div className="row">
                    <div className="col-6">
                        <label className='form-label' >Tipo de Solicitud</label>
                        <select className="form-select" name='tipoSolicitud' onChange={handleInputChange} required>
                            <option value='' >Elija una opcion</option>
                            <option value='Nueva Conexion' >Nueva Conexion</option>
                            <option value='Individualizacion' >Individualizacion</option>
                            <option value='Traslado de Conexion' >Traslado de Conexion</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <label className='form-label'>Cantidad</label>
                        <input className='form-control' type="number" placeholder="Escriba la cantidad" name='cantidadTipoSolicitud' onChange={handleInputChange} required />

                    </div>

                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default TipoSolicitudNuevaConexion