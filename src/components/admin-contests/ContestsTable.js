import React, { useState } from 'react';
import {
    Box,
    Tab,
    Tabs,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Divider,
    TextField,
    TablePagination,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { black, gray } from '../../config/theme/themePrintives';
import { Apps, BlockRounded, LockResetRounded, PlayCircleFilledRounded, WatchLaterRounded } from '@mui/icons-material';

const tabTextStyle = {
    color: black[200],
    fontWeight: '600',
    fontSize: '16px',
    textTransform: 'none',
    '&.Mui-selected': {
        color: black[900],
    },
};

const tabIconStyle = {
    fontSize: '18px',
};

const headerCellStyle = {
    color: black[900],
    fontWeight: '600',
    fontSize: '16px',
};

const bodyCellStyle = {
    color: black[900],
    fontWeight: '400',
    fontSize: '16px',
};

const ContestsTable = () => {
    const [tabValue, setTabValue] = useState(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState("");

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const data = [
        { name: 'Cuộc thi 1', status: 'Đang diễn ra', organizer: 'Name', startDate: '30/09/2024', endDate: '30/10/2024', payment: 'Đã thanh toán' },
        { name: 'Cuộc thi 2', status: 'Sắp diễn ra', organizer: 'Name', startDate: '30/09/2024', endDate: '30/10/2024', payment: 'Chưa thanh toán' },
        { name: 'Cuộc thi 3', status: 'Đã kết thúc', organizer: 'Name', startDate: '30/09/2024', endDate: '30/10/2024', payment: 'Đã thanh toán' },
        { name: 'Cuộc thi 4', status: 'Đã kết thúc', organizer: 'Name', startDate: '30/09/2024', endDate: '30/10/2024', payment: 'Chưa thanh toán' },
        { name: 'Cuộc thi 5', status: 'Đã kết thúc', organizer: 'Name', startDate: '30/09/2024', endDate: '30/10/2024', payment: 'Đã thanh toán' },
        { name: 'Cuộc thi 6', status: 'Đang diễn ra', organizer: 'Name', startDate: '30/09/2024', endDate: '30/10/2024', payment: 'Chưa thanh toán' },
        { name: 'Cuộc thi 7', status: 'Đang diễn ra', organizer: 'Name', startDate: '30/09/2024', endDate: '30/10/2024', payment: 'Đã thanh toán' },
        { name: 'Cuộc thi 8', status: 'Sắp diễn ra', organizer: 'Name', startDate: '30/09/2024', endDate: '30/10/2024', payment: 'Chưa thanh toán' },
        { name: 'Cuộc thi 9', status: 'Không phê duyệt', organizer: 'Name', startDate: '30/09/2024', endDate: '30/10/2024', payment: 'Đã thanh toán' },
    ];

    const filteredData = data.filter(row => {
        const matchesSearchQuery = row.name.toLowerCase().includes(searchQuery);
        const matchesTabValue = tabValue === 0 || row.status === (tabValue === 1 ? 'Đang diễn ra' : tabValue === 2 ? 'Sắp diễn ra' : tabValue === 3 ? 'Đã kết thúc' : 'Không phê duyệt');
        return matchesSearchQuery && matchesTabValue;
    });

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', my: 4 }}>
            {/* Tabs */}
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
                                    fontSize: '16px',
                                    padding: '12px 24px',
                                },
                            },
                            width: 740,
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
                            height: '2px',
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
                        label="Không phê duyệt"
                        sx={tabTextStyle}
                        icon={<BlockRounded sx={tabIconStyle} />}
                        iconPosition='start'
                        disableRipple
                    />
                </Tabs>
            </Box>

            {/* Table */}
            <TableContainer sx={{ mt: 2, borderRadius: 1, border: `1px solid ${gray[200]}` }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ backgroundColor: black[50] }}>
                            <TableCell sx={headerCellStyle}>#</TableCell>
                            <TableCell sx={headerCellStyle}>Tên cuộc thi</TableCell>
                            <TableCell sx={headerCellStyle}>Trạng thái</TableCell>
                            <TableCell sx={headerCellStyle}>Ban tổ chức</TableCell>
                            <TableCell sx={headerCellStyle}>Thời gian bắt đầu</TableCell>
                            <TableCell sx={headerCellStyle}>Thời gian kết thúc</TableCell>
                            <TableCell sx={headerCellStyle}>Thanh toán</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ height: 400 }}>
                        {filteredData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <>
                                    <TableRow key={index} sx={{ height: 80 }}>
                                        <TableCell sx={bodyCellStyle}>{index + 1}</TableCell>
                                        <TableCell sx={bodyCellStyle}>{row.name}</TableCell>
                                        <TableCell sx={bodyCellStyle}>{row.status}</TableCell>
                                        <TableCell sx={bodyCellStyle}>{row.organizer}</TableCell>
                                        <TableCell sx={bodyCellStyle}>{row.startDate}</TableCell>
                                        <TableCell sx={bodyCellStyle}>{row.endDate}</TableCell>
                                        <TableCell sx={bodyCellStyle}>{row.payment}</TableCell>
                                        <TableCell align="center">
                                            <IconButton>
                                                <MoreVertIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                    {index !== rowsPerPage - 1 && (
                                        <TableRow sx={{ margin: 0, padding: 0 }}>
                                            <TableCell colSpan={8} sx={{ margin: 0, padding: 0 }}>
                                                <Divider sx={{ margin: 0, padding: 0, backgroundColor: gray[200], height: 1 }} />
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination */}
            <TablePagination
                rowsPerPageOptions={[5]}
                component="div"
                count={filteredData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
};

export default ContestsTable;
