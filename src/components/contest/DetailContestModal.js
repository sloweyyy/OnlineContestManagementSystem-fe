import { Modal, Box, Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ContestService from '../../services/contest.service'
import { black, gray, red, white } from '../../config/theme/themePrintives'
import { CloudDownload } from '@mui/icons-material'

const title = {
    color: black[900],
    fontWeight: 600,
    fontSize: 24,
    textAlign: 'left',
}

const subtitles = {
    color: gray[400],
    fontSize: 16,
    textAlign: 'left',
}

const body = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 300,
    gap: 2,
    marginTop: 2,
}

const image = {
    flex: 1,
    height: '100%',
    objectFit: 'cover',
    borderRadius: 1,
}

const modal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: 4,
    gap: 1,
    borderRadius: 1,
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    scrollbarWidth: 'none',
}

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
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                {value}
            </Typography>
        </Box>
    )
}

const DetailContestModal = ({ open, handleClose, contest }) => {
    const [contestDetail, setContestDetail] = useState(null);

    useEffect(() => {
        const fetchContestDetail = async () => {
            const response = await ContestService.getContestById(contest._id);
            if (response.message) {
                console.log(response);
            } else {
                setContestDetail(response);
            }
        }

        fetchContestDetail();
    }, [contest]);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modal}>
                <Typography sx={title}>
                    Chi tiết cuộc thi
                </Typography>
                <Typography sx={subtitles}>
                    Thông tin chi tiết của cuộc thi đã đăng ký
                </Typography>

                <Box sx={body}>
                    <Box
                        component="img"
                        src={contestDetail?.imageUrl}
                        alt={contestDetail?.name}
                        sx={image}
                    />

                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'flex-start' }}>
                        <CustomInfoSection title="Tên cuộc thi" value={contestDetail?.name} />
                        <Box sx={{ flex: 1, overflow: 'auto', maxHeight: 300, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography sx={{ color: black[900], fontWeight: 600, fontSize: 16 }}>
                                Thể lệ cuộc thi
                            </Typography>
                            <Typography sx={{ color: gray[400], fontSize: 16, fontWeight: 400, paddingX: 2, paddingY: 1.5, border: `1px solid ${gray[200]}`, borderRadius: '8px', overflowY: 'auto', scrollbarWidth: 'none' }}>
                                {contestDetail?.ruleDescription}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 2, marginTop: 2 }}>
                    <CustomInfoSection title="Tên ban tổ chức" value={contestDetail?.organizationInformation?.orgName} />
                    <CustomInfoSection title="Email" value={contestDetail?.organizationInformation?.orgEmail} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 2 }}>
                    <CustomInfoSection title="Số điện thoại" value={contestDetail?.organizationInformation?.orgPhoneNumber} />
                    <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 2 }}>
                        <CustomInfoSection title="Thời gian bắt đầu" value={new Date(contestDetail?.startDate).toLocaleDateString('vi-VN')} />
                        <CustomInfoSection title="Thời gian kết thúc" value={new Date(contestDetail?.endDate).toLocaleDateString('vi-VN')} />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 2 }}>
                    <CustomInfoSection title="Địa chỉ chi tiết" value={contestDetail?.organizationInformation?.orgAddress} />
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
                            paddingY: 1,
                            gap: 1,
                            '&:disabled': {
                                bgcolor: gray[200],
                                color: black[100],
                            },
                        }}
                        endIcon={<CloudDownload />}
                    >
                        Xuất danh sách thí sinh
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default DetailContestModal