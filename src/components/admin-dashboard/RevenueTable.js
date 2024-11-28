import React from "react";
import { Box, Typography } from "@mui/material";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { black, red, white } from "../../config/theme/themePrintives";

const data = [
    { month: "Tháng 1", lastYear: 20, thisYear: 10 },
    { month: "Tháng 2", lastYear: 25, thisYear: 15 },
    { month: "Tháng 3", lastYear: 18, thisYear: 12 },
    { month: "Tháng 4", lastYear: 23, thisYear: 14 },
    { month: "Tháng 5", lastYear: 19, thisYear: 13 },
    { month: "Tháng 6", lastYear: 22, thisYear: 16 },
    { month: "Tháng 7", lastYear: 27, thisYear: 18 },
    { month: "Tháng 8", lastYear: 30, thisYear: 20 },
    { month: "Tháng 9", lastYear: 25, thisYear: 15 },
    { month: "Tháng 10", lastYear: 35, thisYear: 25 },
    { month: "Tháng 11", lastYear: 25, thisYear: 15 },
    { month: "Tháng 12", lastYear: 40, thisYear: 30 },
];

const RevenueTable = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", mt: 8, width: "100%" }}>
            {/* Title */}
            <Typography variant="h4" sx={{ mb: 4, textAlign: "left" }}>
                Doanh thu
            </Typography>

            {/* Line Chart */}
            <Box sx={{ flexGrow: 1, width: "100%", height: 400 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 40, left: 40, bottom: 10 }}
                    >
                        <defs>
                            {/* Gradient for last year */}
                            <linearGradient id="lastYearGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={black[900]} stopOpacity={0.4} />
                                <stop offset="100%" stopColor={black[900]} stopOpacity={0} />
                            </linearGradient>
                            {/* Gradient for this year */}
                            <linearGradient id="thisYearGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={red[500]} stopOpacity={0.4} />
                                <stop offset="100%" stopColor={red[500]} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="month"
                            tick={{ dy: 8, fill: black[900] }}
                            fontSize={16}
                            fontWeight={500}
                            stroke={black[900]}
                            tickLine={{ stroke: black[900], strokeWidth: 1 }}
                        />
                        <YAxis
                            unit=" triệu"
                            tick={{ dx: -8, fill: black[900] }}
                            fontSize={16}
                            fontWeight={500}
                            stroke={black[900]}
                            tickLine={{ stroke: black[900], strokeWidth: 1 }}
                        />
                        <Tooltip
                            cursor={{ stroke: black[900], strokeWidth: 1 }}
                            contentStyle={{ backgroundColor: white[50], color: black[900], gap: 8 }}
                            labelStyle={{ fontSize: '18px', fontWeight: 600 }}
                            itemStyle={{ fontSize: '16px', fontWeight: 500 }}
                            labelFormatter={(value) => `Doanh thu ${value.toLowerCase()}`}
                            formatter={(value) => `${value} triệu`}
                        />
                        <Legend
                            verticalAlign="middle"
                            align="right"
                            iconType="plainline"
                            layout="vertical"
                            wrapperStyle={{
                                fontSize: '16px',
                                fontWeight: 500,
                                paddingLeft: '16px',
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="lastYear"
                            stroke={black[900]}
                            strokeWidth={2}
                            name="Năm trước"
                            fill="url(#lastYearGradient)"
                        />
                        <Area
                            type="monotone"
                            dataKey="thisYear"
                            stroke={red[500]}
                            strokeWidth={2}
                            name="Năm nay"
                            fill="url(#thisYearGradient)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </Box>
        </Box>
    );
};

export default RevenueTable;
