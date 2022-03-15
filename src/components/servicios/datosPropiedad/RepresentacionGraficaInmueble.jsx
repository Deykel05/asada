import React, { useState } from 'react'

const RepresentacionGraficaInmueble = ({ handleInputChange, formValues }) => {
    const { naturaleza, planoCatastroProvincia, planoCatastroNumero, planoCatastroAño, planoAgrimesura } = formValues;
    const representacionGrafica = ['Plano de Catastro', 'Plano de Agrimensura'];
    const [representacionGraficaInmueble, setRepresentacion] = useState('')
    const handleRepresentacion = (e) => {
        setRepresentacion(e.target.value);
    }
    if (representacionGraficaInmueble === 'Plano de Catastro' && naturaleza !== '') {
        if (planoAgrimesura) {
            delete formValues.planoAgrimesura;
        }
    }
    if (representacionGraficaInmueble === 'Plano de Agrimensura' && naturaleza !== '') {
        if (planoCatastroProvincia) {
            delete formValues.planoCatastroProvincia;
        }
        if (planoCatastroNumero) {
            delete formValues.planoCatastroNumero;
        }
        if (planoCatastroAño) {
            delete formValues.planoCatastroAño;
        }
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

            {representacionGraficaInmueble === 'Plano de Catastro' && naturaleza !== '' ?
                <div className='mx-2 my-3'>
                    <div className="input-group input-group-sm ">
                        <input type="number" className="form-control" placeholder="Provincia" name='planoCatastroProvincia' onChange={handleInputChange} />
                        <span className="input-group-text">-</span>
                        <input type="number" className="form-control" placeholder="Numero" name='planoCatastroNumero' onChange={handleInputChange} />
                        <span className="input-group-text">-</span>
                        <input type="number" className="form-control" placeholder="Año" name='planoCatastroAño' onChange={handleInputChange} />
                    </div>
                </div>
                : null
            }
            {representacionGraficaInmueble === 'Plano de Agrimensura' && naturaleza !== '' ?
                <div className='mx-2 my-3'>
                    <input className='form-control' type="number" placeholder="Codigo APT" name='planoAgrimesura' onChange={handleInputChange} />
                </div>
                : null
            }
        </>
    )
}

export default RepresentacionGraficaInmueble;