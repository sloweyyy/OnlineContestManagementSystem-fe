import React, { useState } from 'react';
import {
    Avatar, Box, Button, Divider, Menu, MenuItem, Typography
} from '@mui/material';
import { black, gray, red, white, yellow } from '../../config/theme/themePrintives';
import PaticipatingModal from '../../components/contest/PaticipatingModal';

const CountdownBox = ({ value, index }) => (
    <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100px"
        height="100px"
        bgcolor={white[100]}
        borderRadius={2}
        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
    >
        <Typography fontWeight={600} fontSize={36} color={red[500]}>
            {value}
        </Typography>
        <Typography fontWeight={400} fontSize={18} color={gray[500]}>
            {index === 0 ? 'Ngày' : index === 1 ? 'Giờ' : index === 2 ? 'Phút' : 'Giây'}
        </Typography>
    </Box>
);

const RankCard = ({ rank, name }) => {
    let bgColor;
    let backgroundImage;

    switch (rank) {
        case 1:
            bgColor = yellow[100];
            backgroundImage = `url(${require("../../assets/gold.svg").default})`;
            break;
        case 2:
            bgColor = yellow[50];
            backgroundImage = `url(${require("../../assets/silver.svg").default})`;
            break;
        case 3:
            bgColor = gray[100];
            backgroundImage = `url(${require("../../assets/brown.svg").default})`;
            break;
        default:
            bgColor = gray[50];
            backgroundImage = 'none';
            break;
    }

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 2,
                bgcolor: bgColor,
                paddingY: 2,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="40px"
                height="40px"
                color={black[900]}
                fontSize={20}
                marginLeft={4}
                sx={{
                    backgroundImage: backgroundImage,
                    backgroundSize: 'cover',
                    display: backgroundImage ? 'flex' : 'none',
                }}
            >
                {rank}
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="60%"
                height="100%"
                borderRadius={2}
                fontSize={18}
                fontWeight={500}
                color={black[700]}
            >
                {name}
            </Box>
        </Box >
    );
};

