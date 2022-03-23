import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { startUploading } from '../../../actions/imagesUrl';

const RepresentacionGraficaInmueble = ({ handleInputChange, formValues }) => {
    const dispatch = useDispatch();

    const { naturaleza, planoCatastroProvincia, planoCatastroNumero, planoCatastroAño, planoAgrimesura, urlPlanoInmueble } = formValues;
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
    if (naturaleza === 'Parcelas Agricolas' || naturaleza === 'Inmueble Inscrito') {
        delete formValues.planoAgrimesura;
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
    const handleFile = (e) => {
        const file = e.target.files[0];
        dispatch(startUploading(file, e.target.name));
    }
    return (
        <>
            <div className='row justify-content-center' >
                <div className="col-md-6 pb-5">
                    {naturaleza === 'Parcelas Agricolas' || naturaleza === 'Inmueble Inscrito' ?
                        <div className="mx-2 my-3">
                            <label className='form-label '>Representacion grafica del Inmueble</label>
                            <select className="form-select form-select-sm" onChange={handleRepresentacion} required>
                                <option value='' >Elija una opcion</option>
                                <option value='Plano de Catastro' >Plano de Catastro</option>
                            </select>
                        </div>
                        : null
                    }
                    {naturaleza === 'Terreno sin inscribir' ?
                        <div className="mx-2 my-3">
                            <label className='form-label '>Representacion grafica del Inmueble</label>
                            <select className="form-select form-select-sm" onChange={handleRepresentacion} required>
                                <option value='' >Elija una opcion</option>
                                {representacionGrafica.map((n, x) =>
                                    <option key={x + '-' + n}>{n}</option>)
                                }

                            </select>
                        </div>
                        : null
                    }
                </div>

                <div className="col-md-6 pb-5">
                    {representacionGraficaInmueble === 'Plano de Catastro' && naturaleza !== '' ?
                        <div className='mx-2 my-3'>
                            <label className='form-label '>Plano de Catastro</label>
                            <div className="input-group input-group-sm ">
                                <input type="number" className="form-control" placeholder="Provincia" name='planoCatastroProvincia' onChange={handleInputChange} required />
                                <span className="input-group-text">-</span>
                                <input type="number" className="form-control" placeholder="Numero" name='planoCatastroNumero' onChange={handleInputChange} required />
                                <span className="input-group-text">-</span>
                                <input type="number" className="form-control" placeholder="Año" name='planoCatastroAño' onChange={handleInputChange} required />
                            </div>
                        </div>
                        : null
                    }
                    {representacionGraficaInmueble === 'Plano de Agrimensura' && naturaleza !== '' && naturaleza !== 'Parcelas Agricolas' && naturaleza !== 'Inmueble Inscrito' ?

                        <div className='mx-2 my-3'>
                            <label className='form-label '>Plano de Agrimesura</label>
                            <input className='form-control form-control-sm' type="number" placeholder="Codigo APT" name='planoAgrimesura' onChange={handleInputChange} required />
                        </div>
                        : null
                    }
                </div>

                <div className="col-md-6">
                    {naturaleza !== '' &&
                        <div className='mx-2 my-3 py-5'>
                            <label className='form-label'>En el siguiente espacio adjunte una foto del plano(OPCIONAL)</label>
                            <input type="file" name='urlPlanoInmueble' className="form-control form-control-sm" onChange={handleFile} />
                        </div>
                    }

                </div>
                <div className="col-md-6" >
                    {naturaleza !== '' &&
                        <div className='mx-2 my-3 bg-white' style={{ height: "250px" }}>
                            {urlPlanoInmueble ?
                                <img src={urlPlanoInmueble} alt="" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
                                : <p>No hay imagen por mostrar</p>
                            }
                        </div>
                    }
                </div>
            </div>

        </>
    )
}

export default RepresentacionGraficaInmueble;