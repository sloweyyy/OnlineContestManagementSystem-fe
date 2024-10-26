import { Box, Typography } from '@mui/material';
import React from 'react';
import { gray, red } from '../../config/theme/themePrintives';

const ClientCard = ({ image, name, description, reverse }) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection={reverse ? 'row-reverse' : 'row'}
            marginTop={2}
        >
            {/* Image Section */}
            <Box
                sx={{
                    flex: 1.5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    src={image}
                    alt="Client"
                    width={'60%'}
                />
            </Box>

            {/* Text Section */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    mr: reverse ? 0 : 5,
                    ml: reverse ? 5 : 0,
                }}
            >
                <Typography variant="h2" fontWeight="bold" color={red[500]}>
                    {name}
                </Typography>
                <Typography variant="body1" color={gray[400]} sx={{ mt: 2 }}>
                    {description}
                </Typography>
            </Box>
        </Box>
    );
};

export default ClientCard;
