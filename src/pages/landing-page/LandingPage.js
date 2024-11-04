import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { black, blue, brown, gray, green, primary, red, white, yellow } from '../../config/theme/themePrintives';
import ClientCard from '../../components/landing-page/ClientCard';
import FAQ from '../../components/landing-page/FAQ';
import ReviewsSection from '../../components/landing-page/ReviewsSection';
import SubscribeSection from '../../components/landing-page/SubscribeSection';
import { Circle } from '@mui/icons-material';

const LandingPage = () => {
    return (
        <Box flex={1}>
            <Box display="flex" flexDirection={'row'} justifyContent="center" alignItems="center" height="90vh" paddingX={10}>
                {/* Text Section */}
                <Box flex={1} display="flex" flexDirection={'column'} justifyContent="center" alignItems="flex-start" height='100%'>
                    <Typography variant="h1">Kontext</Typography>
                    <Typography variant="h1" color={red[500]}>Cuộc thi trực tuyến</Typography>
                    <Button
                        sx={{
                            textTransform: 'none',
                            backgroundColor: red[500],
                            color: 'white',
                            borderRadius: 20,
                            padding: '10px 20px',
                            marginTop: 6,
                            '&:hover': {
                                backgroundColor: red[300],
                            },
                            fontWeight: 'bold',
                            fontSize: 16,
                            boxShadow: `0px 6px 6px ${gray[300]}`,
                        }}
                        href='/sign-up'
                    >
                        Trãi nghiệm ngay
                    </Button>
                </Box>
                {/* SVG Section */}
                <Box flex={1}>
                    <img
                        src={require('../../assets/landing-page.png')}
                        alt="Landing Page"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>
            </Box>

            <Box flex={1} display="flex" flexDirection={'column'} justifyContent="center" alignItems="center" marginBottom={6}>
                <Typography flex={1} fontSize={50} fontWeight={600} color={red[500]}>
                    Khách hàng của chúng tôi
                </Typography>
                <Typography flex={1} fontSize={16} fontWeight={400} color={gray[400]} marginTop={2}>
                    Chúng tôi đã phục vụ hàng trăm khách hàng trên toàn quốc, hãy cùng xem họ nói gì về chúng tôi
                </Typography>
                <Box
                    flex={3}
                    display="flex"
                    flexDirection={'row'}
                    justifyContent="center"
                    alignItems="center"
                    width={'100%'}
                    gap={4}
                    marginTop={12}
                >
                    <Circle sx={{ color: red[500], fontSize: 60 }} />
                    <Circle sx={{ color: gray[400], fontSize: 60 }} />
                    <Circle sx={{ color: yellow[400], fontSize: 60 }} />

                    <Circle sx={{ color: brown[400], fontSize: 60 }} />
                    <Circle sx={{ color: green[400], fontSize: 60 }} />
                    <Circle sx={{ color: black[400], fontSize: 60 }} />

                    <Circle sx={{ color: blue[400], fontSize: 60 }} />
                    <Circle sx={{ color: primary[400], fontSize: 60 }} />
                    <Circle sx={{ color: gray[400], fontSize: 60 }} />
                </Box>
            </Box>

            {/* Customer Section */}
            <Box flex={1} display="flex" flexDirection={'column'} justifyContent="center" alignItems="center" padding={6}>
                <Typography fontSize={50} fontWeight={600} color={red[500]}>
                    Tạo cuộc thi trực tuyến
                </Typography>
                <Typography fontSize={16} fontWeight={400} color={gray[400]} marginTop={2} marginBottom={6}>
                    Cá nhân và tổ chức có thể tạo cuộc thi trực tuyến một cách dễ dàng và nhanh chóng với Kontext
                </Typography>

                {/* Client Cards */}
                <ClientCard
                    image={require('../../assets/landingpage-1.png')}
                    name="Tổ chức thành viên"
                    description="Tổ chức thành viên là một tổ chức hoặc công ty có nhu cầu tìm kiếm những giải pháp tốt nhất cho việc tổ chức các cuộc thi trực tuyến."
                />

                <ClientCard
                    image={require('../../assets/landingpage-2.png')}
                    name="Trường học và đào tạo"
                    description="Trường học và đào tạo là những đơn vị giáo dục có nhu cầu triển khai các cuộc thi trực tuyến để nâng cao trải nghiệm học tập và phát hiện tài năng."
                    reverse
                />

                <ClientCard
                    image={require('../../assets/landingpage-3.png')}
                    name="Câu lạc bộ và nhóm"
                    description="Câu lạc bộ và nhóm là các tổ chức nhỏ hoặc cộng đồng có mong muốn tổ chức các cuộc thi trực tuyến để gắn kết và phát triển kỹ năng cho thành viên."
                />
            </Box>
            {/* FAQ Section */}
            <Box flex={1} display="flex" flexDirection={'column'} justifyContent="center" alignItems="center" bgcolor={red[500]}>
                <FAQ />
            </Box>
            {/* Reiviews Section */}
            <Box flex={1} display="flex" flexDirection={'column'} justifyContent="flex-start" alignItems="center" padding={6} marginBottom={18} height={'85vh'}>
                <ReviewsSection />
                <SubscribeSection />
            </Box>
        </Box>
    )
}

export default LandingPage