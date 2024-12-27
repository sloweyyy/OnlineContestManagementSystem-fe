import { Box, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { gray, red, white } from '../../config/theme/themePrintives'
import ReviewCard from './ReviewCard';
import { ArrowBackRounded, ArrowForwardRounded } from '@mui/icons-material';

const reviews = [
    {
        user: {
            name: 'Nguyễn Quốc Thắng',
            address: 'Bình Thuận',
            avatar: ''
        },
        review: 'Dịch vụ tuyệt vời, rất hài lòng với chất lượng và giá cả.'
    },
    {
        user: {
            name: 'Trương Lê Vĩnh Phúc',
            address: 'Thành phố Hồ Chí Minh',
            avatar: ''
        },
        review: 'Dịch vụ rất tốt, nhân viên thân thiện, giá cả hợp lý.'
    },
    {
        user: {
            name: 'Nguyễn Việt Khoa',
            address: 'Bình Dương',
            avatar: ''
        },
        review: 'Dịch vụ chuyên nghiệp, giá cả phải chăng, rất hài lòng.'
    },
    {
        user: {
            name: 'Nguyễn Thị Thanh Hương',
            address: 'Hà Nội',
            avatar: ''
        },
        review: 'Dịch vụ tuyệt vời, rất hài lòng với chất lượng và giá cả.'
    },
    {
        user: {
            name: 'Nguyễn Thành Tài',
            address: 'Tiền Giang',
            avatar: ''
        },
        review: 'Dịch vụ rất tốt, nhân viên thân thiện, giá cả hợp lý.'
    },
    {
        user: {
            name: 'Huỳnh Gia Bảo',
            address: 'Kiên Giang',
            avatar: ''
        },
        review: 'Dịch vụ chuyên nghiệp, giá cả phải chăng, rất hài lòng.'
    }
];

const ReviewsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const visibleReviews = reviews.slice(currentIndex, currentIndex + itemsPerPage);

    const handleNext = () => {
        if (currentIndex + itemsPerPage < reviews.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    return (
        <>
            <Typography fontSize={50} fontWeight={600} color={red[500]} textAlign="center">
                Được tin tưởng bởi hàng trăm <br />khách hàng vui vẻ
            </Typography>
            <Typography fontSize={16} fontWeight={400} color={gray[400]} marginTop={2} marginBottom={6} textAlign="center">
                Đây là những câu chuyện của khách hàng của chúng tôi, những người đã tham gia<br />cùng chúng tôi với niềm vui lớn khi dịch vụ của chúng tôi
            </Typography>
            <Box
                flex={1}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                gap={4}
            >
                {visibleReviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </Box>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-end"
                alignItems="center"
                marginTop={4}
                gap={3}
                width="100%"
            >
                <IconButton
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    sx={{
                        color: red[500],
                        border: 1,
                        borderRadius: 10,
                        padding: 1,
                        borderWidth: 2,
                        ":hover": {
                            backgroundColor: red[500],
                            color: white[50],
                            borderColor: red[500]
                        }
                    }}
                >
                    <ArrowBackRounded />
                </IconButton>
                <IconButton
                    onClick={handleNext}
                    disabled={currentIndex + itemsPerPage >= reviews.length}
                    sx={{
                        color: red[500],
                        border: 1,
                        borderRadius: 10,
                        padding: 1,
                        borderWidth: 2,
                        ":hover": {
                            backgroundColor: red[500],
                            color: white[50],
                            borderColor: red[500]
                        }
                    }}
                >
                    <ArrowForwardRounded />
                </IconButton>
            </Box>
        </>
    );
};

export default ReviewsSection