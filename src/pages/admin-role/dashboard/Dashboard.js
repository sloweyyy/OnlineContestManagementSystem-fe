import { Box, Typography, IconButton } from '@mui/material'
import { Notifications } from '@mui/icons-material';
import React from 'react'
import { black, red, white } from '../../../config/theme/themePrintives';
import AnalyticsBox from '../../../components/admin-dashboard/AnalyticsBox';
import RevenueTable from '../../../components/admin-dashboard/RevenueTable';
import ContestStatisticsChart from '../../../components/admin-dashboard/ContestStatisticsChart';
import FeaturedContestTable from '../../../components/admin-dashboard/FeaturedContestTable';

const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
            {/* Title and Notification Icon Button */}
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <IconButton size='small' sx={{ color: black[900], ":hover": { color: white[50], bgcolor: red[500] } }}>
                    <Notifications />
                </IconButton>
            </Box>

            {/* Analytics */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h4' >Thống kê hôm nay</Typography>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2, mt: 4 }}>
                    <AnalyticsBox title='Doanh thu' value='1.000.000' growth='100' />
                    <AnalyticsBox title='Cuộc thi' value='100' growth='-100' />
                    <AnalyticsBox title='Số lượng thí sinh' value='1.000' growth='100' />
                </Box>
            </Box>

            {/* Revenue Table */}
            <RevenueTable />

            {/* Contest Analytics */}
            <Box sx={{ display: "flex", flexDirection: "row", width: "100%", mt: 4 }}>
                <ContestStatisticsChart />
                <FeaturedContestTable />
            </Box>
        </Box>
    )
}

export default Dashboard