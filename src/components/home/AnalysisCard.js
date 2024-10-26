import { Box, Typography } from '@mui/material';
import React from 'react';
import CountUp from 'react-countup'; // Import CountUp
import { black, gray } from '../../config/theme/themePrintives';

const AnalysisCard = ({ title, count, icon, isContest = false }) => {
    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                padding: 4,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flex: 1,
                    gap: 1,
                }}
            >
                <Typography sx={{ fontSize: 14, fontWeight: 400, color: gray[500] }}>{title}</Typography>
                <Typography sx={{ fontSize: 18, fontWeight: 600, color: black[900] }}>
                    <CountUp end={count} duration={2} /> {isContest ? 'Cuộc thi' : 'Thí sinh'}
                </Typography>
            </Box>
            <Box>
                {icon}
            </Box>
        </Box>
    );
};

export default AnalysisCard;
