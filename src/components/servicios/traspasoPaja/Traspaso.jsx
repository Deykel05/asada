import React, { useState } from 'react';
import { Card, Button, Form, ButtonGroup, ToggleButton } from 'react-bootstrap';

const Traspaso = () => {
    const [radioValue, setRadioValue] = useState('0');

    const radios = [
        { name: 'No', value: '1' },
        { name: 'Si', value: '2' },
    ];
    return <Card className="text-center">
        <Card.Header>Instituto costarricense de Acueductos y Alcantarillados</Card.Header>
        <Card.Body>
            <Card.Title>Cambio del nombre del titular del servicio a solicitud del usuario </Card.Title>

            <div className="row">
                <div className="col-10"></div>
                <div className="col-2">Fecha: {new Date().toLocaleString("en-US", { day: '2-digit' })}/
                    {new Date().toLocaleString("en-US", { month: "2-digit" })}/
                    {new Date().getFullYear()}
                </div>
            </div><br />
            <Form>

                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10 card bg-light">
                        <Form.Group className="row mx-5 my-3">
                            <div className="col-1"></div>
                            <div className="col-3">
                                <Form.Label htmlFor="disabledSelect">El suscrito:  <input type="text" placeholder='Nombre' className="form-control " />
                                </Form.Label>
                            </div>

                            <div className="col-1"></div>
                            <div className="col-3">
                                <Form.Label htmlFor="disabledSelect"> en calida de:
                                    <Form.Select id="disabledSelect">
                                        <option>Propietario Registral</option>
                                        <option>Representante Legal</option>
                                    </Form.Select> </Form.Label>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-3">
                                <Form.Label htmlFor="disabledSelect">Identificación número:  <input type="text" placeholder='00-0000-0000' className="form-control " />
                                </Form.Label>
                            </div>
                            <div className="col-12"><hr /></div>
                            <div className="col-1"></div>
                            <div className="col-5">
                                <Form.Label htmlFor="disabledSelect"> Por ser el titular del inmueble que consta en:</Form.Label>
                                <Form.Select id="disabledSelect">
                                    <option value="certificacion">Certificación Literal</option>
                                    <option value="concesion">Concesión</option>
                                </Form.Select>
                            </div>
                            <div className="col-5">
                                <Form.Label htmlFor="disabledSelect"> Folio real o matricula:
                                    <input type="text" placeholder='00-0000-00' className="form-control " />
                                </Form.Label>
                            </div>
                            <div className="col-12"><hr /></div>

                            <div className="col-1"></div>
                            <div className="col-5">

                                <Form.Label htmlFor="disabledSelect"> Que se representa graficamente mediante:</Form.Label>
                                <Form.Select id="disabledSelect">
                                    <option value="certificacion">Plano de Catastro</option>
                                    <option value="concesion">Plano de Agrimensura</option>
                                </Form.Select>
                            </div>
                            <div className="col-5">
                                <Form.Label htmlFor="disabledSelect"> <br />
                                    <input type="text" placeholder='00-0000-00' className="form-control " />
                                </Form.Label>
                            </div>
                            <div className="col-12"><hr /></div>

                            <div className="col-1"></div>

                            <div className="col-4">
                                <Form.Label htmlFor="disabledSelect"> Solicito realizar el cambio de nombre de contrato del INS
                                    <input type="text" placeholder='' className="form-control " />
                                </Form.Label>
                            </div>

                            <div className="col-7"> <br/>
                                <Form.Label htmlFor="disabledSelect"> A nombre de:
                                <input type="text" placeholder='' className="form-control " />
                                </Form.Label>
                            </div>

                            <div className="col-12"><hr /></div>

                            <Card.Title >Persona Fisica </Card.Title>

                            <div className="col-3">
                                <Form.Label htmlFor="disabledSelect"> Nombre:
                                    <input type="text" placeholder='' className="form-control " />
                                </Form.Label>
                            </div>

                            <div className="col-3">
                                <Form.Label htmlFor="disabledSelect"> 1er Apellido:
                                    <input type="text" placeholder='' className="form-control " />
                                </Form.Label>
                            </div>

                            <div className="col-3">
                                <Form.Label htmlFor="disabledSelect"> 2do Apellido:
                                    <input type="text" placeholder='' className="form-control " />
                                </Form.Label>
                            </div>

                            <div className="col-3">
                                <Form.Label htmlFor="disabledSelect"> Cedula o Pasaporte:
                                    <input type="text" placeholder='' className="form-control " />
                                </Form.Label>
                            </div>


                            <div className="col-12"><hr /></div>

                            <Card.Title > Personas Juridicas </Card.Title>

                            <div className="col-2"></div>
                            <div className="col-3">
                                <Form.Label htmlFor="disabledSelect"> Razon social
                                    <input type="text" placeholder='' className="form-control " />
                                </Form.Label>
                            </div>
                            <div className="col-2"></div>
                            <div className="col-3">
                                <Form.Label htmlFor="disabledSelect"> Cedula Juridica:
                                    <input type="text" placeholder='' className="form-control " />
                                </Form.Label>
                            </div>

                        </Form.Group>



                        {/*

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
                                {radioValue === '1' ? <input type="text" placeholder='Cantidad' className="form-control " /> : null}

                            </div>
                        </div>
                        <Form.Group className="mx-5 my-3" >
                            <Form.Label>Cantidad de Unidades Habitacionales en el Inmueble</Form.Label>
                            <Form.Control type="number" placeholder="Cantidad" />
                        </Form.Group>

                                                    */}
                    </div>



                </div><br/>
                <Button type="submit">Enviar Solicitud</Button>
            </Form>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>;
};

export default Traspaso;
