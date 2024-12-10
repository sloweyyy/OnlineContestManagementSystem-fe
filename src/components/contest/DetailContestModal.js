import { Modal, Box, Typography, Button, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ContestService from '../../services/contest.service'
import { black, gray, white, red } from '../../config/theme/themePrintives'
import { Cancel, CloudDownload, MoreVert } from '@mui/icons-material'
import RegistrationService from '../../services/registration.service'
import { DataGrid } from '@mui/x-data-grid'
import { toast } from 'react-toastify'

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
    width: '85vw',
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

const columns = [
    { field: 'id', headerName: '#', flex: 0.5, align: 'center', headerAlign: 'center' },
    { field: 'name', headerName: 'Tên', flex: 1 },
    {
        field: 'dob',
        headerName: 'Ngày sinh',
        flex: 1,
    },
    { field: 'email', headerName: 'Email', flex: 1.5 },
    { field: 'registrationDate', headerName: 'Ngày đăng ký', flex: 1.2 },
    { field: 'status', headerName: 'Trạng thái', flex: 1 },
    {
        field: 'action',
        headerName: '',
        flex: 0.5,
        renderCell: (params) => (
            <IconButton>
                <MoreVert />
            </IconButton>
        ),
        align: 'center',
        headerAlign: 'center',
    },
];

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
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const fetchParticipants = async () => {
            const response = await RegistrationService.getParticipantsByContestId(contest._id);
            if (response.message) {
                console.log(response);
            } else {
                setParticipants(response);
            }
        }

        fetchParticipants();
    }, [contest]);

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

    const formatStatus = (status) => {
        switch (status) {
            case 'Pending':
                return 'Chờ thanh toán';
            case 'Withdrawn':
                return 'Đã hủy';
            case 'Paid':
                return 'Đã thanh toán';
            default:
                return 'Không xác định';
        }
    };

    const rows = Array.isArray(participants) ? participants.map((participant, index) => ({
        id: index + 1,
        name: participant.name,
        dob: new Date(participant.dateOfBirth).toLocaleDateString('vi-VN'),
        email: participant.email,
        registrationDate: new Date(participant.registrationDate).toLocaleDateString('vi-VN'),
        status: formatStatus(participant.status),
    })) : [];

    const paginationModel = { page: 0, pageSize: 5 };

    const handleExportExcel = async () => {
        const response = await RegistrationService.exportExcel(contest._id);

        if (response) {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${contestDetail?.name}.xlsx`);
            document.body.appendChild(link);
            link.click();

            toast.success('Xuất file thành công');
        }
    }

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
                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 2, marginBottom: 2 }}>
                    <CustomInfoSection title="Địa chỉ chi tiết" value={contestDetail?.organizationInformation?.orgAddress} />
                </Box>

                {/* Participants Table */}

                <Typography sx={title}>
                    Danh sách thí sinh
                </Typography>
                <Typography sx={subtitles}>
                    Danh sách thí sinh đã đăng ký cuộc thi
                </Typography>

                <Box marginTop={3}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        disableColumnMenu={true}
                        localeText={{
                            MuiTablePagination: {
                                labelRowsPerPage: 'Số hàng mỗi bảng',
                                labelDisplayedRows: ({ from, to, count }) => `${from}–${to} trên ${count !== -1 ? count : `hơn ${to}`}`,
                            },
                        }}
                        sx={{
                            width: '100%',
                            height: 400,
                            border: `1px solid ${gray[200]}`,
                            '& .MuiDataGrid-columnHeader': {
                                backgroundColor: gray[200],
                                color: black[900],
                                fontWeight: 'bold',
                                fontSize: '16px',
                                outline: 'none',
                            },
                            '& .MuiDataGrid-columnHeaderTitle': {
                                fontWeight: '600',
                            },
                            '& .MuiDataGrid-cell': {
                                outline: 'none',
                            },
                            '& .MuiDataGrid-row:hover': {
                                backgroundColor: 'transparent',
                            },
                            '& .MuiDataGrid-root': {
                                border: 'none',
                            },
                            '& .MuiDataGrid-selectedRowCount': {
                                visibility: 'hidden',
                            },
                            '& .MuiDataGrid-checkboxInput.Mui-checked': {
                                color: 'inherit',
                            },
                            '& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within': {
                                outline: 'none',
                            },
                            '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within': {
                                outline: 'none',
                            },
                            '& .MuiDataGrid-row:hover': {
                                backgroundColor: 'transparent',
                            },
                            '& .MuiDataGrid-row.Mui-selected': {
                                backgroundColor: 'transparent !important',
                            },
                        }}
                    />
                </Box>

                {/* Button */}
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 2, mt: 4 }}>
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
                        endIcon={<Cancel />}
                        onClick={handleClose}
                    >
                        Đóng
                    </Button>

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
                        onClick={handleExportExcel}
                    >
                        Xuất chi tiết cuộc thi
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default DetailContestModal