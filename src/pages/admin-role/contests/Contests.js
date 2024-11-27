import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { Notifications } from '@mui/icons-material';
import { black, red, white } from '../../../config/theme/themePrintives';
import AnalyticsBox from '../../../components/admin-dashboard/AnalyticsBox';
import ContestsTable from '../../../components/admin-contests/ContestsTable';

const Contests = () => {
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
                <Typography variant='h4'>Quản lý cuộc thi</Typography>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2, mt: 4 }}>
                    <AnalyticsBox title='Doanh thu' value='1.000.000' growth='100' />
                    <AnalyticsBox title='Cuộc thi' value='100' growth='-100' />
                    <AnalyticsBox title='Số lượng thí sinh' value='1.000' growth='100' />
                </Box>
            </Box>

            {/* Contests Table */}
            <ContestsTable />
        </Box>
    )
}

export default Contests