const DetailContest = () => {
    const ParticipantData = [
        { rank: 1, name: 'Participant Name 1' },
        { rank: 2, name: 'Participant Name 2' },
        { rank: 3, name: 'Participant Name 3' },
        { rank: 4, name: 'Participant Name 4' },
        { rank: 5, name: 'Participant Name 5' },
        { rank: 6, name: 'Participant Name 6' },
        { rank: 7, name: 'Participant Name 7' },
        { rank: 8, name: 'Participant Name 8' },
        { rank: 9, name: 'Participant Name 9' },
        { rank: 10, name: 'Participant Name 10' },
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(ParticipantData.length / itemsPerPage);

    const paginatedData = ParticipantData.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    const handleScroll = (text) => {
        return () => {
            let elementId;
            switch (text) {
                case 'Trang chủ':
                    elementId = 'top';
                    break;
                case 'Thể lệ':
                    elementId = 'rules';
                    break;
                case 'Bảng xếp hạng':
                    elementId = 'rankingTable';
                    break;
                default:
                    return;
            }
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [opened, setOpened] = useState(false);

    const handleOnClose = () => {
        setOpened(false);
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
            <Box
                id="top"
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="100%"
                bgcolor={red[500]}
                pt={4}
            >
                {/* Header */}
                <Box display="flex" justifyContent="space-between" width="100%" maxWidth="70%">
                    <img src={require("../../assets/ASE.png")} alt="logo" width="60px" height="70px" />
                    <Box display="flex" justifyContent="space-between" width="100%" maxWidth="80%" bgcolor="rgba(139, 0, 0, 0.5)" borderRadius={10} px={2} py={2} alignItems={'center'}>
                        <Box display="flex">
                            {['Trang chủ', 'Thể lệ', 'Bảng xếp hạng'].map((text) => (
                                <Button
                                    key={text}
                                    variant="text"
                                    disableRipple
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: 18,
                                        color: white[50],
                                        marginLeft: 4,
                                        "&:hover": { color: red[900] },
                                        textTransform: 'none',
                                        padding: 0,
                                        border: 'none',
                                        background: 'none',
                                    }}
                                    onClick={handleScroll(text)}
                                >
                                    {text}
                                </Button>
                            ))}
                        </Box>
                        <Button onClick={handleClick}>
                            <Avatar />
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem sx={{ fontSize: 16, fontWeight: 600, ":hover": { bgcolor: 'transparent' }, ":focus": { bgcolor: 'transparent' }, ":active": { bgcolor: 'transparent' } }} disableTouchRipple>
                                Nguyễn Quốc Thắng
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose} sx={{ fontSize: 16, fontWeight: 600 }}>
                                Tài khoản
                            </MenuItem>
                            <MenuItem onClick={handleClose} sx={{ fontSize: 16, fontWeight: 600 }}>
                                Lịch sử làm bài
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose} sx={{ fontSize: 16, fontWeight: 600, color: red[500] }}>
                                Đăng xuất
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>

                <Box mt={8} width="100%" maxWidth="70%" height="50vh" bgcolor={gray[100]} borderRadius={2} boxShadow="0px 6px 10px rgba(0, 0, 0, 0.1)" />
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    height="20vh"
                    bgcolor="rgba(139, 0, 0, 0.5)"
                    mt={8}
                >
                    <Typography
                        fontWeight={600}
                        fontSize={36}
                        color={white[50]}
                        width="100%"
                        maxWidth="80%"
                        textAlign="center"
                    >
                        CUỘC THI TRỰC TUYẾN “TÌM HIỂU VỀ LUẬT PHÒNG CHỐNG MA TÚY”
                    </Typography>
                </Box>
            </Box>

            <Box id='rules' textAlign="center" pt={8} width="100%">
                <Typography textTransform="uppercase" fontWeight={600} fontSize={40} color={red[500]}>
                    Cuộc thi kết thúc trong
                </Typography>
                <Box display="flex" justifyContent="center" gap={3} mt={4}>
                    {[20, 20, 20, 20].map((value, index) => <CountdownBox key={index} value={value} index={index} />)}
                </Box>
            </Box>

            <Box display="flex" gap={4} mt={6} mb={8}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: red[500],
                        borderRadius: 10,
                        px: 4,
                        py: 1,
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                            backgroundColor: red[600],
                        },
                        textTransform: 'none',
                    }}
                    onClick={() => setOpened(true)}
                >
                    <Typography fontWeight={600} fontSize={24} color={white[50]}>
                        Tham gia
                    </Typography>
                </Button>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: white[50],
                        borderRadius: 10,
                        px: 4,
                        py: 1,
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                            backgroundColor: gray[200],
                        },
                        textTransform: 'none',
                    }}
                >
                    <Typography fontWeight={600} fontSize={24} color={red[500]}>
                        Thể lệ
                    </Typography>
                </Button>
            </Box>

            <Box id='rankingTable' display="flex" justifyContent="center" alignItems="flex-start" width="100%" gap={4} py={4}>
                <Box
                    sx={{
                        backgroundImage: `url(${require("../../assets/Rank-card.png")})`,
                        backgroundSize: 'cover',
                        width: '100%',
                        maxWidth: '20%',
                        height: '80vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        borderRadius: 2,
                        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        bgcolor={white[50]}
                        borderRadius={1}
                        width="80%"
                        lineHeight={1.5}
                        my={2}
                        py={1}
                    >
                        <Typography fontWeight={600} fontSize={26} color={red[600]}>
                            1000
                        </Typography>
                        <Typography fontWeight={400} fontSize={18} color={black[900]}>
                            lượt thi
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        bgcolor={white[50]}
                        borderRadius={1}
                        width="80%"
                        lineHeight={1.5}
                        mb={2}
                        py={1}
                    >
                        <Typography fontWeight={600} fontSize={26} color={red[600]}>
                            1000
                        </Typography>
                        <Typography fontWeight={400} fontSize={18} color={black[900]}>
                            lượt đăng ký
                        </Typography>
                    </Box>
                </Box>

                <Box width="100%" maxWidth="60%">
                    <Box display="flex" justifyContent="flex-start">
                        <Typography fontWeight={600} fontSize={36} color={black[900]}>
                            Bảng xếp hạng
                        </Typography>
                    </Box>

                    <Box
                        display="flex"
                        flexDirection="column"
                        gap={2}
                        width="100%"
                        my={3}
                    >
                        {paginatedData.map((data) => (
                            <RankCard key={data.rank} {...data} />
                        ))}
                    </Box>

                    <Box display="flex" justifyContent="space-between">
                        <Button onClick={handlePrev} disabled={currentPage === 0}>
                            <Typography fontWeight={600} fontSize={18} color={currentPage === 0 ? gray[400] : red[500]} >
                                Trước
                            </Typography>
                        </Button>
                        <Button onClick={handleNext} disabled={currentPage >= totalPages - 1}>
                            <Typography fontWeight={600} fontSize={18} color={currentPage >= totalPages - 1 ? gray[400] : red[500]}>
                                Sau
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection={'row'}
                gap={20}
                bgcolor={red[500]}
                width="100%"
                paddingY={8}
                marginTop={8}
            >
                {/* Organiser */}
                <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent={'center'} gap={2}>
                    <Typography fontWeight={600} fontSize={26} color={white[50]} textTransform={'uppercase'}>
                        Ban tổ chức
                    </Typography>
                    <Typography fontWeight={600} fontSize={22} color={white[50]} textTransform={'capitalize'}>
                        Khoa học xã hội và nhân văn
                    </Typography>
                    <Typography fontWeight={400} fontSize={18} color={white[50]}>
                        Địa chỉ: 144 Xuân Thủy, Cầu Giấy, Hà Nội
                    </Typography>
                    <Typography fontWeight={400} fontSize={18} color={white[50]}>
                        Điện thoại: 024.3754.6183
                    </Typography>
                    <Typography fontWeight={400} fontSize={18} color={white[50]}>
                        Email: XHNV@gmail.com
                    </Typography>
                </Box>

                <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent={'center'} gap={2}>
                    <Typography fontWeight={600} fontSize={26} color={white[50]} textTransform={'uppercase'}>
                        Đơn vị lập trình
                    </Typography>
                    <Typography fontWeight={600} fontSize={22} color={white[50]} textTransform={'capitalize'}>
                        Công ty Cổ phần Kontext
                    </Typography>
                    <Typography fontWeight={400} fontSize={18} color={white[50]}>
                        Địa chỉ: 144 Xuân Thủy, Cầu Giấy, Hà Nội
                    </Typography>
                    <Typography fontWeight={400} fontSize={18} color={white[50]}>
                        Điện thoại: 024.3754.6183
                    </Typography>
                    <Typography fontWeight={400} fontSize={18} color={white[50]}>
                        Email: Kontext@gmail.com
                    </Typography>
                </Box>
            </Box>

            {/* copy right */}
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                bgcolor={gray[100]}
            >
                <Typography fontWeight={600} fontSize={18} color={black[700]}>
                    © 2021 Kontext. All rights reserved.
                </Typography>
            </Box>

            <PaticipatingModal open={opened} onClose={handleOnClose} />
        </Box>
    );
}

export default DetailContest;
