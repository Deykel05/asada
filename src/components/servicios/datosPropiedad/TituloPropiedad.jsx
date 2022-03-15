import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNewRequest } from '../../../actions/requests';
import { useForm } from '../../../hooks/useForm';

const TituloPropiedad = ({ handleInputChange, formValues }) => {
  const dispatch = useDispatch();
  const { naturaleza, tituloPropiedad, tituloPropiedadProvincia, tituloPropiedadNumero, tituloPropiedadDerecho } = formValues;
  if (naturaleza === 'Inmueble Inscrito' || naturaleza === 'Parcelas Agricolas') {
    if (tituloPropiedad) {
      delete formValues.tituloPropiedad;
    }
  }
  if (naturaleza === 'Terreno sin inscribir') {
    if (tituloPropiedadProvincia) {
      delete formValues.tituloPropiedadProvincia;
    }
    if (tituloPropiedadNumero) {
      delete formValues.tituloPropiedadNumero;
    }
    if (tituloPropiedadDerecho) {
      delete formValues.tituloPropiedadDerecho;
    }
  }
  return <>
    {naturaleza === 'Inmueble Inscrito' || naturaleza === 'Parcelas Agricolas' ?
      <div className='mx-2 my-3'>
        <div>
          <label className='form-label mx-5'>Titulo de Propiedad</label>
        </div>
        <div className="input-group input-group-sm mb-3">
          <input type="number" className="form-control" name='tituloPropiedadProvincia' placeholder="Provincia" onChange={handleInputChange} />
          <span className="input-group-text">-</span>
          <input type="number" className="form-control" name='tituloPropiedadNumero' placeholder="Numero" onChange={handleInputChange} />
          <span className="input-group-text">-</span>
          <input type="number" className="form-control" name='tituloPropiedadDerecho' placeholder="Derecho" onChange={handleInputChange} />
        </div>
      </div>
      : null
    }
    {
      naturaleza === 'Terreno sin inscribir' ?
        < div className="mx-2 my-3 ">
          <div>
            <label className='form-label mx-5'>Titulo de Propiedad</label>
          </div>
          <select className="form-select" onChange={handleInputChange} name='tituloPropiedad'>
            <option value='' >Elija una opcion</option>
            <option >Declaracion Jurada Privada</option>
            <option >Declaracion Jurada Protocolizada</option>
          </select>
        </div>
        : null
    }
  </>;
};

export default TituloPropiedad;
