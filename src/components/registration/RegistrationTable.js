import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';  // Import Skeleton
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
        name: contest?.result.contestDetails.name,
        startDate: new Date(contest.startDate).toLocaleDateString('vi-VN'),
        endDate: new Date(contest.endDate).toLocaleDateString('vi-VN'),
        status: formatStatus(contest?.result.status),
        _id: contest?.result.contestDetails.id,
    }));

    return (
        <>
            {!registration ? (
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex' }}>
                        <Skeleton variant="rectangular" height="40px" style={{ margin: '5px', flex: 0.5 }} />
                        <Skeleton variant="rectangular" height="40px" style={{ margin: '5px', flex: 1.5 }} />
                        <Skeleton variant="rectangular" height="40px" style={{ margin: '5px', flex: 1.5 }} />
                        <Skeleton variant="rectangular" height="40px" style={{ margin: '5px', flex: 1.5 }} />
                        <Skeleton variant="rectangular" height="40px" style={{ margin: '5px', flex: 1 }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {[...Array(5)].map((_, index) => (
                            <div key={index} style={{ display: 'flex', marginBottom: '5px' }}>
                                <Skeleton variant="rectangular" height="40px" style={{ margin: '5px', flex: 0.5 }} />
                                <Skeleton variant="rectangular" height="40px" style={{ margin: '5px', flex: 1.5 }} />
                                <Skeleton variant="rectangular" height="40px" style={{ margin: '5px', flex: 1.5 }} />
                                <Skeleton variant="rectangular" height="40px" style={{ margin: '5px', flex: 1.5 }} />
                                <Skeleton variant="rectangular" height="40px" style={{ margin: '5px', flex: 1 }} />
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                        <Skeleton variant="rectangular" width="200px" height="40px" style={{ margin: '5px' }} />
                    </div>
                </div>
            ) : (
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
            )}
        </>
    );
};

export default RegistrationTable;
