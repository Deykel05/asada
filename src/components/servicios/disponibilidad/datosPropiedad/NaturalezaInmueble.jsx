import React from 'react'

const NaturalezaInmueble = ({ setDatosPropiedad }) => {
    const naturalezaPropiedad = ['Inmueble Inscrito', 'Parcelas Agricolas', 'Terreno sin inscribir'];
    const handleNaturaleza = (e) => {
        if (e.target.value === '') {
            setDatosPropiedad({
                naturaleza: '',
                tituloPropiedad: '',
                titularInmueble: '',
                representacionGraficaInmueble: ''
            });
        } else {
            setDatosPropiedad(datos => ({
                ...datos,
                naturaleza: e.target.value
            }));
        }

    };
    return (
        <div className="mx-5 my-3 py-5">
            <label className='form-label' htmlFor="disabledSelect">Naturaleza del Inmueble</label>
            <select className="form-select" onChange={handleNaturaleza}>
                <option value='' >Elija una opcion</option>
                {naturalezaPropiedad.map((n, x) =>
                    <option key={x + '-' + n}>{n}</option>)
                }
            </select>
        </div>
    )
}

export default NaturalezaInmueble