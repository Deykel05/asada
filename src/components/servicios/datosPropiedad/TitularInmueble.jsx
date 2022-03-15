import React from 'react'

const TitularInmueble = ({ handleInputChange, formValues }) => {
    const { naturaleza } = formValues;
    const titularInmueble2 = ['Poseedor', 'Autorizado Legal'];
    const titularInmueble1 = ['Propietario Registral', 'Representante Legal', 'Albacea', 'Ourador', 'Tutor', 'Autorizado Legal'
        , 'Concesionario'];
    return (
        <>
            {naturaleza === 'Inmueble Inscrito' || naturaleza === 'Parcelas Agricolas' ?
                <div className="mx-2 my-3 ">
                    <label>Titular del Inmueble</label>
                    <select className="form-select mb-3" name='titularInmueble' onChange={handleInputChange}>
                        <option value='' >Elija una opcion</option>
                        {titularInmueble1.map((n, x) =>
                            <option key={x + '-' + n}>{n}</option>)
                        }
                    </select>
                </div>
                : null
            }
            {
                naturaleza === 'Terreno sin inscribir' ?
                    <div className="mx-2 my-3 ">
                        <label>Titular del Inmueble</label>
                        <select className="form-select mb-3" name='titularInmueble' onChange={handleInputChange}>
                            <option value='' >Elija una opcion</option>
                            {titularInmueble2.map((n, x) =>
                                <option key={x + '-' + n}>{n}</option>)
                            }
                        </select>
                    </div>
                    : null
            }

        </>
    )
}

export default TitularInmueble