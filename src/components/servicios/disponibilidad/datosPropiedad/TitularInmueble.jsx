import React from 'react'

const TitularInmueble = ({ naturaleza }) => {
    const titularInmueble2=['Poseedor','Autorizado Legal'];
    const titularInmueble1 = ['Propietario Registral', 'Representante Legal', 'Albacea', 'Ourador', 'Tutor', 'Autorizado Legal'
        , 'Concesionario'];
    return (
        <>
            {naturaleza === 'Inmueble Inscrito' || naturaleza === 'Parcelas Agricolas' ?
                <div className="div">
                    <label>Titular del Inmueble</label>
                    <select className="form-select mb-3" >
                    <option >Elija una opcion</option>
                    {titularInmueble1.map((n, x) =>
                        <option key={x + '-' + n}>{n}</option>)
                    }
                </select>
                </div>
                : null
            }
            {
               naturaleza === 'Terreno sin inscribir'  ?
               <div className="div">
                   <label>Titular del Inmueble</label>
                   <select className="form-select mb-3" >
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