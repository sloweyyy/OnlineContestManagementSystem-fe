import React from 'react';
import { Box } from '@mui/material';
import {
    black,
    yellow,
    gray
} from '../../config/theme/themePrintives';

const RankCard = ({ index, participant }) => {
    let bgColor;
    let backgroundImage;

    switch (index) {
        case 1:
            bgColor = yellow[100];
            backgroundImage = `url(${require('../../assets/gold.svg').default})`;
            break;
        case 2:
            bgColor = yellow[50];
            backgroundImage = `url(${require('../../assets/silver.svg').default})`;
            break;
        case 3:
            bgColor = gray[100];
            backgroundImage = `url(${require('../../assets/brown.svg').default})`;
            break;
        default:
            bgColor = gray[50];
            backgroundImage = 'none';
            break;
    }

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 2,
                bgcolor: bgColor,
                paddingY: 2,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* Rank Icon */}
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="40px"
                height="40px"
                color={black[900]}
                fontSize={20}
                marginLeft={4}
                sx={{
                    backgroundImage: backgroundImage,
                    backgroundSize: 'cover',
                    display: backgroundImage !== 'none' ? 'flex' : 'none',
                }}
            >
                {index}
            </Box>

            {/* Participant Name */}
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="60%"
                height="100%"
                borderRadius={2}
                fontSize={18}
                fontWeight={500}
                color={black[700]}
            >
                {participant?.name || 'N/A'}
            </Box>
        </Box>
    );
};

export default RankCard;
