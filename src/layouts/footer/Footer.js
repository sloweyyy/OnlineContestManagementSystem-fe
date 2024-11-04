import { Box, Typography, Link, IconButton } from '@mui/material';
import { Instagram, Facebook, Twitter } from '@mui/icons-material';
import { black, gray, red, white } from "../../config/theme/themePrintives";

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: gray[100],
                color: black[900],
                paddingTop: 24,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    mb: 6,
                }}
            >
                <Box sx={{ mb: { xs: 4, md: 0 }, ml: { sx: 0, md: 12 } }}>
                    <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, color: red[500] }}>
                        Kontext
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, maxWidth: 400, color: gray[500] }}>
                        <Box component="span" fontWeight="bold" color={black[900]}>
                            Kontext
                        </Box>{" "}
                        cung cấp nền tảng tạo các cuộc thi trực tuyến dễ dàng và nhanh chóng, giúp người dùng có thể tổ chức và tham gia các cuộc thi trên mọi lĩnh vực.
                    </Typography>

                    <Box color={red[500]}>
                        <IconButton color="inherit" sx={{ mx: 0.5 }}>
                            <Instagram />
                        </IconButton>
                        <IconButton color="inherit" sx={{ mx: 0.5 }}>
                            <Facebook />
                        </IconButton>
                        <IconButton color="inherit" sx={{ mx: 0.5 }}>
                            <Twitter />
                        </IconButton>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mr: 12,
                        gap: 4,
                    }}
                >
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: red[500] }}>
                            Sản phẩm
                        </Typography>
                        <Box sx={{ ml: 2 }} color={gray[500]}>
                            <Link href="not-found" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                                Kontext là gì?
                            </Link>
                            <Link href="not-found" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                                Các tính năng
                            </Link>
                            <Link href="not-found" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                                Đối tác
                            </Link>
                            <Link href="not-found" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                                Tại sao chọn Kontext?
                            </Link>
                        </Box>
                    </Box>

                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: red[500] }}>
                            Khám phá
                        </Typography>
                        <Box sx={{ ml: 2, color: gray[500] }}>
                            <Link href="not-found" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                                Trang chủ
                            </Link>
                            <Link href="not-found" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                                Giới thiệu
                            </Link>
                            <Link href="not-found" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                                Liên hệ
                            </Link>
                            <Link href="not-found" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                                Hướng dẫn
                            </Link>
                        </Box>
                    </Box>

                    <Box sx={{ mb: { xs: 4, md: 0 }, mr: { sx: 0, md: 4 } }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: red[500] }}>
                            About
                        </Typography>
                        <Box sx={{ ml: 2, color: gray[500] }}>
                            <Link href="not-found" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                                Community
                            </Link>
                            <Link href="not-found" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                                Designers
                            </Link>
                            <Link href="not-found" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                                Support
                            </Link>
                            <Link href="not-found" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
                                Terms of service
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: black[900],
                    color: white[50],
                    paddingX: 12,
                }}
            >
                <Typography variant="body2" fontSize={16} fontWeight={600}>
                    © 2024 Kontext. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
