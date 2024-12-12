import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import NewsService from '../../services/news.service';

const NewsCard = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await NewsService.getAllNews();
                setNewsData(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

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
                {newsData?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img
                                src={item.imageUrl}
                                alt={item.name}
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
                                {item.name}
                            </Typography>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default NewsCard;