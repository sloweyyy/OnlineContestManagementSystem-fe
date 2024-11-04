import { ArrowForwardIosRounded } from '@mui/icons-material';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { black, gray, red, white } from '../../config/theme/themePrintives';

const RecentContestsCard = ({ contests }) => {
    const contestData = [
        {
            title: 'Cuộc thi video clip “Việt Nam hạnh phúc - Happy Vietnam 2024" 1',
            time: '10:00 ngày 10/10/2021',
            organizers: 'Cục Thông Tin Đối Ngoại 1',
            image: 'https://picsum.photos/200/300',
        },
        {
            title: 'Cuộc thi video clip “Việt Nam hạnh phúc - Happy Vietnam 2024" 2',
            time: '10:00 ngày 10/10/2021',
            organizers: 'Cục Thông Tin Đối Ngoại 2',
            image: 'https://picsum.photos/200/300',
        },
        {
            title: 'Cuộc thi video clip “Việt Nam hạnh phúc - Happy Vietnam 2024" 3',
            time: '10:00 ngày 10/10/2021',
            organizers: 'Cục Thông Tin Đối Ngoại 3',
            image: 'https://picsum.photos/200/300',
        },
        {
            title: 'Cuộc thi video clip “Việt Nam hạnh phúc - Happy Vietnam 2024" 4',
            time: '10:00 ngày 10/10/2021',
            organizers: 'Cục Thông Tin Đối Ngoại 4',
            image: 'https://picsum.photos/200/300',
        },
        {
            title: 'Cuộc thi video clip “Việt Nam hạnh phúc - Happy Vietnam 2024" 5',
            time: '10:00 ngày 10/10/2021',
            organizers: 'Cục Thông Tin Đối Ngoại 5',
            image: 'https://picsum.photos/200/300',
        },
    ];

    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '24px',
                borderRadius: '12px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    marginBottom: 3
                }}
            >
                <Typography
                    sx={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                    }}
                >
                    Các cuộc thi gần đây
                </Typography>
                <Button
                    disableRipple
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: gray[500],
                        textTransform: 'none',
                        gap: 1,
                    }}
                    href='/search'
                >
                    <Typography sx={{ fontSize: 14 }}>Xem tất cả</Typography>
                    <ArrowForwardIosRounded sx={{ fontSize: 14 }} />
                </Button>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: 2,
                }}
            >
                {/* Main Card */}
                <Card sx={{ flex: 1, backgroundColor: 'transparent', boxShadow: 'none' }}>
                    <CardActionArea disableRipple href='/detail-contest'>
                        <CardMedia
                            component="img"
                            height="200"
                            image={contestData[0].image}
                            alt={contestData[0].title}
                            sx={{
                                borderRadius: '8px',
                            }}
                        />
                        <CardContent sx={{ padding: '16px' }}>
                            <Typography
                                sx={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 2,
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: black[900]
                                }}
                            >
                                {contestData[0].title}
                            </Typography>
                            <Typography sx={{ fontSize: 18, fontWeight: 500, width: '80%', color: gray[500] }}>
                                Bắt đầu: {contestData[0].time}
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 2,
                                    width: '100%',
                                    color: gray[500],
                                    backgroundColor: red[500],
                                    color: white[50],
                                    paddingY: '8px',
                                    marginTop: '16px',
                                    borderRadius: '8px',
                                }}
                            >
                                <Typography fontWeight={'bold'} fontSize={14}>{contestData[0].organizers}</Typography>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>

                {/* Remaining Cards */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    {contestData.slice(1).map((contest, index) => (
                        <Card key={index} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                            <CardActionArea
                                disableRipple
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    gap: 2,
                                }}
                                href='/detail-contest'
                            >
                                <CardMedia
                                    component="img"
                                    height={80}
                                    image={contest.image}
                                    alt={contest.title}
                                    sx={{
                                        width: '40%',
                                        borderRadius: '8px',
                                    }}
                                />
                                <CardContent
                                    sx={{
                                        flex: 1,
                                        padding: '8px 0px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            display: '-webkit-box',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                            fontSize: 16,
                                            fontWeight: 600,
                                        }}
                                    >
                                        {contest.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            display: '-webkit-box',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 1,
                                            fontSize: 12,
                                            fontWeight: 400,
                                            color: gray[500],
                                        }}
                                    >
                                        Bắt đầu: {contest.time}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default RecentContestsCard;
