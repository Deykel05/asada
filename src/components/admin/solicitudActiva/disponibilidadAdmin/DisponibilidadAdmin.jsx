import React from 'react'

const DisponibilidadAdmin = ({ request }) => {
    return (
        <div className="text-center card" >
            <div className='card-header '>Asociación Administradora Acueducto Rural Florida de Siquirres</div>
            <div className='card-body pt-4'>
                <div className="row  mb-3">
                    <div className="col-12 bg-light card my-2 p-3 ">
                        <div className="row  gx-2 gy-1 align-items-center">
                            <h5 className='py-3 card-title'>Servicio Requerido</h5>
                            <div className="col-md-4 ">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >Servicio requerido:
                                        <br /><span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.servicioRequerido}</span>
                                    </label>

                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >Tiene servicios asociados?
                                        <br />
                                        {request.numeroMedidor ?
                                            <span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.numeroMedidor}</span>
                                            :
                                            <span className="badge bg-dark" style={{ fontSize: '15px' }}> No</span>

                                        }
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold'>Cantidad de unidades habitacionales:
                                        <br /><span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.cantidadUnidadesHabitacionales}</span>
                                    </label>

                                </div>
                            </div>
                            <hr />
                            <h5 className='py-3 card-title'>Datos de la propiedad</h5>

                            <div className="col-md-6">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >Naturaleza del inmueble:
                                        <br /><span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >Titulo de propiedad:
                                        <br />
                                        {request.tituloPropiedadDerecho ?
                                            <span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.tituloPropiedadProvincia}-{request.tituloPropiedadNumero}-{request.tituloPropiedadDerecho}</span>

                                            :
                                            <span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.tituloPropiedad}</span>

                                        }
                                    </label>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >Titular del inmueble:
                                        <br /><span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >Representacion grafica del inmueble:
                                        <br /><span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <hr />
                            <h5 className='py-3 card-title'>Nombre del titular del inmueble</h5>

                            <div className="col-md-4">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >Tipo de persona:
                                        <br /><span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >Nombre completo:
                                        <br /> <span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >N de identificacion:
                                        <br /><span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >Razon social si hay:
                                        <br /> <span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >N Telefono 1:
                                        <br /><span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >N Telefono 2:
                                        <br /><span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <hr />
                            <h5 className='py-3 card-title'>Localizacion de la propiedad</h5>

                            <div className="col-md-6">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >Provincia:
                                        <br /><span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >Canton:
                                        <br /><span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >Distrito:
                                        <br /><span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >Direccion exacta:
                                        <br /><span className=" badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <hr />
                            <h5 className='py-3 card-title'>Medios para la notificacion</h5>

                            <div className="col-md-4">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >N Telefono 1:
                                        <span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >Correo 1:
                                        <span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >N Telefono 2:
                                        <span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >Correo 2:
                                        <span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='mx-2 my-3'>
                                    <label className='form-label fw-bold' >Direccion fisica exacta:
                                        <span className="badge bg-dark" style={{ fontSize: '15px' }}> {request.naturaleza}</span>
                                    </label>

                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default DisponibilidadAdmin