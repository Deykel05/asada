import React from 'react'

const NombreTitularInmueble = () => {
    return (
        <>
            <div className="col-1 "></div>
            <div className="col-10 bg-light card my-2 p-3">
                <h5 htmlFor="disabledSelect">Nombre del Titular del Inmueble</h5>
                <hr />
                <div className="radio">
                    <div className="row">
                        <div className="col-6 ">
                            <div className="row">
                                <div className="col-6 ">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label">
                                            Persona Fisica
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" >
                                            Persona Juridica
                                        </label>
                                    </div>
                                </div>
                                <div className="col-6 p-2">
                                    <input type="number" className="form-control" placeholder="Numero de Identificacion" />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 p-2">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Nombre" />
                                <span className="input-group-text"> </span>
                                <input type="text" className="form-control" placeholder="Primer Apellido" />
                                <span className="input-group-text"> </span>
                                <input type="text" className="form-control" placeholder="Segundo Apellido" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ resize: "none", height: "100px" }}></textarea>
                                <label >Razon Social</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <input type="number" className="form-control mb-3" placeholder="Numero de Telefono 1" />
                            <input type="number" className="form-control" placeholder="Numero de Telefono 2" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-1 "></div>
        </>
    )
}

export default NombreTitularInmueble