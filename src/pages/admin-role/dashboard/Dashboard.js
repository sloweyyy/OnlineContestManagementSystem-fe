import { Box, IconButton } from '@mui/material'
import { Notifications } from '@mui/icons-material';
import React from 'react'
import { black, red, white } from '../../../config/theme/themePrintives';
import RevenueTable from '../../../components/admin-dashboard/RevenueTable';
import ContestStatisticsChart from '../../../components/admin-dashboard/ContestStatisticsChart';
import FeaturedContestTable from '../../../components/admin-dashboard/FeaturedContestTable';
import AnalyticsSection from '../../../components/admin-dashboard/AnalyticsSection';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const { user } = useSelector(state => state.user)
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
            {/* Title and Notification Icon Button */}
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <IconButton size='small' sx={{ color: black[900], ":hover": { color: white[50], bgcolor: red[500] } }}>
                    <Notifications />
                </IconButton>
            </Box>

            {/* Analytics Section */}
            <AnalyticsSection />

            {/* Revenue Table */}
            <RevenueTable />

            {/* Contest Analytics */}
            <Box sx={{ display: "flex", flexDirection: "row", width: "100%", my: 8 }}>
                <ContestStatisticsChart />
                <FeaturedContestTable />
            </Box>
        </Box>
    )
}

export default Dashboard