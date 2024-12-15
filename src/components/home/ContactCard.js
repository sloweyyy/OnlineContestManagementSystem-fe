import { Chat, Email, Phone } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { blue, gray, red, yellow } from '../../config/theme/themePrintives';
import { keyframes } from '@emotion/react';

const floatAnimation = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0); }
`;

const ContactCard = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start',
                borderRadius: '12px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                paddingX: 2,
                paddingY: 4,
                overflow: 'hidden',
                gap: 2
            }}
        >
            {/* Hotline Section */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1
                }}
            >
                <Phone sx={{
                    backgroundColor: blue[50],
                    color: blue[500],
                    padding: 1,
                    borderRadius: 10,
                    animation: `${floatAnimation} 2s ease-in-out infinite` // Thêm animation cho icon
                }} />
                <Typography sx={{ fontSize: 16, fontWeight: 600, color: gray[500] }}>Hotline</Typography>
                <Typography sx={{ fontSize: 12, fontWeight: 600 }}>0123456789</Typography>
            </Box>

            {/* Feedback Section */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1
                }}
            >
                <Email sx={{
                    backgroundColor: red[50],
                    color: red[500],
                    padding: 1,
                    borderRadius: 10,
                    animation: `${floatAnimation} 2s ease-in-out infinite`
                }} />
                <Typography sx={{ fontSize: 16, fontWeight: 600, color: gray[500] }}>Góp ý</Typography>
                <Typography sx={{ fontSize: 12, fontWeight: 600 }}>cho Eventis</Typography>
            </Box>

            {/* Chat Section */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1
                }}
            >
                <Chat sx={{
                    backgroundColor: yellow[50],
                    color: yellow[500],
                    padding: 1,
                    borderRadius: 10,
                    animation: `${floatAnimation} 2s ease-in-out infinite`
                }} />
                <Typography sx={{ fontSize: 16, fontWeight: 600, color: gray[500] }}>Chat</Typography>
                <Typography sx={{ fontSize: 12, fontWeight: 600 }}>với Admin</Typography>
            </Box>
        </Box>
    );
};

export default ContactCard;
