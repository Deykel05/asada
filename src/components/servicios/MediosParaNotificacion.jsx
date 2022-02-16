import React from 'react'

const MediosParaNotificacion = () => {
    return (
        <div className="col-10 bg-light card my-3 p-5">
            <h5 htmlFor="disabledSelect">Medios Para Notificacion</h5>
            <hr />
            <div className="radio">
                <div className="row">
                    <div className="col-6 p-2">
                        <h6>Numeros de Telefono</h6>
                        <div className="row justify-content-end">
                            <div class="col-2 p-1">
                                <button className='btn btn-info btm-sm'>+</button>
                            </div>
                        </div>
                        <input type="number" className="form-control mb-3" placeholder="Numero de Telefono" />
                    </div>

                    <div className="col-6 p-2">
                        <h6>Correos electronicos</h6>
                        <div className="row justify-content-end">
                            <div class="col-2 p-1">
                                <button className='btn btn-info btm-sm'>+</button>
                            </div>
                        </div>
                        <input type="email" className="form-control" placeholder="Correo Electronico" />
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
    )
}

export default MediosParaNotificacion