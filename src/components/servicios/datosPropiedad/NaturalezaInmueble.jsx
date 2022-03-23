import React from 'react'

const NaturalezaInmueble = ({ handleInputChange, formValues }) => {
    const naturalezaPropiedad = ['Inmueble Inscrito', 'Parcelas Agricolas', 'Terreno sin inscribir'];
    return (
        <div className="mx-2 my-3">
            <label className='form-label' htmlFor="disabledSelect">Naturaleza del Inmueble</label>
            <select className="form-select form-select-sm" name='naturaleza' onChange={handleInputChange} required>
                <option value=''>Elija una opcion</option>
                {naturalezaPropiedad.map((n, x) =>
                    <option key={x + '-' + n}>{n}</option>)
                }
            </select>
        </div>
    )
}

export default NaturalezaInmueble