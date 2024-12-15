import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Typography, Skeleton } from '@mui/material';
import React from 'react';
import { gray } from '../../config/theme/themePrintives';

const SearchingContestCard = ({ contest, isLoading }) => {
    return (
        <Card sx={{ width: '49%', display: 'flex', flexDirection: 'row' }}>
            {/* Image Section (40%) */}
            <CardActionArea disableRipple href={contest?.id ? `/participant/detail-contest?id=${contest?.id}` : '#'} sx={{ width: '40%', height: 200 }}>
                {isLoading ? (
                    <Skeleton variant="rectangular" width="100%" height="100%" />
                ) : (
                    <CardMedia
                        component="img"
                        image={contest?.imageUrl}
                        alt={contest?.name}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                )}
            </CardActionArea>

            <CardContent sx={{ width: '60%', paddingLeft: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', bgcolor: gray[100] }}>
                {/* Title */}
                {isLoading ? (
                    <Skeleton variant="text" width="80%" height={30} />
                ) : (
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
                        {contest?.name}
                    </Typography>
                )}
                {/* Start Time */}
                {isLoading ? (
                    <Skeleton variant="text" width="40%" height={20} />
                ) : (
                    <Typography
                        variant="body2"
                        color={gray[900]}
                        gutterBottom
                        sx={{
                            width: '100%',
                            textAlign: 'flex-start',
                        }}
                    >
                        Bắt đầu: {new Date(contest?.startDate).toLocaleString("vi-VN")}
                    </Typography>
                )}
                {/* End Time */}
                {isLoading ? (
                    <Skeleton variant="text" width="40%" height={20} />
                ) : (
                    <Typography
                        variant="body2"
                        color={gray[900]}
                        gutterBottom
                        sx={{
                            width: '100%',
                            textAlign: 'flex-start',
                        }}
                    >
                        Kết thúc: {new Date(contest?.endDate).toLocaleString("vi-VN")}
                    </Typography>
                )}
                {/* Organizer */}
                {isLoading ? (
                    <Skeleton variant="text" width="60%" height={20} />
                ) : (
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
                        {contest?.organizationInformation?.orgName}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default SearchingContestCard;
