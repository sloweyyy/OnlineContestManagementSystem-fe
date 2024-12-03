import {
    Box,
    Drawer,
    Typography,
    IconButton,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import {
    KeyboardDoubleArrowRight,
    KeyboardDoubleArrowLeft,
    Home,
    EmojiEvents,
    AddCircle,
    Phone,
    AccountCircleRounded,
    Logout,
    AppRegistration
} from "@mui/icons-material";
import { red, white, dark, black, gray } from "../../config/theme/themePrintives";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from "../../stores/actions/AuthAction";
import { YesNoModal } from "../../components/custom-components/CustomModal";
import CustomTooltip from "../../components/custom-components/CustomTooltip";

const Sidebar = () => {
    const [openSideBar, setOpenSideBar] = useState(true);
    const [activeItem, setActiveItem] = useState("home");
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);

    const drawerWidth = openSideBar ? "18rem" : "5rem";
    const drawerTransition = "0.2s ease";

    const handleSignOut = async () => {
        try {
            const resultAction = await dispatch(userLogout()).unwrap();
            if (resultAction) navigate('/sign-in');
        } catch (error) {
            navigate('/sign-in');
        }
    };

    const itemStyles = (isActive) => ({
        mb: 2,
        justifyContent: openSideBar ? "flex-start" : "center",
        borderRadius: "8px",
        padding: openSideBar ? "0.5rem 1rem" : "0.5rem",
        backgroundColor: isActive ? white[50] : "transparent",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        color: isActive ? red[500] : black[500],
        "&:hover": {
            backgroundColor: red[500],
            color: white[50],
        },
    });

    const ADMIN = [
        { name: "Trang chủ", icon: <Home />, path: "/admin/home" },
        { name: "Quản lý cuộc thi", icon: <EmojiEvents />, path: "/admin/contests" },
    ];

    const PARTICIPANT = [
        { name: "Trang chủ", icon: <Home />, path: "/participant/home" },
        { name: "Danh sách cuộc thi", icon: <EmojiEvents />, path: "/participant/contest" },
        { name: "Danh sách dự thi", icon: <AppRegistration />, path: "/participant/registration" },
    ];

    const menuItems = user?.role === "Admin" ? ADMIN : PARTICIPANT;

    const pathToProfile = user?.role === "Admin" ? "/admin/profile" : "/participant/profile";

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    transition: drawerTransition,
                    overflow: "auto",
                    borderRight: "0px",
                    backgroundColor: "transparent",
                    scrollbarWidth: "none",
                },
            }}
        >
            <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", p: 2, backgroundColor: white[50] }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 4, justifyContent: openSideBar ? "flex-start" : "center" }}>
                    {openSideBar && (
                        <Typography variant="h5" sx={{ flexGrow: 1, ml: 2.5, color: dark[700], fontWeight: 600 }}>
                            KONTEXT
                        </Typography>
                    )}
                    <IconButton
                        onClick={() => setOpenSideBar(!openSideBar)}
                        sx={{
                            color: dark[500],
                            fontSize: 20,
                            "&:hover": { backgroundColor: red[500], color: white[50] },
                        }}
                    >
                        {openSideBar ? <KeyboardDoubleArrowLeft fontSize="inherit" /> : <KeyboardDoubleArrowRight fontSize="inherit" />}
                    </IconButton>
                </Box>

                <Box flex={1}>
                    {menuItems.map((item) => (
                        <Link to={item.path} style={{ textDecoration: 'none' }} key={item.name}>
                            <CustomTooltip title={item.name} disableHoverListener={openSideBar}>
                                <Box onClick={() => setActiveItem(item.name)} sx={itemStyles(activeItem === item.name)}>
                                    {item.icon}
                                    {openSideBar && <Typography variant="subtitle2" ml={2}>{item.name}</Typography>}
                                </Box>
                            </CustomTooltip>
                        </Link>
                    ))}
                    {user?.role?.toLowerCase() === "user" && (
                        <Link to="/participant/contest-creating" style={{ textDecoration: 'none' }}>
                            <CustomTooltip title={'Tạo cuộc thi'} disableHoverListener={openSideBar}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: 2,
                                        justifyContent: "center",
                                        borderRadius: "8px",
                                        padding: openSideBar ? "0.5rem 1rem" : "0.5rem",
                                        border: "1px dashed",
                                        color: red[500],
                                        borderColor: red[500],
                                        backgroundColor: red[50],
                                        ":hover": { backgroundColor: white[50] },
                                    }}
                                    onClick={() => setActiveItem("contest-creating")}
                                >
                                    <AddCircle />
                                    {openSideBar && <Typography variant="h6" ml={2}>Tạo cuộc thi</Typography>}
                                </Box>
                            </CustomTooltip>
                        </Link>
                    )}
                </Box>

                <Box>
                    {openSideBar && (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: openSideBar ? "flex-start" : "center",
                                mb: 2,
                                justifyContent: "center",
                                borderRadius: "8px",
                                backgroundColor: red[500],
                                color: white[50],
                                padding: openSideBar ? "1rem" : "0.5rem",
                                gap: 1,
                            }}
                        >
                            <Phone sx={{ fontSize: 24, backgroundColor: openSideBar ? white[50] : red[500], color: openSideBar ? red[500] : white[50], padding: 1, borderRadius: 1 }} />
                            <Typography variant="h6">Chăm sóc khách hàng</Typography>
                            <Typography variant="body2">
                                Ngày làm việc trong tuần <br />
                                8:00 đến 17h:30
                            </Typography>
                            <Box sx={{ backgroundColor: white[50], p: "4px", borderRadius: 1, display: "flex", justifyContent: "center", width: "96%" }}>
                                <Typography variant="h6" color={red[500]}>0968.68.68.68</Typography>
                            </Box>
                        </Box>
                    )}
                    <CustomTooltip title={'Đăng xuất'} disableHoverListener={openSideBar}>
                        <IconButton
                            disableRipple
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2,
                                borderRadius: "8px",
                                backgroundColor: red[500],
                                color: white[50],
                                width: "100%",
                                border: `2px solid ${red[500]}`,
                                "&:hover": {
                                    backgroundColor: white[50],
                                    color: red[500],
                                    "& .MuiSvgIcon-root": { color: red[500] },
                                    "& .MuiTypography-root": { color: red[500] },
                                },
                            }}
                            onClick={() => setOpenModal(true)}
                        >
                            {openSideBar && <Typography variant="h6">Đăng xuất</Typography>}
                            <Logout sx={{ ml: openSideBar ? 2 : 0 }} />
                        </IconButton>
                    </CustomTooltip>
                </Box>

                <Divider sx={{ my: 2 }} />

                <List>
                    <CustomTooltip title={'Thông tin tài khoản'} disableHoverListener={openSideBar}>
                        <Link to={pathToProfile} style={{ textDecoration: 'none' }}>
                            <ListItem
                                button
                                disablePadding
                                onClick={() => setActiveItem("profile")}
                                sx={{
                                    mb: 1,
                                    justifyContent: openSideBar ? "flex-start" : "center",
                                    borderRadius: "8px",
                                    padding: openSideBar ? "0.5rem 1rem" : "0.5rem",
                                    backgroundColor: "transparent",
                                    "&:hover": {
                                        backgroundColor: red[500],
                                        "& .MuiListItemText-primary": { color: white[50] },
                                        "& .MuiSvgIcon-root": { color: white[50] },
                                    },
                                    "& .MuiListItemText-primary": {
                                        color: activeItem === "profile" ? red[500] : black[900],
                                    },
                                    "& .MuiSvgIcon-root": {
                                        color: activeItem === "profile" ? red[500] : black[900],
                                    },
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 0, mr: openSideBar ? 2 : 0, justifyContent: "center", fontSize: 20, color: black[900] }}>
                                    <AccountCircleRounded fontSize="large" />
                                </ListItemIcon>
                                {openSideBar && (
                                    <Box>
                                        <ListItemText
                                            primary={user?.fullName}
                                            sx={{ "& .MuiListItemText-primary": { fontSize: "16px", whiteSpace: "nowrap", color: black[900], fontWeight: 600 } }}
                                        />
                                        <ListItemText
                                            primary={user?.email}
                                            sx={{ "& .MuiListItemText-primary": { fontSize: "12px", whiteSpace: "nowrap", color: black[900], fontWeight: 400 } }}
                                        />
                                    </Box>
                                )}
                            </ListItem>
                        </Link>
                    </CustomTooltip>
                </List>
            </Box>

            <YesNoModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                onConfirm={handleSignOut}
                title="Xác nhận"
                message="Bạn có chắc chắn muốn đăng xuất không?"
            />
        </Drawer>
    );
};


export default Sidebar;
