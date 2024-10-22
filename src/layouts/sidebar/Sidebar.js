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
    VideoCameraBack,
    AddCircle,
    Phone,
    FileDownloadOutlined,
    AccountCircleRounded,
} from "@mui/icons-material";
import { red, white, dark, black } from "../../config/theme/themePrintives";
import { Link } from "react-router-dom"; // Import from react-router-dom

const Sidebar = () => {
    const [openSideBar, setOpenSideBar] = useState(true);
    const [activeItem, setActiveItem] = useState("home");

    const drawerWidth = openSideBar ? "18rem" : "5rem";
    const drawerTransition = "0.2s ease";

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
                    overflow: "hidden",
                    borderRight: "0px",
                    backgroundColor: "transparent",
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
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Box onClick={() => setActiveItem("home")} sx={itemStyles(activeItem === "home")}>
                            <Home />
                            {openSideBar && <Typography variant="subtitle2" ml={2}>Trang chủ</Typography>}
                        </Box>
                    </Link>

                    <Link to="/contest" style={{ textDecoration: 'none' }}>
                        <Box onClick={() => setActiveItem("video")} sx={itemStyles(activeItem === "video")}>
                            <VideoCameraBack />
                            {openSideBar && <Typography variant="subtitle2" ml={2}>Cuộc thi ảnh - video</Typography>}
                        </Box>
                    </Link>

                    <Link to="/contest-creating" style={{ textDecoration: 'none' }}>
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
                        >
                            <AddCircle />
                            {openSideBar && <Typography variant="h6" ml={2}>Tạo cuộc thi</Typography>}
                        </Box>
                    </Link>
                </Box>

                <Box>
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
                        {openSideBar && (
                            <>
                                <Typography variant="h6">Chăm sóc khách hàng</Typography>
                                <Typography variant="body2">
                                    Ngày làm việc trong tuần <br />
                                    8:00 đến 17h:30
                                </Typography>
                                <Box sx={{ backgroundColor: white[50], p: "4px", borderRadius: 1, display: "flex", justifyContent: "center", width: "96%" }}>
                                    <Typography variant="h6" color={red[500]}>0968.68.68.68</Typography>
                                </Box>
                            </>
                        )}
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 2,
                            justifyContent: "center",
                            borderRadius: "8px",
                            backgroundColor: red[500],
                            color: white[50],
                            padding: openSideBar ? "0.5rem 1rem" : "0.5rem",
                        }}
                    >
                        {openSideBar && <Typography variant="h6">Mẫu kế hoạch</Typography>}
                        <FileDownloadOutlined sx={{ ml: openSideBar ? 2 : 0 }} />
                    </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <List>
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
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
                                        primary="Nguyễn Quốc Thắng"
                                        sx={{ "& .MuiListItemText-primary": { fontSize: "16px", whiteSpace: "nowrap", color: black[900], fontWeight: 600 } }}
                                    />
                                    <ListItemText
                                        primary="0346129897"
                                        sx={{ "& .MuiListItemText-primary": { fontSize: "14px", whiteSpace: "nowrap", color: black[900], fontWeight: 400 } }}
                                    />
                                </Box>
                            )}
                        </ListItem>
                    </Link>
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
