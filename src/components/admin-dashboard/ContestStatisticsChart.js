import { Box, Typography } from '@mui/material'
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { black, red, white } from '../../config/theme/themePrintives'

const ContestStatisticsChart = () => {
    const data = [
        { quarter: 'Quý 1', onBoarding: 18, comingSoon: 10, ended: 5 },
        { quarter: 'Quý 2', onBoarding: 20, comingSoon: 15, ended: 8 },
        { quarter: 'Quý 3', onBoarding: 25, comingSoon: 20, ended: 10 },
        { quarter: 'Quý 4', onBoarding: 30, comingSoon: 25, ended: 15 },
    ];

    return (
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", height: 400 }}>
            {/* Title */}
            <Typography variant="h4" sx={{ mb: 4, textAlign: "left" }}>
                Thống kê cuộc thi
            </Typography>

            {/* Bar Chart */}
            <Box sx={{ flexGrow: 1, width: "100%", height: 400 }}>
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
                        />
                        <YAxis
                            tick={{ dx: -8, fill: black[900] }}
                            fontSize={16}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: black[900], color: white[50] }}
                            labelStyle={{ fontSize: '16px', fontWeight: 500 }}
                            itemStyle={{ fontSize: '16px', fontWeight: 500, color: white[50] }}
                            labelFormatter={(value) => `Quý ${value}`}
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
                                paddingTop: '16px',
                                marginRight: '16px',
                            }}
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
            </Box>
        </Box>
    )
}

export default ContestStatisticsChart