import React from 'react'

const MediosParaNotificacion = () => {
    return (
        <>
            <div className="col-1 "></div>
            <div className="col-10 bg-light card my-2 p-3">
                <h5 htmlFor="disabledSelect">Medios Para Notificacion</h5>
                <hr />
                <div className="radio">
                    <div className="row">
                        <div className="col-6 p-2">
                            <input type="number" className="form-control mb-1" placeholder="Numero de Telefono 1" />
                            <input type="number" className="form-control mb-3" placeholder="Numero de Telefono 2" />
                        </div>

                        <div className="col-6 p-2">
                            <input type="email" className="form-control mb-1" placeholder="Correo Electronico 1" />
                            <input type="email" className="form-control mb-3" placeholder="Correo Electronico 2" />
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ resize: "none", height: "100px" }}></textarea>
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