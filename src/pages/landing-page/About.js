import { Box, Typography } from '@mui/material';
import React from 'react';
import { black, gray, red } from '../../config/theme/themePrintives';

const About = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: 20,
                }}
            >
                <Typography
                    sx={{
                        flex: 1,
                        color: black[600],
                        fontSize: 90,
                        lineHeight: '100px',
                        fontWeight: 600,
                        marginLeft: 5,
                    }}
                >
                    Giới
                    {" "}
                    <Box component="span" fontWeight="bold" color={red[500]}>
                        Thiệu
                    </Box>
                </Typography>
                <Box
                    flex={1.5}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <img
                        src={require('../../assets/about-us-1.png')}
                        alt='about'
                        style={{
                            width: '100%',
                            height: 350,
                            objectFit: 'cover',
                        }}
                    />
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    width: '100%',
                    height: '20vh',
                    marginTop: 20,
                }}
            >
                <Typography
                    sx={{
                        color: black[600],
                        fontSize: 35,
                        fontWeight: 600,
                        width: '60%',
                    }}
                >
                    Eventis
                    <Box component="span" color={red[500]}>
                        .
                    </Box>
                </Typography>
                <Typography
                    sx={{
                        color: black[400],
                        fontSize: 18,
                        fontWeight: 400,
                        width: '60%',
                    }}
                >
                    Eventis là nền tảng dành cho các cuộc thi trực tuyến, cho phép người dùng tham gia và tổ chức cuộc thi một cách đơn giản và dễ dàng. Sứ mệnh của chúng tôi là tạo ra một không gian để mọi người có thể phát triển kỹ năng, thể hiện tài năng và kết nối cộng đồng.
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: 20,
                }}
            >
                <Box
                    flex={1}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <img
                        src={require('../../assets/about-us-2.png')}
                        alt='about'
                        style={{
                            width: '100%',
                            height: 'fit-content',
                            objectFit: 'cover',
                        }}
                    />
                </Box>

                <Box
                    flex={1}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'flex-start'}
                    justifyContent={'center'}
                    marginLeft={5}
                >
                    <Typography
                        sx={{
                            color: black[600],
                            fontSize: 35,
                            fontWeight: 600,
                            marginBottom: 2,
                        }}
                    >
                        LỊCH SỬ PHÁT TRIỂN
                    </Typography>

                    <Typography
                        sx={{
                            color: black[400],
                            fontSize: 18,
                            fontWeight: 400,
                        }}
                    >
                        Được thành lập từ năm 2023, Eventis đã nhanh chóng trở thành một trong những nền tảng hàng đầu cho các cuộc thi trực tuyến. Với sự tin tưởng của hàng ngàn người dùng, chúng tôi không ngừng phát triển và cải tiến để mang đến trải nghiệm tốt nhất cho cộng đồng.
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: 20,
                }}
            >
                <Typography
                    sx={{
                        color: black[600],
                        fontSize: 35,
                        fontWeight: 600,
                        marginBottom: 2,
                    }}
                >
                    LỜI HỨA CỦA CHÚNG TÔI
                </Typography>

                <Typography
                    sx={{
                        color: black[400],
                        fontSize: 18,
                        fontWeight: 400,
                        width: '60%',
                        textAlign: 'center',
                        marginBottom: 10,
                    }}
                >
                    Chúng tôi cam kết đem đến sự minh bạch, công bằng và cơ hội cho tất cả mọi người. Eventis không chỉ là một nền tảng mà còn là cầu nối giúp mọi người hiện thực hóa đam mê và khám phá tiềm năng của mình.
                </Typography>

                <img
                    src={require('../../assets/landing-page.png')}
                    alt='about'
                    style={{
                        width: '100%',
                        height: 'fit-content',
                        objectFit: 'cover',
                        marginTop: 20,
                    }}
                />
            </Box>
        </Box>
    )
}

export default About;
