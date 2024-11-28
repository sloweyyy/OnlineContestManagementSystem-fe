import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import AnalyticsBox from './AnalyticsBox';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContestStatistics, fetchRegistrationStatistics } from '../../stores/actions/StatisticsActions';

const AnalyticsSection = () => {
    const dispatch = useDispatch();
    const { contestStatistics, registrationStatistics } = useSelector(
        (state) => state.statistics
    );

    useEffect(() => {
        dispatch(fetchContestStatistics());
        dispatch(fetchRegistrationStatistics());
    }, [dispatch]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h4'>Thống kê hôm nay</Typography>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2, mt: 4 }}>
                <AnalyticsBox title='Doanh thu' value={10000000} growth={90} />
                <AnalyticsBox title='Cuộc thi' value={contestStatistics?.contestsToday} growth={contestStatistics?.contestsGrowthPercentage} />
                <AnalyticsBox title='Số lượng thí sinh' value={registrationStatistics?.registrationsToday} growth={registrationStatistics?.registrationsGrowthPercentage} />
            </Box>
        </Box>
    )
}

export default AnalyticsSection