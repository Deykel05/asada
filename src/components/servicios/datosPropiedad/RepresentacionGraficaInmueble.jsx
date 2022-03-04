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
                <div className="div">
                    <label>Representacion grafica del Inmueble</label>
                    <select className="form-select mb-3" onChange={handleRepresentacion}>
                        <option value='' >Elija una opcion</option>
                        <option value='Plano de Catastro' >Plano de Catastro</option>
                    </select>
                </div>
                : null
            }
            {naturaleza === 'Terreno sin inscribir' ?
                <div className="div">
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
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Provincia" />
                    <span className="input-group-text">-</span>
                    <input type="number" className="form-control" placeholder="Numero" />
                    <span className="input-group-text">-</span>
                    <input type="number" className="form-control" placeholder="Año" />
                </div>
            }
            {representacionGraficaInmueble === 'Plano de Agrimensura' && naturaleza !== '' &&
                <input className='form-control' type="number" placeholder="Codigo APT" />

            }
            <div className="mx-5 my-3">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label">
                        No cuenta con plano
                    </label>
                </div>
            </div>
        </>
    )
}

export default RepresentacionGraficaInmueble;