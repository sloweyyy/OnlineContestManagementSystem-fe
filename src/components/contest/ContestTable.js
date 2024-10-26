import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { black, gray } from '../../config/theme/themePrintives';

const ContestTable = ({ contests }) => {

    const columns = [
        { field: 'id', headerName: '#', flex: 0.5 },
        { field: 'name', headerName: 'Tên cuộc thi', flex: 1.5 },
        { field: 'dateStart', headerName: 'Ngày bắt đầu', flex: 1.2 },
        { field: 'dateEnd', headerName: 'Ngày kết thúc', flex: 1.2 },
        { field: 'contestantNumber', headerName: 'Số lượng thí sinh', flex: 1 },
        { field: 'status', headerName: 'Trạng thái', flex: 1 },
    ];

    const paginationModel = { page: 0, pageSize: 5 };

    return (
        <DataGrid
            rows={contests}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            disableColumnMenu={true}
            localeText={{
                MuiTablePagination: {
                    labelRowsPerPage: 'Số hàng mỗi bảng',
                    labelDisplayedRows: ({ from, to, count }) => `${from}–${to} trên ${count !== -1 ? count : `hơn ${to}`}`,
                },
            }}
            sx={{
                width: '100%',
                border: 0,
                '& .MuiDataGrid-columnHeader': {
                    backgroundColor: gray[100],
                    color: black[900],
                    fontWeight: 'bold',
                    fontSize: '16px',
                    outline: 'none',
                },
                '& .MuiDataGrid-columnHeaderTitle': {
                    fontWeight: '600',
                },
                '& .MuiDataGrid-cell': {
                    outline: 'none',
                },
                '& .MuiDataGrid-row:hover': {
                    backgroundColor: 'transparent',
                },
                '& .MuiDataGrid-root': {
                    border: 'none',
                },
                '& .MuiDataGrid-selectedRowCount': {
                    visibility: 'hidden',
                },
                '& .MuiDataGrid-checkboxInput.Mui-checked': {
                    color: 'inherit',
                },
                '& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within': {
                    outline: 'none',
                },
                '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within': {
                    outline: 'none',
                },
                '& .MuiDataGrid-row:hover': {
                    backgroundColor: 'transparent',
                },
                '& .MuiDataGrid-row.Mui-selected': {
                    backgroundColor: 'transparent !important',
                },
            }}
        />
    );
};

export default ContestTable;
