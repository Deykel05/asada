import React from 'react'

const RepresentacionGraficaInmueble = ({ representacionGraficaInmueble, setDatosPropiedad, naturaleza }) => {

    const representacionGrafica = ['Plano de Catastro', 'Plano de Agrimensura'];
    const handleRepresentacion = (e) => {
        setDatosPropiedad(ant => ({
            ...ant,
            representacionGraficaInmueble: e.target.value
        }))
    }
    return (
        <>
            {naturaleza === 'Parcelas Agricolas' || naturaleza === 'Inmueble Inscrito' ?
                <div className="mx-2 my-3">
                    <label>Representacion grafica del Inmueble</label>
                    <select className="form-select mb-3" onChange={handleRepresentacion}>
                        <option value='' >Elija una opcion</option>
                        <option value='Plano de Catastro' >Plano de Catastro</option>
                    </select>
                </div>
                : null
            }
            {naturaleza === 'Terreno sin inscribir' ?
                <div className="mx-2 my-3">
                    <label>Representacion grafica del Inmueble</label>
                    <select className="form-select mb-3" onChange={handleRepresentacion}>
                        <option value='' >Elija una opcion</option>
                        {representacionGrafica.map((n, x) =>
                            <option key={x + '-' + n}>{n}</option>)
                        }

                    </select>
                </div>
                : null
            }

            {representacionGraficaInmueble === 'Plano de Catastro' && naturaleza !== '' &&
                <div className='mx-2 my-3'>
                    <div className="input-group input-group-sm ">
                        <input type="number" className="form-control" placeholder="Provincia" />
                        <span className="input-group-text">-</span>
                        <input type="number" className="form-control" placeholder="Numero" />
                        <span className="input-group-text">-</span>
                        <input type="number" className="form-control" placeholder="Año" />
                    </div>
                </div>
            }
            {representacionGraficaInmueble === 'Plano de Agrimensura' && naturaleza !== '' &&
                <div className='mx-2 my-3'>
                    <input className='form-control' type="number" placeholder="Codigo APT" />
                </div>
            }
        </>
    )
}

export default RepresentacionGraficaInmueble;