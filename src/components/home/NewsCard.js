import { Box, Typography } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const NewsCard = ({ news }) => {
    const newsData = news || [
        {
            title: 'HEHE Thi Ảnh /Video Clip Trực Tuyến – Giải Pháp Tuyên Truyền Mới 2025',
            image: 'https://picsum.photos/200/300',
        },
        {
            title: 'HAHA Thi Ảnh /Video Clip Trực Tuyến – Giải Pháp Tuyên Truyền Mới 2025',
            image: 'https://picsum.photos/200/300',
        },
        {
            title: 'HOHO Thi Ảnh /Video Clip Trực Tuyến – Giải Pháp Tuyên Truyền Mới 2025',
            image: 'https://picsum.photos/200/300',
        },
        {
            title: 'HIHI Thi Ảnh /Video Clip Trực Tuyến – Giải Pháp Tuyên Truyền Mới 2025',
            image: 'https://picsum.photos/200/300',
        },
    ];

    return (
        <Box
            sx={{
                borderRadius: '12px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                padding: 2,
                width: '20vw',
                overflow: 'hidden',
            }}
        >
            <Typography sx={{ fontSize: 18, fontWeight: 600, paddingBottom: 2 }}>Tin tức mới</Typography>
            <Swiper loop={true}>
                {newsData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{ width: '90%', height: '150px', borderRadius: 2 }}
                            />
                            <Typography
                                sx={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 2,
                                    fontSize: 16,
                                    fontWeight: 600,
                                    textAlign: 'center',
                                    marginTop: 1,
                                }}
                            >
                                {item.title}
                            </Typography>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default NewsCard;
