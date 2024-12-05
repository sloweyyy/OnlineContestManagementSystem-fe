import React, { useEffect, useState } from "react";
import { Box, Typography, Skeleton } from "@mui/material";
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
import DashboardService from "../../services/dashboard.service";

const RevenueTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await DashboardService.getMonthlyRevenue();
            setData(response);
            setLoading(false);
        };

        fetchData();
    }, []);

    const formatValue = (value) => {
        if (value >= 1_000_000_000) {
            return `${(value / 1_000_000_000)} tỉ`;
        } else if (value >= 1_000_000) {
            return `${(value / 1_000_000)} triệu`;
        } else if (value >= 1_000) {
            return `${(value / 1_000)} ngàn`;
        }
        return `${value}`;
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", mt: 8, width: "100%" }}>
            <Typography variant="h4" sx={{ mb: 4, textAlign: "left" }}>
                Doanh thu
            </Typography>
            <Box sx={{ flexGrow: 1, width: "100%", height: 400 }}>
                {loading ? (
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <Skeleton variant="rectangular" width="100%" height={40} />
                        <Skeleton variant="rectangular" width="100%" height="70%" />
                        <Skeleton variant="rectangular" width="100%" height={30} />
                    </Box>
                ) : (
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={data}
                            margin={{ top: 10, right: 40, left: 40, bottom: 10 }}
                        >
                            <defs>
                                <linearGradient
                                    id="lastYearGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor={black[900]}
                                        stopOpacity={0.4}
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor={black[900]}
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                                <linearGradient
                                    id="thisYearGradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor={red[500]}
                                        stopOpacity={0.4}
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor={red[500]}
                                        stopOpacity={0}
                                    />
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
                                tick={{ dx: -8, fill: black[900] }}
                                fontSize={16}
                                fontWeight={500}
                                stroke={black[900]}
                                tickLine={{ stroke: black[900], strokeWidth: 1 }}
                                tickFormatter={formatValue}
                            />
                            <Tooltip
                                cursor={{ stroke: black[900], strokeWidth: 1 }}
                                contentStyle={{
                                    backgroundColor: white[50],
                                    color: black[900],
                                    gap: 8,
                                }}
                                labelStyle={{ fontSize: "18px", fontWeight: 600 }}
                                itemStyle={{ fontSize: "16px", fontWeight: 500 }}
                                labelFormatter={(value) =>
                                    `Doanh thu ${value.toLowerCase()}`
                                }
                                formatter={(value) => formatValue(value)}
                            />
                            <Legend
                                verticalAlign="middle"
                                align="right"
                                iconType="plainline"
                                layout="vertical"
                                wrapperStyle={{
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    paddingLeft: "16px",
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
                )}
            </Box>
        </Box>
    );
};

export default RevenueTable;