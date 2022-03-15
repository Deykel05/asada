import React, { useEffect } from 'react'

const NaturalezaInmueble = ({ handleInputChange, reset, formValues }) => {
    const naturalezaPropiedad = ['Inmueble Inscrito', 'Parcelas Agricolas', 'Terreno sin inscribir'];
    const { naturaleza } = formValues;

    useEffect(() => {
        if (naturaleza === '') {
            reset({
                naturaleza: ''
            })
        }
    }, [naturaleza]);


    return (
        <div className="mx-2 my-3">
            <label className='form-label' htmlFor="disabledSelect">Naturaleza del Inmueble</label>
            <select className="form-select" name='naturaleza' onChange={handleInputChange}>
                <option value=''>Elija una opcion</option>
                {naturalezaPropiedad.map((n, x) =>
                    <option key={x + '-' + n}>{n}</option>)
                }
            </select>
        </div>
    )
}

export default NaturalezaInmueble