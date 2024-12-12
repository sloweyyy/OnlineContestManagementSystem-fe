import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Divider,
    Skeleton,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { gray } from '../../config/theme/themePrintives';
import DashboardService from '../../services/dashboard.service';

const FeaturedContestTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await DashboardService.getFeaturedContests();
            setData(response);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", height: '100%', justifyContent: 'center' }}>
            {/* Title */}
            <Typography variant="h4" sx={{ mb: 6, textAlign: "left" }}>
                Cuộc thi nổi bật
            </Typography>

            {/* Table */}
            <Box sx={{ flexGrow: 1, width: "100%", height: 400 }}>
                {loading ? (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ bgcolor: gray[200] }}>
                                    {[1, 2, 3, 4].map((_, index) => (
                                        <TableCell
                                            key={index}
                                            sx={{ fontSize: 18, fontWeight: 600 }}
                                        >
                                            <Skeleton width="60%" />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <TableRow key={index}>
                                        {[1, 2, 3, 4].map((_, subIndex) => (
                                            <TableCell key={subIndex}>
                                                <Skeleton width="80%" />
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
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
                                {data?.map((contest) => (
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
                )}
            </Box>
        </Box>
    );
};

export default FeaturedContestTable;