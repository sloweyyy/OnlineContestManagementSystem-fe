import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { black, gray } from '../../config/theme/themePrintives';

const RegistrationTable = ({ registration }) => {
    const navigate = useNavigate();

    const columns = [
        { field: 'id', headerName: '#', flex: 0.5 },
        { field: 'name', headerName: 'Tên cuộc thi', flex: 1.5 },
        { field: 'startDate', headerName: 'Ngày bắt đầu', flex: 1.2 },
        { field: 'endDate', headerName: 'Ngày kết thúc', flex: 1.2 },
        { field: 'status', headerName: 'Trạng thái', flex: 1 },
    ];

    const paginationModel = { page: 0, pageSize: 5 };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('vi-VN');
    };

    const formatStatus = (status) => {
        switch (status) {
            case 'Withdrawn':
                return 'Đã kết thúc';
            case 'Registered':
                return 'Đã đăng ký';
            default:
                return 'Không xác định';
        }
    };

    const contests = registration?.map((contest, index) => ({
        id: index + 1,
        name: contest.result.contestDetails.name,
        startDate: formatDate(contest.result.contestDetails.startDate),
        endDate: formatDate(contest.result.contestDetails.endDate),
        status: formatStatus(contest.result.status),
        _id: contest.result.contestDetails.id,
    }));

    return (
        <DataGrid
            rows={contests}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            disableColumnMenu={true}
            localeText={{
                MuiTablePagination: {
                    labelRowsPerPage: 'Số hàng mỗi bảng',
                    labelDisplayedRows: ({ from, to, count }) =>
                        `${from}–${to} trên ${count !== -1 ? count : `hơn ${to}`}`,
                },
            }}
            onCellClick={(cell) => {
                const row = cell.row;
                if (row._id) {
                    navigate(`/participant/detail-contest?id=${row._id}`);
                }
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
                '& .MuiDataGrid-row.Mui-selected': {
                    backgroundColor: 'transparent !important',
                },
            }}
        />
    );
};

export default RegistrationTable;
