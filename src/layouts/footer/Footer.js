import { Box, Typography, Link, IconButton } from '@mui/material';
import { Instagram, Facebook, Twitter } from '@mui/icons-material';
import { black, gray, red, white } from "../../config/theme/themePrintives";

const linkStyle = {
    display: 'block',
    mb: 2,
    position: 'relative',
    color: 'inherit',
    textDecoration: 'none',
    '&::after': {
        content: '""',
        position: 'absolute',
        width: '0',
        height: '1.5px',
        bottom: '-4px',
        left: '0',
        backgroundColor: gray[300],
        transition: 'width 0.3s ease',
    },
    '&:hover::after': {
        width: '100%',
    },
    width: "fit-content",
};

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
                        Eventis
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, maxWidth: 400, color: gray[500] }}>
                        <Box component="span" fontWeight="bold" color={black[900]}>
                            Eventis
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
                            <Link href="not-found" sx={linkStyle}>
                                Eventis là gì?
                            </Link>
                            <Link href="not-found" sx={linkStyle}>
                                Các tính năng
                            </Link>
                            <Link href="not-found" sx={linkStyle}>
                                Đối tác
                            </Link>
                            <Link href="not-found" sx={linkStyle}>
                                Tại sao chọn Eventis?
                            </Link>
                        </Box>
                    </Box>

                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: red[500] }}>
                            Khám phá
                        </Typography>
                        <Box sx={{ ml: 2, color: gray[500] }}>
                            <Link href="/" sx={linkStyle}>
                                Trang chủ
                            </Link>
                            <Link href="/about" sx={linkStyle}>
                                Giới thiệu
                            </Link>
                            <Link href="/contact" sx={linkStyle}>
                                Liên hệ
                            </Link>
                            <Link href="/guide" sx={linkStyle}>
                                Hướng dẫn
                            </Link>
                        </Box>
                    </Box>

                    <Box sx={{ mb: { xs: 4, md: 0 }, mr: { sx: 0, md: 4 } }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: red[500] }}>
                            About
                        </Typography>
                        <Box sx={{ ml: 2, color: gray[500] }}>
                            <Link href="not-found" sx={linkStyle}>
                                Community
                            </Link>
                            <Link href="not-found" sx={linkStyle}>
                                Designers
                            </Link>
                            <Link href="not-found" sx={linkStyle}>
                                Support
                            </Link>
                            <Link href="not-found" sx={linkStyle}>
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
                    © 2024 Eventis. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
