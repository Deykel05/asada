import React, { useState } from 'react';
import { Card, Button, Form, ButtonGroup, ToggleButton } from 'react-bootstrap';
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



  return <Card className="text-center">
    <Card.Header>Instituto costarricense de Acueductos y Alcantarillados</Card.Header>
    <Card.Body>
      <Card.Title className='py-3'>Disponibilidad de Agua Potable y Alcantarillado Sanitario</Card.Title>
      <Form>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-5 card bg-light me-1">
            <Form.Group className="mx-5 my-3">
              <h5 htmlFor="disabledSelect">Servicio Requerido</h5>
              <Form.Select id="disabledSelect">
                <option>Agua Potable</option>
                <option>Alcantarillado Sanitario</option>
              </Form.Select>
            </Form.Group>
            <div className="row  my-3 ">
              <div className="col-6">
                <Form.Label htmlFor="disabledSelect" >Inmueble tiene servicios asociados?</Form.Label>

              </div>
              <div className="col-2">
                <ButtonGroup>
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
                </ButtonGroup>
              </div>
              <div className="col-4">
                {radioValue === '2' && <input type="text" placeholder='Cantidad' className="form-control " />}

              </div>
            </div>
            <Form.Group className="mx-5 my-3" >
              <Form.Label>Cantidad de Unidades Habitacionales en el Inmueble</Form.Label>
              <Form.Control type="number" placeholder="Cantidad" />
            </Form.Group>


          </div>
          <div className="col-5 card bg-light">
            <Form.Group className="mx-5 my-3">
              <h5>Datos de la Propiedad</h5>
              <Form.Label htmlFor="disabledSelect">Naturaleza del Inmueble</Form.Label>
              <Form.Select id="disabledSelect" onChange={handleNaturaleza}>
                <option selected>Elija una opcion</option>
                {naturalezaPropiedad.map((n, x) =>
                  <option key={x + '-' + n}>{n}</option>)
                }
              </Form.Select>
            </Form.Group>
            {naturaleza !== '' && <TituloPropiedad naturaleza={naturaleza} />}

          </div>
          <div className="col-1 "></div>

          <div className="col-10 bg-light card my-3 p-5">
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

          <div className="col-10 bg-light card my-3 p-5">
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

        </div>
        <Button type="submit">Enviar Solicitud</Button>
      </Form>
    </Card.Body>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
  </Card>;
};

export default Disponibilidad;
