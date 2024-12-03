import React from 'react';
import { Box, Typography } from '@mui/material';
import { white, red, gray } from '../../config/theme/themePrintives';

const CountdownBox = ({ value, index }) => {
    const label = index === 0 ? 'Ngày' : index === 1 ? 'Giờ' : index === 2 ? 'Phút' : 'Giây';

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100px"
            height="100px"
            bgcolor={white[100]}
            borderRadius={2}
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
        >
            <Typography fontWeight={600} fontSize={36} color={red[500]}>
                {value}
            </Typography>
            <Typography fontWeight={400} fontSize={18} color={gray[500]}>
                {label}
            </Typography>
        </Box>
    );
};

export default CountdownBox;
