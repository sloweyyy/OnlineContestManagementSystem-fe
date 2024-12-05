import { Box, Typography, Skeleton } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { black, red, white } from '../../config/theme/themePrintives';
import DashboardService from '../../services/dashboard.service';

const ContestStatisticsChart = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await DashboardService.getQuarterlyContestCounts();
            setData(response);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", height: '100%', justifyContent: 'center' }}>
            {/* Title */}
            <Typography variant="h4" sx={{ mb: 4, textAlign: "left" }}>
                Thống kê cuộc thi
            </Typography>

            {/* Content */}
            <Box sx={{ flexGrow: 1, width: "100%", height: 400 }}>
                {loading ? (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            height: '100%',
                        }}
                    >
                        <Skeleton
                            variant="rectangular"
                            width="80%"
                            height={40}
                            sx={{ mb: 2 }}
                        />
                        <Skeleton
                            variant="rectangular"
                            width="80%"
                            height="60%"
                            sx={{ mb: 2 }}
                        />
                        <Skeleton
                            variant="text"
                            width="80%"
                            height={20}
                        />
                    </Box>
                ) : (
                    <ResponsiveContainer width="100%">
                        <BarChart
                            data={data}
                            margin={{ top: 10, right: 40, left: 40, bottom: 10 }}
                        >
                            <XAxis
                                dataKey="quarter"
                                tick={{ dy: 8, fill: black[900] }}
                                padding={{ left: 0, right: 16 }}
                                fontSize={16}
                                fontWeight={600}
                                tickLine={{ stroke: black[900], strokeWidth: 1 }}
                            />
                            <YAxis
                                tick={{ dx: -8, fill: black[900] }}
                                fontSize={16}
                                fontWeight={600}
                                tickLine={{ stroke: black[900], strokeWidth: 1 }}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: white[50],
                                    color: black[900],
                                    gap: 8,
                                }}
                                labelStyle={{ fontSize: '18px', fontWeight: 600 }}
                                itemStyle={{
                                    fontSize: '16px',
                                    fontWeight: 500,
                                    color: black[900],
                                }}
                                labelFormatter={(value) => `${value}`}
                                formatter={(value) => `${value} cuộc thi`}
                            />
                            <Legend
                                verticalAlign="bottom"
                                align="center"
                                iconType="square"
                                layout="horizontal"
                                wrapperStyle={{
                                    fontSize: '16px',
                                    fontWeight: 500,
                                    paddingTop: '32px',
                                    marginRight: '16px',
                                }}
                                formatter={(value) => (
                                    <span
                                        style={{ color: black[900], fontWeight: 500 }}
                                    >
                                        {value}
                                    </span>
                                )}
                            />
                            <Bar
                                dataKey="onBoarding"
                                fill={black[900]}
                                name={"Đang diễn ra"}
                            />
                            <Bar
                                dataKey="comingSoon"
                                fill={red[500]}
                                name={"Sắp diễn ra"}
                            />
                            <Bar
                                dataKey="ended"
                                fill={'#F6D7DF'}
                                name={"Đã kết thúc"}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                )}
            </Box>
        </Box>
    );
};

export default ContestStatisticsChart;