import React from 'react'

const MediosParaNotificacion = ({ handleInputChange }) => {
    return (
        <>
            <div className="col-1 "></div>
            <div className="col-10 bg-light card my-2 p-3">
                <h5 htmlFor="disabledSelect">Medios Para Notificacion</h5>
                <hr />
                <div className="radio">
                    <div className="row ">
                        <div className="col-6 ">
                            <div className='mx-2 my-3'>
                                <input type="number" className="form-control form-control-sm mb-1" placeholder="# Telefono 1" name='mediosNotificacionTelefono1' onChange={handleInputChange} required/>
                                <input type="number" className="form-control form-control-sm mb-3" placeholder="# Telefono 2" name='mediosNotificacionTelefono2' onChange={handleInputChange} required/>
                            </div>

                        </div>

                        <div className="col-6 ">
                            <div className='mx-2 my-3'>
                                <input type="email" className="form-control form-control-sm mb-1" placeholder="Correo 1" name='mediosNotificacionCorreo1' onChange={handleInputChange} required/>
                                <input type="email" className="form-control form-control-sm mb-3" placeholder="Correo 2" name='mediosNotificacionCorreo2' onChange={handleInputChange} required/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating mx-2 my-3">
                                <textarea className="form-control" name='mediosNotificacionDireccionExacta' id="floatingTextarea2" style={{ resize: "none", height: "100px" }} onChange={handleInputChange} required></textarea>
                                <label >Direccion exacta</label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default MediosParaNotificacion