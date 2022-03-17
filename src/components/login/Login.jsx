import React from 'react'
import { useDispatch } from 'react-redux';
import {BiArrowBack} from 'react-icons/bi';
import '../../estilos/login/styles.css';
import logo from '../../imagenes/logo.png';
import Footer from '../footer/Footer';
import { useForm } from '../../hooks/useForm';
import { startLoginEmailPassword } from '../../actions/auth';
import { Link } from 'react-router-dom';
const Login = () => {

    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });
    const { email, password } = formValues;

    const handleLogin = e => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }
    
    return (
        <>
            <section className="vh-100">

                <div className="container-fluid h-custom">
                    <div className="text-center text-lg-start pt-2">
                        <Link as={Link} to="/">
                            <button type="submit" className="btn btn-secondary btn-md"
                            > <BiArrowBack style={{ fontSize: '25px'}}/></button>
                        </Link>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center h-100 mb-5 pb-5">
                        <div className="col-md-9 col-lg-6 col-xl-5 ">
                            <img src={logo} className="img-fluid  "
                                alt="logo" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mb-5 pb-5 pt-5">
                            <form onSubmit={handleLogin}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-center mt-5">
                                    <p className="lead fw-normal mb-0 me-3">Modo Administrador</p>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Modo Administrador</p>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" autoComplete='off' className="form-control form-control-lg"
                                        placeholder="Ingrese su correo" name='email' value={email} onChange={handleInputChange} required />
                                    <label className="form-label" >Correo</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" className="form-control form-control-lg"
                                        placeholder="Ingrese su contraseña" name='password' value={password} onChange={handleInputChange} required />
                                    <label className="form-label" >Contraseña</label>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2 mb-5 pb-5">
                                    <button type="submit" className="btn btn-primary btn-lg btn-login"
                                    >Ingresar</button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
                <div className="fixed-bottom mt-5 pt-5">

                    <Footer />
                </div>


            </section>

        </>
    )
}

export default Login