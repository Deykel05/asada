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
            {naturaleza !== '' ?
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
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Condigo APT" />
                </div>
            }
        </>
    )
}

export default RepresentacionGraficaInmueble;