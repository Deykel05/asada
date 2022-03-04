import React from 'react'
import '../../estilos/login/styles.css';
import logo from '../../imagenes/logo.png';
import { FaFacebook, FaGoogle, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/admin', { replace: true });
    }
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={logo} className="img-fluid"
                            alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-center">
                                <p className="lead fw-normal mb-0 me-3">Modo Administrador</p>
                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Modo Administrador</p>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Ingrese su usuario" />
                                <label className="form-label" >Usuario</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Ingrese su contraseña" />
                                <label className="form-label" >Contraseña</label>
                            </div>

                            {/* <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" >
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div> */}

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg btn-login" onClick={handleLogin}
                                >Ingresar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                </div>

                <div>
                    <a href="#!" className="text-white me-4">
                        <FaFacebook style={{ fontSize: '20px' }} />
                    </a>
                    {/* <a href="#!" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </a> */}
                    <a href="#!" className="text-white me-4">
                        <FaGoogle style={{ fontSize: '20px' }} />
                    </a>
                    <a href="#!" className="text-white">
                        <FaWhatsapp style={{ fontSize: '20px' }} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Login