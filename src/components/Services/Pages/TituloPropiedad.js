import React from 'react';

const TituloPropiedad = ({ naturaleza }) => {
    console.log(naturaleza);
    const titularInmueble = ['Propietario Registral', 'Representante Legal', 'Albacea', 'Ourador', 'Tutor', 'Autorizado Legal', 'Concesionario'];
    return <>
        {naturaleza === 'Inmueble Inscrito' ?
            <div className='mx-5 my-3'>
                <hr />
                <label className='my-3 mx-5'>Titulo de propiedad</label>

                <div>
                    <label className='form-label mx-5'>Folio Real o Matricula</label>
                </div>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Provincia" />
                    <span className="input-group-text">-</span>
                    <input type="number" className="form-control" placeholder="Numero" />
                    <span className="input-group-text">-</span>
                    <input type="number" className="form-control" placeholder="Derecho" />
                </div>
                <label>Titular del Inmueble</label>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Elija una opcion</option>
                    {titularInmueble.map((n, x) =>
                        <option key={x + '-' + n}>{n}</option>)
                    }
                </select>
            </div>
            : null}
    </>;
};

export default TituloPropiedad;
