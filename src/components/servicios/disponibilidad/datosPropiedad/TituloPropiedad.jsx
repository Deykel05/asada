import React from 'react';

const TituloPropiedad = ({ naturaleza }) => {
    return <>
        {naturaleza === 'Inmueble Inscrito' || naturaleza === 'Parcelas Agricolas' ?
            <div className='mx-5 my-3'>
                <div>
                    <label className='form-label mx-5'>Titulo de Propiedad</label>
                </div>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Provincia" />
                    <span className="input-group-text">-</span>
                    <input type="number" className="form-control" placeholder="Numero" />
                    <span className="input-group-text">-</span>
                    <input type="number" className="form-control" placeholder="Derecho" />
                </div>
            </div>
            : null
        }
        {
            naturaleza === 'Terreno sin inscribir' ?
            <div className="mx-5 my-3">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label">
                          Declaracion Jurada Privada
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" >
                        Declaracion Jurada Protocolizada
                        </label>
                      </div>
                    </div>
            :null
        }
    </>;
};

export default TituloPropiedad;
