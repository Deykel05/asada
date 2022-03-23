import React from 'react'
import DataTable from '../../dataTable/DataTableBase';
import { FaTable } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { activeRequest } from '../../../actions/requests';
import moment from 'moment';
import { es } from 'moment/locale/es';
import SolicitudActiva from '../solicitudActiva/SolicitudActiva';

const ListaSolicitudes = () => {

    moment.locale(es);
    const dispatch = useDispatch();

    const { requests, active } = useSelector(state => state.request);

    const handleActiveRequest = (row) => {
        dispatch(activeRequest(row.id, row));
    }
    const columns = [

        {
            name: 'Nombre',
            selector: row => row.nombrePersona,
        },
        {
            name: 'Tipo',
            selector: row => row.tipoSolicitud,
        },
        {
            name: 'Fecha',
            selector: row => row.fecha,
            format: (row) => moment(row.fecha).format("MMMM Do YYYY"),
        },
        {
            name: 'Opcion',
            button: true,
            cell: (row) => (
                <div className="App">
                    <div className="text-center">
                        <button
                            key={row.id}
                            onClick={() => {
                                handleActiveRequest(row);
                            }}
                            type="button"
                            className="btn btn-sm btn-primary"
                        >
                            Ver Solicitud
                        </button>

                    </div>
                </div>
            )
        }
    ];
    const data = [];
    requests.filter(req => {
        if (req.estado === '1') {
            data.push(req);
        }
    })

    return (
        <main>
            {active ?
                <SolicitudActiva
                    request={active}
                />
                :
                <div className="container-fluid px-4">
                    <h1 className="mt-4">Nuevas Solicitudes</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item active">INICIO</li>
                    </ol>
                    <div className="card mb-4">
                        <div className="card-header">
                            <FaTable />

                        </div>
                        <div className="card-body">
                            <DataTable columns={columns} data={data} />
                        </div>
                    </div>
                </div>
            }
        </main>
    )
}

export default ListaSolicitudes