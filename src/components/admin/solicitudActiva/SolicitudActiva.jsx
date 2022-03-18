import React from 'react'
import { useForm } from '../../../hooks/useForm';
import DisponibilidadAdmin from './disponibilidadAdmin/DisponibilidadAdmin';

const SolicitudActiva = ({ request }) => {

    const { tipoSolicitud } = request;

    // const [formValues, handleInputChange, reset, setValues] = useForm({
    //     tipoSolicitud: tipoSolicitud,
    //     naturaleza: '',
    //     fecha: new Date().getTime(),
    //     tipoPersona: '1'

    // });
    return (
        <>
            {tipoSolicitud === 'disponibilidad' &&
                <DisponibilidadAdmin
                    request={request}
                />
            }
        </>
    )
}

export default SolicitudActiva