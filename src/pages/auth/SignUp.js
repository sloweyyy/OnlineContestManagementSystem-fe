import { Box, Button, Divider, FormControlLabel, Link, TextField, Typography, Checkbox } from '@mui/material';
import React, { useState } from 'react';
import { black, gray, red, white } from '../../config/theme/themePrintives';
import { Google } from '@mui/icons-material';
import AuthServices from '../../services/auth.service';
import { toast } from 'react-toastify';

const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
        height: '48px',
        borderRadius: '12px',
        fontSize: 16,
        '& fieldset': {
            borderColor: gray[200],
            borderWidth: 1,
        },
        '&:hover fieldset': {
            borderColor: gray[400],
            borderWidth: 1.5,
        },
        '&.Mui-focused fieldset': {
            borderColor: gray[400],
            borderWidth: 1.5,
        },
    }
};

const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    gap: 1
};

const typographyStyle = {
    color: gray[400],
    fontSize: 16,
    fontWeight: 400
};

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleRegister = async () => {
        if (!fullName || !email || !password || !confirmPassword) {
            toast.error('Vui lòng nhập đầy đủ thông tin');
            return;
        }
        if (password !== confirmPassword) {
            toast.error('Mật khẩu không khớp');
            return;
        }
        try {
            const response = await AuthServices.register(email, password, confirmPassword, fullName);
            if (response) {
                window.location.href = '/sign-in';
            }
        } catch (error) {
            console.error(error);
        }
    }

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
                        Tạo tài khoản mới trên <Typography component="span" sx={{ color: red[500], fontSize: 38, fontWeight: 'bold' }}>Kontext</Typography>
                    </Typography>
                </Box>

                {/* Form Fields */}
                <Box
                    display="flex"
                    flexDirection="column"
                    width="85%"
                    gap={1.5}
                >
                    <Box sx={boxStyle}>
                        <Typography sx={typographyStyle}>
                            Họ và tên
                        </Typography>
                        <TextField
                            type='text'
                            fullWidth
                            variant={'outlined'}
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            sx={textFieldStyle}
                        />
                    </Box>
                    <Box sx={boxStyle}>
                        <Typography sx={typographyStyle}>
                            Email
                        </Typography>
                        <TextField
                            type='email'
                            fullWidth
                            variant={'outlined'}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={textFieldStyle}
                        />
                    </Box>
                    <Box sx={boxStyle}>
                        <Typography sx={typographyStyle}>
                            Mật khẩu
                        </Typography>
                        <TextField
                            type='password'
                            fullWidth
                            variant={'outlined'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={textFieldStyle}
                        />
                    </Box>
                    <Box sx={boxStyle}>
                        <Typography sx={typographyStyle}>
                            Xác nhận mật khẩu
                        </Typography>
                        <TextField
                            type='password'
                            fullWidth
                            variant={'outlined'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            sx={textFieldStyle}
                        />
                    </Box>

                    {/* Terms and Conditions */}
                    <Box
                        sx={{
                            justifyContent: 'space-between',
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '20px',
                            marginTop: '10px',
                        }}
                    >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={termsAccepted}
                                    onChange={(e) => setTermsAccepted(e.target.checked)}
                                    sx={{ color: red[500], '&.Mui-checked': { color: red[500] } }}
                                />
                            }
                            label={
                                <Typography sx={{ color: gray[500], fontSize: 16, marginLeft: '10px', cursor: 'pointer' }}>
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
                        onClick={handleRegister}
                        disabled={!termsAccepted}
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
                    mt={'20px'}
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
