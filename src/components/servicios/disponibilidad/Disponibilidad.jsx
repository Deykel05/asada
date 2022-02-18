import React, { useState } from 'react';
import { Card, Button, Form, ButtonGroup, ToggleButton } from 'react-bootstrap';
import MediosParaNotificacion from '../MediosParaNotificacion';
import TituloPropiedad from './TituloPropiedad';

const Disponibilidad = () => {
  const [radioValue, setRadioValue] = useState('0');

  const radios = [
    { name: 'No', value: '1' },
    { name: 'Si', value: '2' },
  ];

  const [datosPropiedad, setDatosPropiedad] = useState({
    naturaleza: '',
    tituloPropiedad: '',
    titularInmueble: '',
    representacionGraficaInmueble: ''
  });
  const { naturaleza } = datosPropiedad;
  const handleNaturaleza = (e) => {
    console.log(e.target.value);
    setDatosPropiedad({
      ...datosPropiedad,
      naturaleza: e.target.value
    })
  };

  const naturalezaPropiedad = ['Inmueble Inscrito', 'Parcelas Agricolas',
    'Terreno sin inscribir'];



  return <div className="text-center card">
    <div className='card-header'>Instituto costarricense de Acueductos y Alcantarillados</div>
    <div className='card-body'>
      <h5 className='py-3 card-title'>Disponibilidad de Agua Potable y Alcantarillado Sanitario</h5>
      <form>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 card bg-light my-2 p-3" style={{ height: "280px" }}>
            <div className="row">
              <Form.Group className="col-12 my-3">
                <div className="container px-5">
                  <h5 htmlFor="disabledSelect">Servicio Requerido</h5>
                  <select className="form-select text-center" id="disabledSelect">
                    <option>Agua Potable</option>
                    <option>Alcantarillado Sanitario</option>
                  </select>
                </div>
              </Form.Group>
              <div className="col-6">
                <label className='form-label w-100' htmlFor="disabledSelect" >Inmueble tiene servicios asociados?</label>
                <div className='btn-group'>
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant={idx % 2 ? 'outline-success  mx-1' : 'outline-danger '}
                      name="radio"
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => {
                        setRadioValue(e.currentTarget.value);
                        return console.log(e.currentTarget.value)
                      }}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </div>
              </div>
              <div className="col-6">
                <Form.Group className="mx-5 my-1" >
                  <label className='form-label'>Cantidad de Unidades Habitacionales en el Inmueble</label>
                  <input className='form-control' type="number" placeholder="Cantidad" />
                </Form.Group>
              </div>
              <div className="col-6 px-5">
                <div className="container">
                  {radioValue === '2' && <input type="number" placeholder='Cantidad' className="form-control " />}
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 "></div>
          <div className="col-1 "></div>

          <div className="col-10 card bg-light my-2 p-3">
            <Form.Group className="mx-5 my-3">
              <h5>Datos de la Propiedad</h5>
              <label className='form-label' htmlFor="disabledSelect">Naturaleza del Inmueble</label>
              <select className="form-select" id="disabledSelect" onChange={handleNaturaleza}>
                <option selected>Elija una opcion</option>
                {naturalezaPropiedad.map((n, x) =>
                  <option key={x + '-' + n}>{n}</option>)
                }
              </select>
            </Form.Group>
            {naturaleza !== '' && <TituloPropiedad naturaleza={naturaleza} />}

          </div>
          <div className="col-1 "></div>
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
          <div className="col-1 "></div>

          <div className="col-10 bg-light card my-2 p-3">
            <h5 htmlFor="disabledSelect">Localizacion de la Propiedad</h5>
            <hr />
            <div className="radio">
              <div className="row">
                {/* <div className="col-6 ">
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
                </div> */}


                <div className="col-6 p-2">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Provincia" />
                    <span className="input-group-text"> </span>
                    <input type="text" className="form-control" placeholder="Canton" />
                    <span className="input-group-text"> </span>
                    <input type="text" className="form-control" placeholder="Distrito" />
                  </div>
                </div>
                <div className="col-6 p-2">
                  <div className="container">
                    <input type="text" className="form-control" placeholder="Otras señas" />

                  </div>

                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ resize: "none", height: "100px" }}></textarea>
                    <label >Direccion exacta del inmueble</label>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-1 "></div>
          <div className="col-1 "></div>

          <MediosParaNotificacion />
        </div>
        <Button type="submit">Enviar Solicitud</Button>
      </form>
    </div>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
  </div>;
};

export default Disponibilidad;
