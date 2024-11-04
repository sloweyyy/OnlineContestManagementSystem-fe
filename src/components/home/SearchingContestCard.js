import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'
import { gray } from '../../config/theme/themePrintives';

const SearchingContestCard = ({ contest }) => {
    return (
        <Card sx={{ width: '49%', display: 'flex', flexDirection: 'row' }}>
            {/* Image Section (40%) */}
            <CardActionArea disableRipple href='/detail-contest' sx={{ width: '40%', height: 200 }}>
                <CardMedia
                    component="img"
                    image={contest.image}
                    alt={contest.title}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </CardActionArea>

            <CardContent sx={{ width: '60%', paddingLeft: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                {/* Title */}
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                        textOverflow: 'ellipsis',
                    }}
                >
                    {contest.title}
                </Typography>
                {/* Start Time */}
                <Typography
                    variant="body2"
                    color={gray[900]}
                    gutterBottom
                    sx={{
                        width: '100%',
                        textAlign: 'flex-start',
                    }}
                >
                    Bắt đầu: {contest.timeStart}
                </Typography>
                {/* End Time */}
                <Typography
                    variant="body2"
                    color={gray[900]}
                    gutterBottom
                    sx={{
                        width: '100%',
                        textAlign: 'flex-start',
                    }}
                >
                    Kết thúc: {contest.timeEnd}
                </Typography>
                {/* Organizer */}
                <Typography
                    variant="body2"
                    color={gray[900]}
                    fontWeight={600}
                    textTransform={'uppercase'}
                    sx={{
                        width: '100%',
                        textAlign: 'flex-start',
                    }}
                >
                    {contest.organizers}
                </Typography>
            </CardContent>
        </Card >
    );
};

export default SearchingContestCard