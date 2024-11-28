import { Box, Modal, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { black, gray, red, white, } from '../../config/theme/themePrintives';
import AdminService from '../../services/admin.service';
import { toast } from 'react-toastify';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: 4,
    borderRadius: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    overflowY: 'auto',
    scrollbarWidth: 'none',
};

const CustomInfoSection = ({ title, value }) => {
    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography sx={{ color: black[900], fontWeight: 600, fontSize: 16 }}>
                {title}
            </Typography>
            <Typography
                sx={{
                    color: gray[400],
                    fontSize: 16,
                    fontWeight: 400,
                    paddingX: 2,
                    paddingY: 1.5,
                    border: `1px solid ${gray[200]}`,
                    borderRadius: '8px',
                }}
            >
                {value}
            </Typography>
        </Box>
    );
};

const ContestDetailModal = ({ open, onClose, contest, handleApprove, handleReject }) => {
    const [isLoading, setIsLoading] = useState(false);
    const isDisabled = contest?.status === 'pending' ? false : true;

    const handleApproveContest = async () => {
        setIsLoading(true);
        handleApprove(contest.id);
        setIsLoading(false);
    }

    const handleRejectContest = async () => {
        setIsLoading(true);
        handleReject(contest.id);
        setIsLoading(false);
    }

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title">
            <Box sx={modalStyle}>
                {/* Title */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography variant="h4">Chi tiết cuộc thi</Typography>
                    <Typography variant="body3" sx={{ color: gray[400] }}>Thông tin chi tiết của cuộc thi</Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        height: 300,
                        gap: 2,
                    }}
                >
                    {/* Contest Image */}
                    <Box
                        component="img"
                        src={contest?.imageUrl}
                        alt={contest?.name}
                        sx={{
                            flex: 1,
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: 1,
                        }}
                    />
                    {/* Contest Detail Info */}
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'flex-start' }}>
                        <CustomInfoSection title="Tên cuộc thi" value={contest?.name} />
                        <Box
                            sx={{
                                flex: 1,
                                overflow: 'auto',
                                maxHeight: 300,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                            }}
                        >
                            <Typography sx={{ color: black[900], fontWeight: 600, fontSize: 16 }}>
                                Thể lệ cuộc thi
                            </Typography>
                            <Typography
                                sx={{
                                    color: gray[400],
                                    fontSize: 16,
                                    fontWeight: 400,
                                    paddingX: 2,
                                    paddingY: 1.5,
                                    border: `1px solid ${gray[200]}`,
                                    borderRadius: '8px',
                                    overflowY: 'auto',
                                    scrollbarWidth: 'none',
                                }}
                            >
                                {contest?.ruleDescription}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Information Sections */}
                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 2 }}>
                    <CustomInfoSection title="Tên ban tổ chức" value={contest?.organizationInformation?.orgName} />
                    <CustomInfoSection title="Email" value={contest?.organizationInformation?.orgEmail} />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 2 }}>
                    <CustomInfoSection title="Số điện thoại" value={contest?.organizationInformation?.orgPhoneNumber} />
                    <CustomInfoSection title="Địa chỉ chi tiết" value={contest?.organizationInformation?.orgAddress} />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 2 }}>
                    <CustomInfoSection title="Thời gian bắt đầu" value={new Date(contest?.startDate).toLocaleDateString('vi-VN')} />
                    <CustomInfoSection title="Thời gian kết thúc" value={new Date(contest?.endDate).toLocaleDateString('vi-VN')} />
                </Box>
                {/* Button */}
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 2, mt: 4 }}>
                    <Button
                        sx={{
                            color: white[50],
                            bgcolor: black[900],
                            ":hover": { bgcolor: black[400] },
                            fontWeight: 600,
                            fontSize: 14,
                            textTransform: 'none',
                            paddingX: 4,
                            '&:disabled': {
                                bgcolor: gray[200],
                                color: black[100],
                            },
                        }}
                        disabled={isDisabled || isLoading}
                        onClick={handleRejectContest}
                    >
                        Không phê duyệt
                    </Button>

                    <Button
                        sx={{
                            color: white[50],
                            bgcolor: red[500],
                            ":hover": { bgcolor: red[400] },
                            fontWeight: 600,
                            fontSize: 14,
                            textTransform: 'none',
                            paddingX: 4,
                            '&:disabled': {
                                bgcolor: gray[200],
                                color: black[100],
                            },
                        }}
                        disabled={isDisabled || isLoading}
                        onClick={handleApproveContest}
                    >
                        Phê duyệt
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default ContestDetailModal;
