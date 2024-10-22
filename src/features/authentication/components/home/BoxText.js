import { CheckCircleRounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { red } from '../../../../config/theme/themePrintives';

const BoxText = ({ text }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginY: '5px',
                gap: 1,
            }}
        >
            <CheckCircleRounded sx={{ fontSize: 18, color: red[500] }} />
            <Typography sx={{ fontSize: 14 }}>{text}</Typography>
        </Box>
    );
};

export default BoxText;
