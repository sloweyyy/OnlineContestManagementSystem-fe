import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { Skeleton, IconButton, MenuItem, Menu, Typography } from '@mui/material';
import { black, gray } from '../../config/theme/themePrintives';
import { MoreVert } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { YesNoModal } from '../../components/custom-components/CustomModal';

const RegistrationTable = ({ registration, handleWithdraw }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedContest, setSelectedContest] = useState(null);
    const { user } = useSelector(state => state.user);
    const isDisabled = selectedContest?.status === 'Đã hủy' || selectedContest?.status === 'Đã thanh toán';
    const [openWithdrawModal, setOpenWithdrawModal] = useState(false);

    const columns = [
        { field: 'id', headerName: '#', flex: 0.5 },
        { field: 'name', headerName: 'Tên cuộc thi', flex: 1.5 },
        { field: 'startDate', headerName: 'Ngày bắt đầu', flex: 1.2 },
        { field: 'endDate', headerName: 'Ngày kết thúc', flex: 1.2 },
        { field: 'status', headerName: 'Trạng thái', flex: 1 },
        {
            field: 'action',
            headerName: '',
            flex: 0.5,
            renderCell: (params) => (
                <IconButton onClick={(event) => handleMenuClick(event, params.row)}>
                    <MoreVert />
                </IconButton>
            ),
        },
    ];

    const paginationModel = { page: 0, pageSize: 5 };

    const formatStatus = (status) => {
        switch (status) {
            case 'Pending':
                return 'Chờ thanh toán';
            case 'Withdrawn':
                return 'Đã hủy';
            case 'Paid':
                return 'Đã thanh toán';
            default:
                return 'Không xác định';
        }
    };

    const contests = registration?.map((contest, index) => ({
        id: index + 1,
        name: contest?.result.contestDetails.name,
        startDate: new Date(contest?.result.contestDetails.startDate).toLocaleDateString('vi-VN'),
        endDate: new Date(contest?.result.contestDetails.endDate).toLocaleDateString('vi-VN'),
        status: formatStatus(contest?.result.status),
        _id: contest?.result.contestId,
    }));

    const handleMenuClick = (event, contest) => {
        setAnchorEl(event.currentTarget);
        setSelectedContest(contest);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleWithdrawClick = () => {
        handleWithdraw(selectedContest._id, user.id);
        handleCloseMenu();
    };

    console.log(selectedContest);

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
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={() => navigate(`/participant/detail-contest?id=${selectedContest._id}`)}>
                    <Typography sx={{ fontSize: 16, fontWeight: 500 }}>Xem chi tiết</Typography>
                </MenuItem>
                <MenuItem onClick={() => setOpenWithdrawModal(true)} disabled={isDisabled}>
                    <Typography sx={{ fontSize: 16, fontWeight: 500 }}>Hủy đang ký</Typography>
                </MenuItem>
                <MenuItem disabled={isDisabled}>
                    <Typography sx={{ fontSize: 16, fontWeight: 500 }}>Thanh toán</Typography>
                </MenuItem>
            </Menu>
            <YesNoModal
                open={openWithdrawModal}
                onClose={() => setOpenWithdrawModal(false)}
                onConfirm={handleWithdrawClick}
                title="Hủy đăng ký"
            />
        </>
    );
};

export default RegistrationTable;
