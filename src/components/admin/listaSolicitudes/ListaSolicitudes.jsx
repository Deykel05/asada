import React from 'react'
import DataTable from '../../dataTable/DataTableBase';
import { FaAngleRight, FaTable } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import moment from 'moment';


const ListaSolicitudes = () => {
    const { requests } = useSelector(state => state.request);
    console.log(requests);
    const columns = [
        {
            name: 'Nombre',
            selector: row => row.name,
        },
        {
            name: 'Tipo',
            selector: row => row.tipoSolicitud,
        },
        {
            name: 'Fecha',
            selector: row =>moment(row.fecha,'YYYYMMDD').fromNow() ,
        }
    ];
    const data = [];
    requests.map(req => data.push(req));
    // const data = [
    //     {
    //         id: 1,
    //         name: 'Beetlejuice',
    //         type: 'Disponibilidad',
    //         date: '1988'
    //     },
    //     {
    //         id: 2,
    //         name: 'Beetlejuice',
    //         type: 'Disponibilidad',
    //         date: '1988'
    //     },
    //     {
    //         id: 3,
    //         name: 'Beetlejuice',
    //         type: 'Disponibilidad',
    //         date: '1988'
    //     },
    // ]
    return (
        <main>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Dashboard</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-primary text-white mb-4">
                            <div className="card-body">Primary Card</div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                {/* <a className="small text-white stretched-link">View Details</a> */}
                                <div className="small text-white"><FaAngleRight /></div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-3 col-md-6">
                                    <div className="card bg-warning text-white mb-4">
                                        <div className="card-body">Warning Card</div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <a className="small text-white stretched-link" >View Details</a>
                                            <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                        </div>
                                    </div>
                                </div> */}

                </div>

                <div className="card mb-4">
                    <div className="card-header">
                        <FaTable />
                        Nuevas Solicitudes
                    </div>
                    <div className="card-body">
                        <DataTable columns={columns} data={data} selectableRows />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ListaSolicitudes