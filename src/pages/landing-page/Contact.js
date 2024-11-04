import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import { black, gray, red, white } from '../../config/theme/themePrintives'
import { Email, Facebook, Instagram, LocationOn, Phone, Twitter } from '@mui/icons-material'
const inputStyle = {
    '& .MuiInput-underline': {
        '&:before': { borderBottomColor: gray[400] },
        '&:hover:not(.Mui-disabled):before': { borderBottomColor: black[900] },
        '&:after': { borderBottomColor: black[900] },
    },
};
const Contact = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                paddingY: 10,
            }}
        >
            <Typography fontSize={50} fontWeight={600} color={red[500]}>
                Liên hệ chúng tôi
            </Typography>
            <Typography fontSize={16} fontWeight={400} color={gray[400]} marginTop={2}>
                Bất kỳ câu hỏi hoặc nhận xét? Chỉ cần viết cho chúng tôi một tin nhắn!
            </Typography>
            <Box
                display="flex"
                flexDirection={'row'}
                justifyContent="center"
                alignItems="center"
                width={'80vw'}
                padding={1}
                boxShadow={1}
                borderRadius={2}
                bgcolor={gray[100]}
                marginTop={10}
            >
                {/* Card */}
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    width="40%"
                    padding={1}
                    margin={1}
                    position="relative"
                >
                    <img
                        src={require('../../assets/ContactCard.svg').default}
                        alt="Landing Page"
                        style={{ width: '100%', height: 'auto' }}
                    />

                    <Box
                        position="absolute"
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="center"
                        width={"100%"}
                        height={"100%"}
                        padding={10}
                    >
                        <Typography fontSize={30} fontWeight={600} color={white[50]} width={"100%"} marginLeft={10} marginTop={5}>
                            Liên hệ chúng tôi
                        </Typography>
                        <Typography fontSize={14} fontWeight={400} color={white[50]} width={"100%"} marginLeft={10}>
                            Nói điều gì đó để bắt đầu trò chuyện
                        </Typography>

                        <Box
                            display="flex"
                            flexDirection={'row'}
                            justifyContent="flex-start"
                            alignItems="center"
                            width={'100%'}
                            gap={4}
                            marginLeft={10}
                            marginTop={12}
                            marginBottom={2}
                        >
                            <Phone sx={{ color: white[50], fontSize: 20 }} />
                            <Typography fontSize={18} fontWeight={400} color={white[50]}>
                                0123 456 789
                            </Typography>
                        </Box>

                        <Box
                            display="flex"
                            flexDirection={'row'}
                            justifyContent="flex-start"
                            alignItems="center"
                            width={'100%'}
                            gap={4}
                            marginLeft={10}
                            marginBottom={2}
                        >
                            <Email sx={{ color: white[50], fontSize: 20 }} />
                            <Typography fontSize={18} fontWeight={400} color={white[50]}>
                                Kontext@gmail.com
                            </Typography>
                        </Box>

                        <Box
                            display="flex"
                            flexDirection={'row'}
                            justifyContent="flex-start"
                            alignItems="center"
                            width={'100%'}
                            gap={4}
                            marginLeft={10}
                            marginBottom={14}
                        >
                            <LocationOn sx={{ color: white[50], fontSize: 20 }} />
                            <Typography fontSize={18} fontWeight={400} color={white[50]}>
                                Đông Hòa, Dĩ An, Bình Dương
                            </Typography>
                        </Box>

                        <Box
                            display="flex"
                            flexDirection={'row'}
                            justifyContent="flex-start"
                            alignItems="center"
                            width={'100%'}
                            marginLeft={10}
                        >
                            <IconButton>
                                <Twitter sx={{ color: white[50], fontSize: 25 }} />
                            </IconButton>
                            <IconButton>
                                <Instagram sx={{ color: white[50], fontSize: 25 }} />
                            </IconButton>
                            <IconButton>
                                <Facebook sx={{ color: white[50], fontSize: 25 }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                {/* Form */}
                <Box
                    display="flex"
                    flexDirection={'column'}
                    justifyContent="center"
                    alignItems="center"
                    width={'60%'}
                    padding={1}
                    margin={1}
                >
                    {/* First Name & Last Name Input */}
                    <Box
                        display="flex"
                        flexDirection={'row'}
                        justifyContent="center"
                        alignItems="center"
                        width={'100%'}
                        gap={4}
                    >
                        <Box
                            display="flex"
                            flexDirection={'column'}
                            justifyContent="center"
                            alignItems="center"
                            width={'50%'}
                        >
                            <Typography fontSize={18} fontWeight={400} color={gray[500]} width={'100%'}>
                                Họ
                            </Typography>
                            <TextField
                                id="first-name"
                                variant="standard"
                                fullWidth
                                sx={inputStyle}
                            />

                        </Box>
                        <Box
                            display="flex"
                            flexDirection={'column'}
                            justifyContent="center"
                            alignItems="center"
                            width={'50%'}
                        >
                            <Typography fontSize={18} fontWeight={400} color={gray[500]} width={'100%'}>
                                Tên
                            </Typography>
                            <TextField
                                id="first-name"
                                variant="standard"
                                fullWidth
                                sx={inputStyle}
                            />
                        </Box>
                    </Box>

                    {/* Email & Phone Number */}
                    <Box
                        display="flex"
                        flexDirection={'row'}
                        justifyContent="center"
                        alignItems="center"
                        width={'100%'}
                        gap={4}
                        marginTop={4}
                    >
                        <Box
                            display="flex"
                            flexDirection={'column'}
                            justifyContent="center"
                            alignItems="center"
                            width={'50%'}
                        >
                            <Typography fontSize={18} fontWeight={400} color={gray[500]} width={'100%'}>
                                Email
                            </Typography>
                            <TextField
                                id="first-name"
                                variant="standard"
                                fullWidth
                                sx={inputStyle}
                            />

                        </Box>
                        <Box
                            display="flex"
                            flexDirection={'column'}
                            justifyContent="center"
                            alignItems="center"
                            width={'50%'}
                        >
                            <Typography fontSize={18} fontWeight={400} color={gray[500]} width={'100%'}>
                                Số điện thoại
                            </Typography>
                            <TextField
                                id="first-name"
                                variant="standard"
                                fullWidth
                                sx={inputStyle}
                            />
                        </Box>
                    </Box>

                    {/* Message */}
                    <Box
                        display="flex"
                        flexDirection={'column'}
                        justifyContent="center"
                        alignItems="center"
                        width={'100%'}
                        marginTop={4}
                    >
                        <Typography fontSize={18} fontWeight={400} color={gray[500]} width={'100%'}>
                            Tin nhắn
                        </Typography>
                        <TextField
                            id="first-name"
                            variant="standard"
                            fullWidth
                            multiline
                            rows={6}
                            sx={inputStyle}
                        />
                    </Box>
                    {/* Button */}
                    <Button
                        sx={{
                            backgroundColor: red[500],
                            color: white,
                            borderRadius: 1,
                            padding: '10px 40px',
                            marginTop: 4,
                            '&:hover': {
                                backgroundColor: red[300],
                            },
                            fontWeight: 'bold',
                            fontSize: 16,
                            boxShadow: `0px 6px 6px ${gray[300]}`,
                            alignSelf: 'flex-end',
                            textTransform: 'none',
                            color: white[50],
                        }}
                    >
                        Gửi tin nhắn
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact