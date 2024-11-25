import { ArrowForwardIosRounded } from '@mui/icons-material';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { black, gray, red, white } from '../../config/theme/themePrintives';

const RecentContestsCard = ({ contests }) => {
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
                    href='/participant/search'
                >
                    <Typography sx={{ fontSize: 14 }}>Xem tất cả</Typography>
                    <ArrowForwardIosRounded sx={{ fontSize: 14 }} />
                </Button>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: 2,
                }}
            >
                {contests && contests?.length > 0 && (
                    <Card
                        sx={{
                            flex: 1,
                            height: '100%',
                            boxShadow: 'none',
                            bgcolor: 'transparent',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            borderRadius: '8px'
                        }}
                    >
                        <CardActionArea
                            disableRipple
                            href={`/participant/detail-contest?id=${contests[0]?.id}`}
                            sx={{
                                height: '100%',
                                flexDirection: 'column',
                                display: 'flex',
                                alignItems: 'stretch',
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={contests[0]?.imageUrl}
                                alt={contests[0]?.name || 'Hình ảnh cuộc thi'}
                                sx={{
                                    borderRadius: '8px 8px 0 0',
                                    width: '100%',
                                    height: 230,
                                    objectFit: 'cover',
                                }}
                            />
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    borderRadius: '0 0 8px 8px',
                                }}
                            >
                                <Typography
                                    sx={{
                                        display: '-webkit-box',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 2,
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: black[900],
                                    }}
                                >
                                    {contests[0]?.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: 500,
                                        color: gray[500],
                                        marginTop: 1,
                                    }}
                                >
                                    Bắt đầu: {new Date(contests[0]?.startDate).toLocaleDateString('vi-VN')}
                                </Typography>
                                <Box
                                    sx={{
                                        marginTop: 2,
                                        padding: '8px',
                                        backgroundColor: red[500],
                                        color: white[50],
                                        borderRadius: '8px',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography fontWeight={'bold'} fontSize={14}>
                                        {contests[0]?.organizationInformation?.orgName || 'Tổ chức không xác định'}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )}

                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    {contests?.slice(1).map((contest, index) => (
                        <Card key={contest?.id} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                            <CardActionArea
                                disableRipple
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    gap: 2,
                                }}
                                href={`/participant/detail-contest?id=${contest?.id}`}
                            >
                                <CardMedia
                                    component="img"
                                    height={80}
                                    image={contest?.imageUrl}
                                    alt={contest?.name}
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
                                        {contest?.name}
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
                                        Bắt đầu: {new Date(contest?.startDate).toLocaleString('vi-VN')}
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
