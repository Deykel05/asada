import React from 'react'
import {BiMap,BiEnvelope,BiPhoneCall} from 'react-icons/bi';
import '../../estilos/contacto/styles.css';
const Contacto = () => {
    return (
        <section className="contact p-5 my-5" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
            <div className="container">

                <div className="row">

                    <div className="col-lg-6">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="info-box">
                                    <BiMap style={{fontSize:"50px"}}/>
                                    <h3>Nuestra direccion</h3>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box">
                                    <BiEnvelope style={{fontSize:"50px"}}/>
                                    <h3>Envienos un correo</h3>
                                    <p>info@example.com<br />contact@example.com</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box">
                                    <BiPhoneCall style={{fontSize:"50px"}}/>
                                    <h3>Numeros telefonicos</h3>
                                    <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contacto