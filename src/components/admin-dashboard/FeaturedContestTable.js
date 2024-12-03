import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Divider } from '@mui/material';
import React from 'react';
import { gray } from '../../config/theme/themePrintives';

const FeaturedContestTable = () => {
    const data = [
        { index: 1, name: 'Cuộc thi 1', numberOfParticipants: 1000, status: 'Đang diễn ra' },
        { index: 2, name: 'Cuộc thi 2', numberOfParticipants: 2000, status: 'Sắp diễn ra' },
        { index: 3, name: 'Cuộc thi 3', numberOfParticipants: 3000, status: 'Đã kết thúc' },
        { index: 4, name: 'Cuộc thi 4', numberOfParticipants: 4000, status: 'Đang diễn ra' },
        { index: 5, name: 'Cuộc thi 5', numberOfParticipants: 5000, status: 'Sắp diễn ra' },
    ];

    return (
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", height: '100%', justifyContent: 'center' }}>
            {/* Title */}
            <Typography variant="h4" sx={{ mb: 4, textAlign: "left" }}>
                Cuộc thi nổi bật
            </Typography>

            {/* Table */}
            <Box sx={{ flexGrow: 1, width: "100%", height: 400 }}>
                <TableContainer>
                    <Table aria-label="featured contest table">
                        <TableHead>
                            <TableRow sx={{ bgcolor: gray[200] }}>
                                <TableCell sx={{ fontSize: 18, fontWeight: 600 }}>#</TableCell>
                                <TableCell sx={{ fontSize: 16, fontWeight: 600 }}>Tên cuộc thi</TableCell>
                                <TableCell sx={{ fontSize: 16, fontWeight: 600 }}>Số lượng thí sinh</TableCell>
                                <TableCell sx={{ fontSize: 16, fontWeight: 600 }}>Trạng thái</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((contest) => (
                                <React.Fragment key={contest.index}>
                                    <TableRow>
                                        <TableCell sx={{ fontSize: 18, fontWeight: 600 }}>{contest.index}</TableCell>
                                        <TableCell>{contest.name}</TableCell>
                                        <TableCell>{contest.numberOfParticipants}</TableCell>
                                        <TableCell>{contest.status}</TableCell>
                                    </TableRow>
                                    <TableRow sx={{ margin: 0, padding: 0 }}>
                                        <TableCell colSpan={4} sx={{ margin: 0, padding: 0 }}>
                                            <Divider sx={{ margin: 0, padding: 0 }} />
                                        </TableCell>
                                    </TableRow>
                                </React.Fragment>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

export default FeaturedContestTable;
