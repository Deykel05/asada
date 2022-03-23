import React, { useRef } from 'react'
import { BiMap, BiEnvelope, BiPhoneCall } from 'react-icons/bi';
import emailjs from '@emailjs/browser';
import '../../estilos/contacto/styles.css';
const Contacto = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fvjt5rk', 'template_dex7bnp', form.current, 'CE1VJd_qjnk1oJ5AY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
    };
    return (
        <section className="contact p-5 my-5" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
            <div className="container">

                <div className="row py-2">

                    <div className="col-lg-6">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="info-box">
                                    <BiMap style={{ fontSize: "50px" }} />
                                    <h3>Nuestra direccion</h3>
                                    <p>Frente a la Escuela Florida</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box">
                                    <BiEnvelope style={{ fontSize: "50px" }} />
                                    <h3>Envienos un correo</h3>
                                    <p>asadaflorida@gmail.com</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box">
                                    <BiPhoneCall style={{ fontSize: "50px" }} />
                                    <h3>Numero telefonico</h3>
                                    <p>Oficina: 8920-4319</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6">
                        {/* <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input type="text" name="to_name" />
                                <label>Email</label>
                                <input type="email" name="user_email" />
                                <label>Message</label>
                                <textarea name="message" />
                                <button type="submit" className="btn btn-primary" >Enviar</button>
                            </form> */}
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Su nombre" required />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Su Correo" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" required />
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Cargando</div>
                                <div className="error-message">Error</div>
                                <div className="sent-message">Su mensaje ha sido enviado. Gracias!</div>
                            </div>
                            <div className="text-center"><button type="submit">Enviar mensaje</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contacto