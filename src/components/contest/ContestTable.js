import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { black, gray } from '../../config/theme/themePrintives';
import { Menu, MenuItem, IconButton, Typography } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { Skeleton } from '@mui/material';
import DetailContestModal from './DetailContestModal';

const ContestTable = ({ contests, handleDeleteSelected }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedContest, setSelectedContest] = useState([]);
    const [openDetailModal, setOpenDetailModal] = useState(false);

    const formatStatus = (status) => {
        switch (status) {
            case 'approved':
                return 'Đã duyệt';
            case 'pending':
                return 'Chờ duyệt';
            case 'rejected':
                return 'Từ chối';
            default:
                return 'Không xác định';
        }
    };

    const handleMenuClick = (event, contest) => {
        setAnchorEl(event.currentTarget);
        setSelectedContest(contest);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleViewDetails = () => {
        setOpenDetailModal(true);
        handleCloseMenu();
    };

    const handleDelete = () => {
        handleDeleteSelected(selectedContest._id);
        handleCloseMenu();
    };

    const columns = [
        { field: 'id', headerName: '#', flex: 0.5 },
        { field: 'name', headerName: 'Tên cuộc thi', flex: 1.5 },
        {
            field: 'orgName',
            headerName: 'Ban tổ chức',
            flex: 1.5,
        },
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

    const rows = contests.map((contest, index) => ({
        id: index + 1,
        name: contest.name,
        orgName: contest.organizationInformation.orgName,
        startDate: new Date(contest.startDate).toLocaleDateString('vi-VN'),
        endDate: new Date(contest.endDate).toLocaleDateString('vi-VN'),
        status: formatStatus(contest.status),
        _id: contest.id,
    }));

    const paginationModel = { page: 0, pageSize: 5 };

    return (
        <>
            {!contests ?
                (
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
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
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
                )
            }
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
                <MenuItem onClick={handleViewDetails} disabled={selectedContest?.status !== 'Đã duyệt'}>
                    <Typography sx={{ fontSize: 16, fontWeight: 500 }}>Xem chi tiết</Typography>
                </MenuItem>
                <MenuItem onClick={handleDelete}>
                    <Typography sx={{ fontSize: 16, fontWeight: 500 }}>Xóa</Typography>
                </MenuItem>
            </Menu>
            <DetailContestModal
                open={openDetailModal}
                handleClose={() => setOpenDetailModal(false)}
                contest={selectedContest}
            />
        </>
    );
};

export default ContestTable;
