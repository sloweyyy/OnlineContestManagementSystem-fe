import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import { black, gray, red, white } from '../../config/theme/themePrintives'
import ReviewCard from './ReviewCard';
import { ArrowBackRounded, ArrowForwardRounded, Circle } from '@mui/icons-material';
import SubscribeSection from './SubscribeSection';

const ReviewsSection = () => {
    const reviews = [
        {
            user: {
                name: 'Nguyễn Văn A',
                address: 'Hà Nội',
                avatar: ''
            },
            review: 'Dịch vụ tuyệt vời, rất hài lòng với chất lượng và giá cả.'
        },
        {
            user: {
                name: 'Nguyễn Văn A',
                address: 'Hà Nội',
                avatar: ''
            },
            review: 'Dịch vụ tuyệt vời, rất hài lòng với chất lượng và giá cả.'
        },
        {
            user: {
                name: 'Nguyễn Văn A',
                address: 'Hà Nội',
                avatar: ''
            },
            review: 'Dịch vụ tuyệt vời, rất hài lòng với chất lượng và giá cả.'
        },
    ];
    return (
        <>
            <Typography fontSize={50} fontWeight={600} color={red[500]} textAlign={'center'}>
                Được tin tưởng bởi hàng trăm <br />khách hàng vui vẻ
            </Typography>
            <Typography fontSize={16} fontWeight={400} color={gray[400]} marginTop={2} marginBottom={6} textAlign={'center'}>
                Đây là những câu chuyện của khách hàng của chúng tôi, những người đã tham gia<br />cùng chúng tôi với niềm vui lớn khi dịch vụ của chúng tôi
            </Typography>
            <Box
                flex={3}
                display="flex"
                flexDirection={'row'}
                justifyContent="space-between"
                alignItems="center"
                width={'100%'}
            >
                {/* Client Cards */}
                {reviews.map((review, index) => <ReviewCard key={index} review={review} />)}
            </Box>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                marginTop={4}
                width={'100%'}
            >
                <Box display="flex" flexDirection="row">
                    <IconButton sx={{ color: gray[400], ":hover": { color: red[500] } }}>
                        <Circle sx={{ fontSize: 16, }} />
                    </IconButton>
                    <IconButton sx={{ color: gray[400], ":hover": { color: red[500] } }}>
                        <Circle sx={{ fontSize: 16 }} />
                    </IconButton>
                    <IconButton sx={{ color: gray[400], ":hover": { color: red[500] } }}>
                        <Circle sx={{ fontSize: 16 }} />
                    </IconButton>
                </Box>
                <Box display="flex" flexDirection="row" gap={2}>
                    <IconButton sx={{ color: red[500], border: 1, borderRadius: 10, padding: 1, borderWidth: 2, ":hover": { backgroundColor: red[500], color: white[50], borderColor: red[500] } }}>
                        <ArrowBackRounded />
                    </IconButton>
                    <IconButton sx={{ color: red[500], border: 1, borderRadius: 10, padding: 1, borderWidth: 2, ":hover": { backgroundColor: red[500], color: white[50], borderColor: red[500] } }}>
                        <ArrowForwardRounded />
                    </IconButton>
                </Box>
            </Box>
        </>
    )
}

export default ReviewsSection