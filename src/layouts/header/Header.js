import { AppBar, Button, Toolbar, Typography, useMediaQuery, IconButton, MenuItem, Box, Menu } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { black, dark, red, white } from '../../config/theme/themePrintives';
import { Key, Login, Menu as MenuIcon } from '@mui/icons-material';
import Link from "@mui/material/Link";

const Header = () => {
    const [elevated, setElevated] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [visible, setVisible] = useState(true);
    const isMobile = useMediaQuery("(max-width:1150px)");

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setVisible(false);
        } else {
            setVisible(true);
        }
        setElevated(currentScrollY > 0);
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const services = [
        { name: "Trang chủ", path: "/" },
        { name: "Giới thiệu", path: "/about" },
        { name: "Liên hệ", path: "/contact" },
    ];

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: red[500],
                boxShadow: elevated ? "0px 4px 20px rgba(0, 0, 0, 0.1)" : "none",
                transition: "box-shadow 0.3s, transform 0.3s",
                transform: visible ? 'translateY(0)' : 'translateY(-100%)',
                justifyContent: "center",
                padding: "5px 0",
            }}
        >
            <Toolbar sx={{ display: "flex" }}>
                <Button
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    href="/"
                    disableRipple
                    disableFocusRipple
                    sx={{
                        textTransform: "none",
                        padding: 0,
                        "&:hover": { backgroundColor: "transparent" },
                        "&:focus": { outline: "none" },
                        marginRight: { xs: 1, sm: 5, md: 5, lg: 10, xl: 10 },
                        marginLeft: { xs: 1, sm: 5, md: 5, lg: 10, xl: 10 },
                    }}
                >
                    <img src={require("../../assets/ASE-light.png")} alt="logo" width={'32.8px'} height={'38.4px'} />
                    <Typography variant="h5" color={white[50]} sx={{ ml: 2 }}>
                        Kontext
                    </Typography>
                </Button>

                {isMobile ? (
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuOpen}
                            sx={{ alignSelf: 'center' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            {services.map((service) => (
                                <Link
                                    href={service.path}
                                    underline="none"
                                    color={dark[500]}
                                    key={service.name}
                                >
                                    <MenuItem
                                        onClick={handleMenuClose}
                                        sx={{
                                            fontSize: 14,
                                            fontWeight: "600",
                                        }}
                                    >
                                        {service.name}
                                    </MenuItem>
                                </Link>
                            ))}
                            <MenuItem
                                onClick={() => { window.location.href = "/guide"; handleMenuClose(); }}
                                sx={{ fontSize: 14, fontWeight: "600" }}
                            >
                                Hướng dẫn
                            </MenuItem>
                            <MenuItem
                                onClick={() => { window.location.href = "/sign-in"; handleMenuClose(); }}
                                sx={{ fontSize: 14, fontWeight: "600", color: red[500] }}
                            >
                                Đăng nhập
                            </MenuItem>
                            <MenuItem
                                onClick={() => { window.location.href = "/sign-up"; handleMenuClose(); }}
                                sx={{ fontSize: 14, fontWeight: "600", color: red[500] }}
                            >
                                Đăng ký
                            </MenuItem>
                        </Menu>
                    </Box>
                ) : (
                    <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
                        <Box>
                            {services.map((service) => (
                                <Link href={service.path} underline="none" key={service.name}>
                                    <Typography
                                        variant="body4"
                                        color={white[50]}
                                        sx={{
                                            mx: 1,
                                            fontWeight: "bold",
                                            textDecoration: "none",
                                            "&:hover": {
                                                color: black[900],
                                            },
                                        }}
                                    >
                                        {service.name}
                                    </Typography>
                                </Link>
                            ))}
                            <Link href="/guide" underline="none">
                                <Typography
                                    variant="body4"
                                    color={white[50]}
                                    sx={{
                                        ml: 1,
                                        mr: 4,
                                        fontWeight: "600",
                                    }}
                                >
                                    Hướng dẫn
                                </Typography>
                            </Link>
                        </Box>
                        <Box sx={{ display: "flex", gap: 2, marginRight: { xs: 1, sm: 5, md: 5, lg: 10, xl: 10 } }}>
                            <Button
                                sx={{
                                    borderRadius: 2,
                                    fontSize: 12,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                    width: "fit-content",
                                    border: `1px solid ${white[50]}`,
                                    color: white[50],
                                    paddingX: 2,
                                }}
                                href="/sign-in"
                                startIcon={<Key />}
                            >
                                Đăng nhập
                            </Button>
                            <Button
                                sx={{
                                    borderRadius: 2,
                                    fontSize: 12,
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                    width: "fit-content",
                                    backgroundColor: white[50],
                                    color: red[500],
                                    paddingX: 2,
                                }}
                                href="/sign-up"
                                startIcon={<Login />}
                            >
                                Đăng ký
                            </Button>
                        </Box>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
