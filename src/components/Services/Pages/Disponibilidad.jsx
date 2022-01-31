import React, { useState } from 'react';
import { Card, Button, Form, ButtonGroup, ToggleButton } from 'react-bootstrap';

const Disponibilidad = () => {
  const [radioValue, setRadioValue] = useState('0');

  const radios = [
    { name: 'No', value: '1' },
    { name: 'Si', value: '2' },
  ];
  return <Card className="text-center">
    <Card.Header>Solicitud de Constancia</Card.Header>
    <Card.Body>
      <Card.Title>Disponibilidad de Agua Potable y Alcantarillado Sanitario</Card.Title>
      <Form>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-4 card bg-light">
            <Form.Group className="mx-5 my-3">
              <Form.Label htmlFor="disabledSelect">Servicio Requerido</Form.Label>
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
                {radioValue === '2' ? <input type="text" placeholder='Cantidad' className="form-control " /> : null}

              </div>
            </div>
            <Form.Group className="mx-5 my-3" >
              <Form.Label>Cantidad de Unidades Habitacionales en el Inmueble</Form.Label>
              <Form.Control type="number" placeholder="Cantidad" />
            </Form.Group>


          </div>
          <div className="col-1"></div>
          <div className="col-5 card bg-light">
            <Form.Group className="mx-5 my-3">
              <h5>Datos de la Propiedad</h5>
              <Form.Label htmlFor="disabledSelect">Naturaleza del Inmueble</Form.Label>
              <Form.Select id="disabledSelect">
                <option>Agua Potable</option>
                <option>Alcantarillado Sanitario</option>
              </Form.Select>
            </Form.Group>
          </div>


        </div>
        <Button type="submit">Enviar Solicitud</Button>
      </Form>
    </Card.Body>
    <Card.Footer className="text-muted">2 days ago</Card.Footer>
  </Card>;
};

export default Disponibilidad;
