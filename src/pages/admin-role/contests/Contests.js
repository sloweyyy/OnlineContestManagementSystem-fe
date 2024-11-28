import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { Notifications } from '@mui/icons-material';
import { black, red, white } from '../../../config/theme/themePrintives';
import ContestsTable from '../../../components/admin-contests/ContestsTable';
import AnalyticsSection from '../../../components/admin-dashboard/AnalyticsSection';

const Contests = () => {
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

            {/* Contests Table */}
            <ContestsTable />
        </Box>
    )
}

export default Contests