import React from 'react';
import DataTable from 'react-data-table-component';
import Checkbox from '@mui/material/Checkbox';
import moment from 'moment';
import {es} from 'moment/locale/es';
import ArrowDownward from '@mui/icons-material//ArrowDownward';

const sortIcon = <ArrowDownward />;
const selectProps = { indeterminate: isIndeterminate => isIndeterminate };

function DataTableBase(props) {
    moment.locale(es);
    const { data } = props
    data.forEach(e => {
        e.fecha = moment(e.fecha).startOf('hour').fromNow();
    });
    return (
        <DataTable
            pagination
            selectableRowsComponent={Checkbox}
            selectableRowsComponentProps={selectProps}
            sortIcon={sortIcon}
            dense
            {...props}
        />
    );
}

export default DataTableBase;