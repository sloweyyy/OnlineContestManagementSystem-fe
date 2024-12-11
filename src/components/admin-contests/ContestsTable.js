import React, { useState, useEffect } from 'react';
import { Box, Tabs, Tab, TextField, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Apps, BlockRounded, LockResetRounded, PlayCircleFilledRounded, WatchLaterRounded, MoreVert, ManageSearchRounded, SlideshowRounded, HourglassBottom } from '@mui/icons-material';
import { black, dark, gray } from '../../config/theme/themePrintives';
import ContestService from '../../services/contest.service';
import AdminService from '../../services/admin.service';
import { toast } from 'react-toastify';
import ContestDetailModal from './ContestDetailModal';

const tabTextStyle = {
    color: black[200],
    fontWeight: 600,
    fontSize: '16px',
    textTransform: 'none',
    '&.Mui-selected': {
        color: black[900],
    },
};

const tabIconStyle = {
    fontSize: '18px',
};

const ContestsTable = () => {
    const [tabValue, setTabValue] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [contests, setContests] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [selectedContest, setSelectedContest] = useState(null);

    useEffect(() => {
        const fetchContests = async () => {
            const response = await ContestService.getContests();
            setContests(response);
        };

        fetchContests();
    }, []);

    const formatContestStatus = (status) => {
        switch (status) {
            case 'approved':
                return 'Đã phê duyệt';
            case 'pending':
                return 'Chờ phê duyệt';
            case 'rejected':
                return 'Từ chối';
            default:
                return 'Không xác định';
        }
    }

    const rows = contests?.map((contest, index) => {
        return {
            id: index + 1,
            name: contest.name,
            status: formatContestStatus(contest.status),
            organizer: contest.organizationInformation.orgName,
            startDate: new Date(contest.startDate).toLocaleDateString('vi-VN'),
            endDate: new Date(contest.endDate).toLocaleDateString('vi-VN'),
            payment: 'Đã thanh toán',
            _id: contest.id,
        };
    });

    const filteredRows = rows?.filter(row => {
        const matchesSearchQuery = row?.name?.toLowerCase().includes(searchQuery.toLowerCase());
        const newDate = new Date().toLocaleDateString('vi-VN');
        const matchesTabValue =
            tabValue === 0 ||
            (tabValue === 1 && row.startDate < newDate && row.endDate > newDate && row.status !== 'Từ chối') ||
            (tabValue === 2 && row.startDate > newDate && row.status !== 'Từ chối') ||
            (tabValue === 3 && row.endDate < newDate && row.status !== 'Từ chối') ||
            (tabValue === 4 && row.status === 'Chờ phê duyệt') ||
            (tabValue === 5 && row.status === 'Từ chối');
        return matchesSearchQuery && matchesTabValue;
    });

    const columns = [
        { field: 'id', headerName: '#', flex: 0.5 },
        { field: 'name', headerName: 'Tên cuộc thi', flex: 1.5 },
        { field: 'status', headerName: 'Trạng thái', flex: 1 },
        { field: 'organizer', headerName: 'Ban tổ chức', flex: 1.5 },
        { field: 'startDate', headerName: 'Ngày bắt đầu', flex: 1.2 },
        { field: 'endDate', headerName: 'Ngày kết thúc', flex: 1.2 },
        { field: 'payment', headerName: 'Thanh toán', flex: 1 },
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

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleMenuClick = (event, row) => {
        setAnchorEl(event.currentTarget);
        setSelectedRow(row);
        setSelectedContest(contests.find(contest => contest.id === row._id));
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
        setSelectedRow(null);
    };

    const handleViewDetails = () => {
        setOpenModal(true);
        handleCloseMenu();
    };

    const handleApprove = async (contestId) => {
        handleCloseMenu();
        const response = await AdminService.approveContest(contestId);
        if (response.status === 200) {
            toast.success('Phê duyệt cuộc thi thành công');
            const updatedContests = contests?.map(contest => {
                if (contest.id === contestId) {
                    contest.status = 'approved';
                }
                return contest;
            });
            setContests(updatedContests);
        } else {
            console.log('Failed to approve contest');
        }
    };

    const handleReject = async (contestId) => {
        handleCloseMenu();
        const response = await AdminService.rejectContest(contestId);
        if (response.status === 200) {
            toast.success('Từ chối cuộc thi thành công');
            const updatedContests = contests?.map(contest => {
                if (contest.id === contestId) {
                    contest.status = 'rejected';
                }
                return contest;
            });
            setContests(updatedContests);
        } else {
            console.log('Failed to reject contest');
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedContest(null);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', my: 4 }}>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', my: 2 }}>
                    <TextField
                        placeholder="Tìm kiếm"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        sx={{
                            '& .MuiInputBase-root': {
                                '& fieldset': {
                                    borderColor: gray[200],
                                },
                                '&:hover fieldset': {
                                    borderColor: black[900],
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: black[900],
                                    borderWidth: 1,
                                },
                                '& .MuiInputBase-input': {
                                    fontSize: 16,
                                    padding: '12px 24px',
                                },
                            },
                            width: 400,
                        }}
                    />
                </Box>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    aria-label="Contest Tabs"
                    TabIndicatorProps={{ style: { backgroundColor: black[900], bottom: '12px' } }}
                    sx={{
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: '12px',
                            left: 0,
                            right: 0,
                            height: '1px',
                            backgroundColor: gray[200],
                            zIndex: -1,
                        },
                    }}
                >
                    <Tab
                        label="Tất cả"
                        sx={tabTextStyle}
                        icon={<Apps sx={tabIconStyle} />}
                        iconPosition='start'
                        disableRipple
                    />
                    <Tab
                        label="Đang diễn ra"
                        sx={tabTextStyle}
                        icon={<PlayCircleFilledRounded sx={tabIconStyle} />}
                        iconPosition='start'
                        disableRipple
                    />
                    <Tab
                        label="Sắp diễn ra"
                        sx={tabTextStyle}
                        icon={<WatchLaterRounded sx={tabIconStyle} />}
                        iconPosition='start'
                        disableRipple
                    />
                    <Tab
                        label="Đã kết thúc"
                        sx={tabTextStyle}
                        icon={<LockResetRounded sx={tabIconStyle} />}
                        iconPosition='start'
                        disableRipple
                    />
                    <Tab
                        label="Chờ phê duyệt"
                        sx={tabTextStyle}
                        icon={<HourglassBottom sx={tabIconStyle} />}
                        iconPosition='start'
                        disableRipple
                    />
                    <Tab
                        label="Từ chối"
                        sx={tabTextStyle}
                        icon={<BlockRounded sx={tabIconStyle} />}
                        iconPosition='start'
                        disableRipple
                    />
                </Tabs>
            </Box>

            <Box sx={{ height: 400, mt: 2 }}>
                <DataGrid
                    rows={filteredRows}
                    columns={columns}
                    pageSizeOptions={[5]}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 5, page: 0 } },
                    }}
                    disableColumnMenu
                    localeText={{
                        MuiTablePagination: {
                            labelRowsPerPage: 'Số hàng mỗi bảng',
                            labelDisplayedRows: ({ from, to, count }) => `${from}–${to} trên ${count !== -1 ? count : `hơn ${to}`}`,
                        },
                    }}
                    sx={{
                        width: '100%',
                        border: `1px solid ${gray[200]}`,
                        '& .MuiDataGrid-columnHeader': {
                            backgroundColor: gray[200],
                            color: black[900],
                            fontWeight: 600,
                            fontSize: 16,
                            outline: 'none',
                        },
                        '& .MuiDataGrid-columnHeaderTitle': {
                            fontWeight: 600,
                        },
                        '& .MuiDataGrid-cell': {
                            outline: 'none',
                        },
                        '& .MuiDataGrid-row:hover': {
                            backgroundColor: gray[200],
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
                            backgroundColor: `${gray[200]} !important`,
                        },
                        '& .MuiDataGrid-columnSeparator--resizable': {
                            display: 'block',
                        },
                    }}
                />
            </Box>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                sx={{ '& .MuiMenuItem-root': { '&:hover': { backgroundColor: gray[200] } } }}
            >
                <MenuItem onClick={handleViewDetails}>
                    <ManageSearchRounded fontSize='small' sx={{ mr: 1, color: dark[500] }} />
                    <Typography sx={{ fontSize: '16px', color: dark[500] }}>Xem chi tiết</Typography>
                </MenuItem>
                <MenuItem onClick={() => handleApprove(selectedRow?._id)} disabled={selectedRow?.status !== 'Chờ phê duyệt'}>
                    <SlideshowRounded fontSize='small' sx={{ mr: 1, color: dark[500] }} />
                    <Typography sx={{ fontSize: '16px', color: dark[500] }}>Phê duyệt</Typography>
                </MenuItem>
                <MenuItem onClick={() => handleReject(selectedRow._id)} disabled={selectedRow?.status !== 'Chờ phê duyệt'}>
                    <BlockRounded fontSize='small' sx={{ mr: 1, color: dark[500] }} />
                    <Typography sx={{ fontSize: '16px', color: dark[500] }}>Từ chối</Typography>
                </MenuItem>
            </Menu>

            <ContestDetailModal open={openModal} onClose={handleCloseModal} contest={selectedContest} handleApprove={handleApprove} handleReject={handleReject} />
        </Box>
    );
};

export default ContestsTable;