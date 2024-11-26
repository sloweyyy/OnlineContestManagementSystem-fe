import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider } from '@mui/material';
import React from 'react';

const FeaturedContestTable = () => {
    const data = [
        { index: 1, name: 'Cuộc thi 1', numberOfParticipants: 1000, status: 'Đang diễn ra' },
        { index: 2, name: 'Cuộc thi 2', numberOfParticipants: 2000, status: 'Sắp diễn ra' },
        { index: 3, name: 'Cuộc thi 3', numberOfParticipants: 3000, status: 'Đã kết thúc' },
    ];

    return (
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", height: 400, justifyContent: 'center' }}>
            {/* Title */}
            <Typography variant="h4" sx={{ mb: 4, textAlign: "left" }}>
                Cuộc thi nổi bật
            </Typography>

            {/* Table */}
            <Box sx={{ flexGrow: 1, width: "100%", height: 400 }}>
                <TableContainer>
                    <Table aria-label="featured contest table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontSize: 18, fontWeight: 600 }}>#</TableCell>
                                <TableCell sx={{ fontSize: 16, fontWeight: 600 }}>Tên cuộc thi</TableCell>
                                <TableCell sx={{ fontSize: 16, fontWeight: 600 }}>Số lượng thí sinh</TableCell>
                                <TableCell sx={{ fontSize: 16, fontWeight: 600 }}>Trạng thái</TableCell>
                            </TableRow>
                            <TableRow sx={{ margin: 0, padding: 0 }}>
                                <TableCell colSpan={4} sx={{ margin: 0, padding: 0 }}>
                                    <Divider sx={{ margin: 0, padding: 0 }} />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((contest) => (
                                <React.Fragment key={contest.index}>
                                    <TableRow>
                                        <TableCell>{contest.index}</TableCell>
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
