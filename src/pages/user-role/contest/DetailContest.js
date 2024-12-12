import React, { useEffect, useState } from 'react';
import {
    Avatar, Box, Button, Divider, Menu, MenuItem, Typography
} from '@mui/material';
import { black, gray, red, white } from '../../../config/theme/themePrintives';
import PaticipatingModal from '../../../components/contest/PaticipatingModal';
import { useLocation } from 'react-router-dom';
import ContestService from '../../../services/contest.service';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from "../../../stores/actions/AuthAction";
import RegisterService from '../../../services/registration.service';
import CountdownBox from '../../../components/contest/CountdownBox';
import RankCard from '../../../components/contest/RankCard';
import { ConfirmModal } from '../../../components/custom-components/CustomModal';
import PaymentService from '../../../services/payment.service';
import { toast } from 'react-toastify';
import RulesModal from '../../../components/contest/RulesModal';

const DetailContest = () => {
    const [contest, setContest] = useState(null);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const contestId = queryParams.get('id');
    const [remainingTime, setRemainingTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.user);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    useEffect(() => {
        const fetchContest = async () => {
            const contest = await ContestService.getContestById(contestId);
            setContest(contest);
        }

        fetchContest();
    }, [contestId]);

    useEffect(() => {
        if (!contest?.endDate) return;

        const calculateRemainingTime = () => {
            const now = new Date();
            const endDate = new Date(contest?.endDate);
            const distance = endDate - now;

            if (distance <= 0) {
                setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setRemainingTime({
                days,
                hours,
                minutes,
                seconds,
            });
        };

        calculateRemainingTime();
        const intervalId = setInterval(calculateRemainingTime, 1000);

        return () => clearInterval(intervalId);
    }, [contest]);

    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const fetchParticipants = async () => {
            try {
                const participants = await RegisterService.getParticipantsByContestId(contestId);
                setParticipants(Array.isArray(participants) ? participants : []);
            } catch (error) {
                console.error('Error fetching participants:', error);
                setParticipants([]);
            }
        };

        fetchParticipants();
    }, [contestId]);

    const isDisable =
        user?.id === contest?.creatorUserId ||
        (Array.isArray(participants) && participants.some(participant => participant.userId === user?.id));

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(participants?.length / itemsPerPage);

    const paginatedData = participants?.slice(
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

    const handleHeaderClick = (text) => {
        return () => {
            let elementId;
            switch (text) {
                case 'Trang chủ':
                    window.location.href = '/participant/home';
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

    const [openParticipatingModal, setOpenParticipatingModal] = useState(false);

    const handleOnClose = () => {
        setOpenParticipatingModal(false);
    }


    const handleSignOut = async () => {
        try {
            const resultAction = await dispatch(userLogout()).unwrap();
            if (resultAction) navigate('/sign-in');
            setAnchorEl(null);
        } catch (error) {
            console.error('Lỗi khi đăng xuất:', error);
        }
    };

    const handlePersonalInfo = () => {
        navigate('/participant/profile');
        setAnchorEl(null);
    }

    const handleConfirm = async () => {
        try {
            const response = await PaymentService.getPaymentStatus(contestId, user.id);
            if (response && response.status === 'SUCCESS') {
                toast.success('Thanh toán thành công!');
                setIsConfirmModalOpen(false);
            } else if (response && response.status === 'PENDING') {
                toast.error('Thanh toán đang chờ xác nhận!');
            } else if (response && response.status === 'CANCELLED') {
                toast.error('Thanh toán thất bại!');
                setIsConfirmModalOpen(false);
            }
        } catch (error) {
            toast.error('Không thể xác nhận thanh toán!');
        }
    }

    const [openRulesModal, setOpenRulesModal] = useState(false);

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
                <Box display="flex" justifyContent="space-between" width="100%" maxWidth="70%" alignItems={'center'}>
                    <img
                        src={require("../../../assets/logo.svg").default}
                        alt="logo"
                        width="60px"
                        height="70px"
                        onClick={() => window.location.href = '/participant/home'}
                        style={{ cursor: 'pointer' }}
                    />
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
                                    onClick={handleHeaderClick(text)}
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
                            <MenuItem sx={{ fontSize: 16, fontWeight: 600, ":hover": { bgcolor: 'transparent' }, ":focus": { bgcolor: 'transparent' }, ":active": { bgcolor: 'transparent' }, mb: 1 }} disableTouchRipple>
                                {user?.fullName}
                            </MenuItem>
                            <MenuItem onClick={handlePersonalInfo} sx={{ fontSize: 16, fontWeight: 600 }}>
                                Tài khoản
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleSignOut} sx={{ fontSize: 16, fontWeight: 600, color: red[500] }}>
                                Đăng xuất
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>

                <Box mt={8} width="100%" maxWidth="70%" height="50vh">
                    <img src={contest?.imageUrl} alt="contest" width="100%" height="100%" style={{ borderRadius: '8px', objectFit: 'cover' }} />
                </Box>
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
                        {contest?.name}
                    </Typography>
                </Box>
            </Box>

            <Box id="rules" textAlign="center" pt={8} width="100%">
                <Typography textTransform="uppercase" fontWeight={600} fontSize={40} color={red[500]}>
                    Cuộc thi kết thúc trong
                </Typography>
                <Box display="flex" justifyContent="center" gap={3} mt={4}>
                    {[remainingTime.days, remainingTime.hours, remainingTime.minutes, remainingTime.seconds].map(
                        (value, index) => (
                            <CountdownBox key={index} value={value} index={index} />
                        )
                    )}
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
                        '&:disabled': {
                            backgroundColor: gray[300],
                            color: white[50],
                        },
                    }}
                    onClick={() => setOpenParticipatingModal(true)}
                    disabled={isDisable}
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
                    onClick={() => setOpenRulesModal(true)}
                >
                    <Typography fontWeight={600} fontSize={24} color={red[500]}>
                        Thể lệ
                    </Typography>
                </Button>
            </Box>

            <Box id='rankingTable' display="flex" justifyContent="center" alignItems="flex-start" width="100%" height={'80vh'} gap={4} py={4}>
                <Box
                    sx={{
                        backgroundImage: `url(${require("../../../assets/Rank-card.png")})`,
                        backgroundSize: 'cover',
                        width: '100%',
                        maxWidth: '20%',
                        height: '100%',
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
                        mb={2}
                        py={1}
                    >
                        <Typography fontWeight={600} fontSize={26} color={red[600]}>
                            {participants.length}
                        </Typography>
                        <Typography fontWeight={600} fontSize={20} color={black[900]}>
                            lượt tham gia
                        </Typography>
                    </Box>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    width="100%"
                    maxWidth="60%"
                    height="100%"
                >
                    <Typography fontWeight={600} fontSize={32} color={black[900]}>
                        Danh sách thí sinh
                    </Typography>

                    <Box
                        display="flex"
                        flexDirection="column"
                        gap={2}
                        flexGrow={1}
                        my={3}
                    >
                        {paginatedData?.map((participant, index) => (
                            <RankCard
                                key={participant.id}
                                index={participants.indexOf(participant) + 1}
                                participant={participant}
                            />
                        ))}
                    </Box>

                    <Box display="flex" justifyContent="space-between" mt="auto">
                        <Button onClick={handlePrev} disabled={currentPage === 0}>
                            <Typography fontWeight={600} fontSize={18} color={currentPage === 0 ? gray[400] : red[500]}>
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
                <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent={'center'} gap={2} marginLeft={8}>
                    <Typography fontWeight={600} fontSize={26} color={white[50]} textTransform={'uppercase'}>
                        Ban tổ chức
                    </Typography>
                    <Typography fontWeight={600} fontSize={22} color={white[50]} textTransform={'none'}>
                        {contest?.organizationInformation?.orgName}
                    </Typography>
                    <Typography fontWeight={400} fontSize={18} color={white[50]}>
                        <span style={{ fontWeight: 'bold' }}>Địa chỉ:</span> {contest?.organizationInformation?.orgAddress}
                    </Typography>
                    <Typography fontWeight={400} fontSize={18} color={white[50]}>
                        <span style={{ fontWeight: 'bold' }}>Điện thoại:</span> {contest?.organizationInformation?.orgPhoneNumber}
                    </Typography>
                    <Typography fontWeight={400} fontSize={18} color={white[50]}>
                        <span style={{ fontWeight: 'bold' }}>Email:</span> {contest?.organizationInformation?.orgEmail}
                    </Typography>
                </Box>

                <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent={'center'} gap={2} marginRight={8}>
                    <Typography fontWeight={600} fontSize={26} color={white[50]} textTransform={'uppercase'}>
                        Đơn vị lập trình
                    </Typography>
                    <Typography fontWeight={600} fontSize={22} color={white[50]} textTransform={'none'}>
                        Công ty Cổ phần Kontext
                    </Typography>
                    <Typography fontWeight={400} fontSize={18} color={white[50]}>
                        <span style={{ fontWeight: 'bold' }}>Địa chỉ:</span> Khu phố 6, Phường Linh Trung, TP. Thủ Đức, Việt Nam
                    </Typography>
                    <Typography fontWeight={400} fontSize={18} color={white[50]}>
                        <span style={{ fontWeight: 'bold' }}>Điện thoại:</span> 02837252002
                    </Typography>
                    <Typography fontWeight={400} fontSize={18} color={white[50]}>
                        <span style={{ fontWeight: 'bold' }}>Email:</span> kontext.company@gmail.com
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
            <PaticipatingModal
                contest={contest}
                open={openParticipatingModal}
                onClose={handleOnClose}
                onSubmissionSuccess={() => setIsConfirmModalOpen(true)}
            />
            <RulesModal
                open={openRulesModal}
                onClose={() => setOpenRulesModal(false)}
                rules={contest?.ruleDescription}
            />
            <ConfirmModal
                open={isConfirmModalOpen}
                onClose={() => setIsConfirmModalOpen(false)}
                title="Xác nhận thanh toán"
                message={`Bạn đã hoàn thành thủ tục thanh toán?`}
                onConfirm={handleConfirm}
            />
        </Box>
    );
}

export default DetailContest;