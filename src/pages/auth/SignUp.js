import { Box, Button, Divider, FormControlLabel, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import { black, gray, red, white } from '../../config/theme/themePrintives';
import { CheckBox, Google } from '@mui/icons-material';

const SignUp = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingY={8}
            paddingX={4}
            gap={2}
        >
            {/* Form Section */}
            <Box
                flex={1}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                bgcolor="white"
                borderRadius={2}
                boxShadow={3}
                paddingY={4}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    width="85%"
                    mb={4}
                >
                    <Typography sx={{ color: black[900], fontSize: 32, fontWeight: 'bold' }}>
                        Tạo tài khoản mới trên <Typography component="span" sx={{ color: red[500], fontSize: 38, fontWeight: 'bold' }}>Kontest</Typography>
                    </Typography>
                </Box>

                {/* Form Fields */}
                <Box
                    display="flex"
                    flexDirection="column"
                    width="85%"
                    gap={2}
                >
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'flex-start'}
                        width={'100%'}
                        gap={1}
                    >
                        <Typography sx={{ color: gray[400], fontSize: 18, fontWeight: 600 }}>
                            Họ và tên
                        </Typography>
                        <TextField
                            type='text'
                            fullWidth
                            variant={'outlined'}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    height: '50px',
                                    borderRadius: '12px',
                                    '& fieldset': {
                                        borderColor: gray[200],
                                        borderWidth: 2,
                                    },
                                    '&:hover fieldset': {
                                        borderColor: gray[400],
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: gray[400],
                                    },
                                }
                            }}
                        />
                    </Box>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'flex-start'}
                        width={'100%'}
                        gap={1}
                    >
                        <Typography sx={{ color: gray[400], fontSize: 18, fontWeight: 600 }}>
                            Email
                        </Typography>
                        <TextField
                            type='email'
                            fullWidth
                            variant={'outlined'}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    height: '50px',
                                    borderRadius: '12px',
                                    '& fieldset': {
                                        borderColor: gray[200],
                                        borderWidth: 2,
                                    },
                                    '&:hover fieldset': {
                                        borderColor: gray[400],
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: gray[400],
                                    },
                                }
                            }}
                        />
                    </Box>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'flex-start'}
                        width={'100%'}
                        gap={1}
                    >
                        <Typography sx={{ color: gray[400], fontSize: 18, fontWeight: 600 }}>
                            Mật khẩu
                        </Typography>
                        <TextField
                            type='password'
                            fullWidth
                            variant={'outlined'}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    height: '50px',
                                    borderRadius: '12px',
                                    '& fieldset': {
                                        borderColor: gray[200],
                                        borderWidth: 2,
                                    },
                                    '&:hover fieldset': {
                                        borderColor: gray[400],
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: gray[400],
                                    },
                                }
                            }}
                        />
                    </Box>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'flex-start'}
                        width={'100%'}
                        gap={1}
                    >
                        <Typography sx={{ color: gray[400], fontSize: 18, fontWeight: 600 }}>
                            Xác nhận mật khẩu
                        </Typography>
                        <TextField
                            type='password'
                            fullWidth
                            variant={'outlined'}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    height: '50px',
                                    borderRadius: '12px',
                                    '& fieldset': {
                                        borderColor: gray[200],
                                        borderWidth: 2,
                                    },
                                    '&:hover fieldset': {
                                        borderColor: gray[400],
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: gray[400],
                                    },
                                }
                            }}
                        />
                    </Box>

                    {/* Terms and Conditions */}
                    <Box
                        sx={{
                            justifyContent: 'space-between',
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '40px',
                            marginTop: '10px',
                        }}
                    >
                        <FormControlLabel
                            control={<CheckBox sx={{ color: red[500] }} />}
                            value={'agreeTerms'}
                            label={
                                <Typography sx={{ color: gray[500], fontSize: 16, marginLeft: '10px' }}>
                                    Tôi đồng ý với các điều khoản dịch vụ
                                </Typography>
                            }
                        />
                    </Box>

                    {/* Sign Up Button */}
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: red[500],
                            color: 'white',
                            borderRadius: 1,
                            height: '45px',
                            fontWeight: 'bold',
                            '&:hover': { backgroundColor: red[600] },
                            textTransform: 'none',
                            fontSize: 18
                        }}
                    >
                        Đăng ký
                    </Button>
                </Box>

                {/* Social Media Sign Up */}
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    width="85%"
                    mt={3}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        width="100%"
                        gap={1}
                    >
                        <Divider sx={{ flex: 1, bgcolor: gray[300] }} />
                        <Typography sx={{ color: gray[400], fontSize: 16, fontWeight: 500 }}>hoặc</Typography>
                        <Divider sx={{ flex: 1, bgcolor: gray[300] }} />
                    </Box>

                    <Box
                        display="flex"
                        flexDirection="column"
                        width="100%"
                        gap={2}
                        mt={2}
                    >
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: white[50],
                                color: red[500],
                                borderRadius: 1,
                                height: '45px',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                fontSize: 18,
                                border: '1px solid',
                                boxShadow: 'none',
                            }}
                            startIcon={<Google />}
                        >
                            Đăng ký với Google
                        </Button>
                    </Box>
                </Box>

                {/* Sign In Link */}
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    width="85%"
                    mt={3}
                >
                    <Typography sx={{ color: gray[400], fontSize: 16 }}>
                        Bạn đã có tài khoản?{' '}
                        <Link href="/sign-in" variant="body2" sx={{ color: red[500], fontWeight: 500, cursor: 'pointer', textDecoration: 'none' }}>
                            Đăng nhập
                        </Link>
                    </Typography>
                </Box>
            </Box>

            {/* Image Section */}
            <Box
                flex={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={3}
                bgcolor={gray[50]}
            >
                <img
                    src={require('../../assets/SignUp.svg').default}
                    alt="Sign Up"
                    style={{
                        width: '90%',
                        maxHeight: '80vh',
                        objectFit: 'cover',
                    }}
                />
            </Box>
        </Box>
    );
};

export default SignUp;
