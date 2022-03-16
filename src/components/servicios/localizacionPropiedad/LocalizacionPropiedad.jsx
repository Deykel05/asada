import React from 'react'

const LocalizacionPropiedad = ({ handleInputChange }) => {
    return (
        <>
            <div className="col-1 "></div>
            <div className="col-10 bg-light card my-2 p-3">
                <h5 htmlFor="disabledSelect">Localizacion de la Propiedad</h5>
                <hr />
                <div className="radio">
                    <div className="row ">
                        <div className="col-12 ">
                            <div className='mx-2 my-3'>
                                <div className="input-group input-group-sm mb-3 ">
                                    <input type="text" className="form-control" placeholder="Provincia" name='provinciaLocalizacionPropiedad' onChange={handleInputChange} required/>
                                    <span className="input-group-text"> </span>
                                    <input type="text" className="form-control" placeholder="Canton" name='cantonLocalizacionPropiedad' onChange={handleInputChange} required/>
                                    <span className="input-group-text"> </span>
                                    <input type="text" className="form-control" placeholder="Distrito" name='distritoLocalizacionPropiedad' onChange={handleInputChange} required/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 ">
                            <div className="form-floating mx-2 my-3">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ resize: "none", height: "100px" }} name='direccionExactaLocalizacionPropiedad' onChange={handleInputChange} required></textarea>
                                <label >Direccion exacta del inmueble</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default LocalizacionPropiedad