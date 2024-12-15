import { Box, Button, CircularProgress, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { gray, red, white } from '../../config/theme/themePrintives';
import AuthServices from '../../services/auth.service';
import { toast } from 'react-toastify';
import { FiberManualRecord, Visibility, VisibilityOff } from '@mui/icons-material';

const iconStyle = {
    color: gray[400],
    fontSize: 24,
};

const passwordConditions = [
    'Mật khẩu nhiều hơn 8 ký tự',
    'Ít nhất một ký tự viết thường',
    'Ít nhất một ký tự viết hoa',
    'Ít nhất một ký tự đặc biệt',
];

const ConfirmPasswordCard = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const resetToken = new URLSearchParams(window.location.search).get('resetPassword');
    const [loading, setLoading] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleConfirmPassword = async () => {
        if (newPassword === " " || confirmPassword === " ") {
            toast.error('Vui lòng nhập mật khẩu mới và xác nhận mật khẩu.');
            return;
        } else if (newPassword !== confirmPassword) {
            toast.error('Mật khẩu xác nhận không khớp.');
            return;
        }

        try {
            setLoading(true);
            await AuthServices.resetPassword(resetToken, newPassword);
            toast.success('Đổi mật khẩu thành công, vui lòng đăng nhập.');

            setTimeout(() => {
                window.location.href = '/sign-in';
            }, 3000);
        } catch (error) {
            console.error('Error:', error);
            toast.error(error.message || 'Đổi mật khẩu thất bại');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width={'100%'}
            height={'100vh'}
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                width={{ xs: '90vw', sm: '70vw', md: '50vw' }}
                px={6}
                py={8}
                borderRadius={2}
                boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
            >
                <Typography
                    variant="h1"
                    color={red[500]}
                    width={'100%'}
                    fontWeight="bold"
                >
                    Event
                    <Typography
                        component="span"
                        variant="h1"
                        color={gray[400]}
                        fontWeight="bold"
                    >
                        is
                    </Typography>
                </Typography>

                <Typography
                    width={'100%'}
                    color={gray[400]}
                    fontSize={45}
                    fontWeight={600}
                    mb={3}
                >
                    Mật khẩu mới
                </Typography>

                <Box display="flex" flexDirection="column" width="100%" gap={1} mb={3}>
                    <Typography sx={{ color: gray[400], fontSize: 16, fontWeight: 400 }}>
                        Nhập mật khẩu mới
                    </Typography>
                    <TextField
                        type={showNewPassword ? 'text' : 'password'}
                        fullWidth
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                height: '50px',
                                borderRadius: '8px',
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
                            },
                        }}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        edge="end"
                                    >
                                        {showNewPassword ? <VisibilityOff sx={iconStyle} /> : <Visibility sx={iconStyle} />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                <Box display="flex" flexDirection="column" width="100%" gap={1} mb={3}>
                    <Typography sx={{ color: gray[400], fontSize: 16, fontWeight: 400 }}>
                        Xác nhận mật khẩu
                    </Typography>
                    <TextField
                        type={showConfirmPassword ? 'text' : 'password'}
                        fullWidth
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                height: '50px',
                                borderRadius: '8px',
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
                            },
                        }}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff sx={iconStyle} /> : <Visibility sx={iconStyle} />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 2,
                        marginY: 2,
                    }}
                >
                    {passwordConditions.map((condition, index) => (
                        <Typography
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: 12,
                                fontWeight: 400,
                                color: gray[400],
                            }}
                        >
                            <FiberManualRecord sx={{ height: 8, width: 8, marginRight: 1 }} />
                            {condition}
                        </Typography>
                    ))}
                </Box>


                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: red[500],
                        color: white[50],
                        borderRadius: '8px',
                        height: '50px',
                        fontWeight: 'bold',
                        '&:hover': { backgroundColor: red[600] },
                        textTransform: 'none',
                        fontSize: 18,
                        mt: 2,
                    }}
                    onClick={handleConfirmPassword}
                >
                    {loading ? <CircularProgress size={24} color={white[50]} /> : 'Xác nhận'}
                </Button>
            </Box>
        </Box>
    );
};

export default ConfirmPasswordCard;
