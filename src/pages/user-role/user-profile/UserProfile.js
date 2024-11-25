import { Box, Button, Typography, Avatar } from '@mui/material';
import React, { useState, useRef } from 'react';
import CustomTextField from '../../../components/user-profile/CustomTextField';
import { black, gray, red, white } from '../../../config/theme/themePrintives';
import { useSelector } from 'react-redux';

const UserProfile = () => {
    const [avatar, setAvatar] = useState(null);
    const fileInputRef = useRef(null);
    const { user } = useSelector((state) => state.user);
    const [fullName, setFullName] = useState(user.fullName);
    const [email, setEmail] = useState(user.email);

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setAvatar(URL.createObjectURL(file));
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', padding: 4 }}>
            <Typography alignSelf={'flex-start'} marginBottom={4} fontSize={24} fontWeight={600}>
                Thông tin cá nhân
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    height: '48vh',
                    width: '100%',
                    borderRadius: '8px',
                    boxShadow: '0px 0px 2px 2px rgba(0, 0, 0, 0.1)',
                }}
            >
                {/* Avatar Section */}
                <Box
                    sx={{
                        height: '100%',
                        width: '20vw',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: 'linear-gradient(to top, #EE443F, #F4827E, #EE443F)',
                        borderRadius: '8px 0 0 8px',
                    }}
                >
                    <Button
                        disableRipple
                        sx={{
                            backgroundColor: 'transparent',
                            padding: 0,
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                            marginBottom: 4,
                        }}
                    >
                        <Avatar
                            src={avatar}
                            sx={{ width: 120, height: 120, border: '3px solid #fff', cursor: 'pointer' }}
                            onClick={handleClick}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            hidden
                            onChange={handleAvatarChange}
                        />
                    </Button>

                    <Typography sx={{ fontSize: 18, fontWeight: 600, color: gray[100], marginBottom: 4 }}>
                        {fullName}
                    </Typography>
                </Box>

                {/* Form Section */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100%', padding: 4 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', gap: 2, marginTop: 4 }}>
                        <CustomTextField label="Họ và tên" placeholder="Họ và tên" value={fullName} />
                        <CustomTextField label="Email" placeholder="Email" type="email" value={email} />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', gap: 2, marginTop: 3 }}>
                        <CustomTextField label="Số điện thoại" placeholder="Số điện thoại" type="tel" />
                        <CustomTextField label="Ngày sinh" placeholder="Ngày sinh" type="date" />
                    </Box>

                    <Box sx={{ display: 'flex', width: '100%', marginTop: 3 }}>
                        <CustomTextField label="Địa chỉ" placeholder="Địa chỉ cụ thể" />
                    </Box>

                </Box>
            </Box>

            <Typography alignSelf={'flex-start'} marginBottom={2} marginTop={4} fontSize={24} fontWeight={600}>
                Mật khẩu
            </Typography>

            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    gap: 2,
                }}
            >
                {/* Recent Password */}
                <CustomTextField label="Mật khẩu hiện tại" placeholder="Mật khẩu hiện tại" type="password" />
                {/* New Password */}
                <CustomTextField label="Mật khẩu mới" placeholder="Mật khẩu mới" type="password" />
                {/* Confirm Password */}
                <CustomTextField label="Xác nhận mật khẩu" placeholder="Xác nhận mật khẩu" type="password" />
                {/* Button Section */}
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 4 }}>
                    <Button sx={{ textTransform: 'none', paddingY: '8px', paddingX: '24px', backgroundColor: gray[200], color: black[900], fontSize: 16, fontWeight: 600 }}>Đăng xuất</Button>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                        <Button sx={{ textTransform: 'none', paddingY: '8px', paddingX: '24px', backgroundColor: gray[200], color: black[900], fontSize: 16, fontWeight: 600, marginLeft: 2 }}>Hủy</Button>
                        <Button sx={{ textTransform: 'none', paddingY: '8px', paddingX: '24px', backgroundColor: red[500], color: white[50], fontSize: 16, fontWeight: 600 }}>Lưu thay đổi</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default UserProfile;
