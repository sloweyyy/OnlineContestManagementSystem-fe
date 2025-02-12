import { Close } from '@mui/icons-material'
import { Box, IconButton, Modal, Typography, Link, Button } from '@mui/material'
import React, { useState } from 'react'
import { CircleOutlined, CheckCircle } from '@mui/icons-material'
import CustomTextField from '../../components/user-profile/CustomTextField'
import CustomSelect from '../../components/contest-creating/CustomSelect'
import { gray, red, white } from '../../config/theme/themePrintives'
import { toast } from 'react-toastify'
import RegisterService from '../../services/registration.service'
import { useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';

const WorkingUnit = [
    { label: 'Trường Đại học Công nghệ', value: 'tech_university' },
    { label: 'Trường Đại học Kinh tế', value: 'economics_university' },
    { label: 'Trường Đại học Ngoại ngữ', value: 'language_university' },
];

const Jobs = [
    { label: 'Sinh viên', value: 'student' },
    { label: 'Giáo viên', value: 'teacher' },
    { label: 'Nhân viên', value: 'employee' },
];

const Sexual = [
    { label: 'Nam', value: 'male' },
    { label: 'Nữ', value: 'female' },
    { label: 'Khác', value: 'other' },
];

const PaticipatingModal = ({ contest, open, onClose, onSubmissionSuccess }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [identity, setIdentity] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDob] = useState('');
    const [selectedJob, setSelectedJob] = useState('');
    const [selectedSexual, setSelectedSexual] = useState('');
    const [selectedWorkingUnit, setSelectedWorkingUnit] = useState('');
    const { user } = useSelector(state => state.user);
    const [loading, setLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false)

    const handleJobChange = (event) => {
        setSelectedJob(event.target.value);
    };

    const handleSexualChange = (event) => {
        setSelectedSexual(event.target.value);
    };

    const handleWorkingUnitChange = (event) => {
        setSelectedWorkingUnit(event.target.value);
    };

    const handleToggleCheck = () => {
        setIsChecked(!isChecked)
    }

    const handleSubmission = async () => {
        setLoading(true);

        if (!name) {
            toast.error('Vui lòng nhập họ và tên');
        } else if (!email) {
            toast.error('Vui lòng nhập email');
        } else if (!dob) {
            toast.error('Vui lòng nhập ngày sinh');
        } else if (contest?.participantInformationRequirements.includes('số điện thoại') && !phone) {
            toast.error('Vui lòng nhập số điện thoại');
        } else if (contest?.participantInformationRequirements.includes('giới tính') && !selectedSexual) {
            toast.error('Vui lòng chọn giới tính');
        } else if (contest?.participantInformationRequirements.includes('địa chỉ') && !address) {
            toast.error('Vui lòng nhập địa chỉ');
        } else if (contest?.participantInformationRequirements.includes('cmnd/cccd') && !identity) {
            toast.error('Vui lòng nhập số CMND/CCCD');
        } else if (contest?.participantInformationRequirements.includes('nghề nghiệp') && !selectedJob) {
            toast.error('Vui lòng chọn nghề nghiệp');
        } else if (contest?.participantInformationRequirements.includes('đơn vị công tác') && !selectedWorkingUnit) {
            toast.error('Vui lòng chọn đơn vị công tác');
        } else {
            let info = {};

            if (contest?.participantInformationRequirements.includes('số điện thoại')) {
                info.phone = phone;
            }
            if (contest?.participantInformationRequirements.includes('địa chỉ')) {
                info.address = address;
            }
            if (contest?.participantInformationRequirements.includes('cmnd/cccd')) {
                info.identity = identity;
            }
            if (contest?.participantInformationRequirements.includes('giới tính')) {
                info.sexual = selectedSexual;
            }
            if (contest?.participantInformationRequirements.includes('nghề nghiệp')) {
                info.job = selectedJob;
            }
            if (contest?.participantInformationRequirements.includes('đơn vị công tác')) {
                info.workingUnit = selectedWorkingUnit;
            }

            const participantInformation = {
                contestId: contest.id,
                userId: user.id,
                name,
                dateOfBirth: dob,
                email,
                additionalInfo: info,
            };

            try {
                const response = await RegisterService.registerContest(contest.id, participantInformation);
                if (response && response.paymentLink) {
                    window.open(response.paymentLink, '_blank');

                    if (onSubmissionSuccess) {
                        onSubmissionSuccess();
                    }
                } else {
                    toast.error('Không tìm thấy đường dẫn thanh toán. Vui lòng thử lại!');
                }
            } catch (error) {
                toast.error('Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại sau!');
            }
        }

        resetForm();
        setLoading(false);
        onClose();
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setIdentity('');
        setAddress('');
        setDob('');
        setSelectedJob('');
        setSelectedSexual('');
        setSelectedWorkingUnit('');
    };

    return (
        <Modal open={open} onClose={() => !loading && onClose()}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxHeight: '85%',
                    width: '40%',
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingY: 4,
                    paddingX: 4,
                    overflowY: 'auto',
                    scrollbarWidth: 'none',
                }}
            >
                {/* Title and Close Icon Button */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        marginBottom: 2,
                    }}
                >
                    <Typography fontSize={20} fontWeight={600} color={gray[500]}>
                        Cập nhật thông tin
                    </Typography>
                    <IconButton
                        disableRipple
                        sx={{
                            padding: 0,
                            ":hover": {
                                color: red[500]
                            }
                        }}
                        onClick={onClose}
                    >
                        <Close fontSize='medium' />
                    </IconButton>
                </Box>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: 2
                    }}
                >
                    {/* Content */}
                    <CustomTextField
                        type='text'
                        label='Họ và tên'
                        placeholder='Nhập họ và tên'
                        fullWidth
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <CustomTextField
                        type='email'
                        label='Email'
                        placeholder='Nhập email'
                        fullWidth
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    {contest?.participantInformationRequirements.includes('số điện thoại') && (
                        <CustomTextField
                            type='tel'
                            label='Số điện thoại'
                            placeholder='Nhập số điện thoại'
                            fullWidth
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                        />
                    )}

                    {contest?.participantInformationRequirements.includes('cmnd/cccd') && (
                        <CustomTextField
                            type='text'
                            label='Số CMND/CCCD'
                            placeholder='Nhập số CMND/CCCD'
                            fullWidth
                            value={identity}
                            onChange={(e) => setIdentity(e.target.value)}
                        />
                    )}
                    {contest?.participantInformationRequirements.includes('giới tính') && (
                        <CustomSelect
                            label='Giới tính'
                            value={selectedSexual}
                            onChange={handleSexualChange}
                            options={Sexual}
                            placeholder='Chọn giới tính'
                        />
                    )}

                    <CustomTextField
                        type='date'
                        label='Ngày sinh'
                        placeholder='Nhập ngày sinh'
                        fullWidth
                        onChange={(e) => setDob(e.target.value)}
                        value={dob}
                    />

                    {contest?.participantInformationRequirements.includes('nghề nghiệp') && (
                        <CustomSelect
                            label="Nghề nghiệp"
                            value={selectedJob}
                            onChange={handleJobChange}
                            options={Jobs}
                            placeholder="Chọn ngành nghề"
                        />
                    )}

                    {contest?.participantInformationRequirements.includes('đơn vị công tác') && (
                        <CustomSelect
                            label="Đơn vị công tác"
                            value={selectedWorkingUnit}
                            onChange={handleWorkingUnitChange}
                            options={WorkingUnit}
                            placeholder="Chọn đơn vị công tác"
                        />
                    )}
                    {contest?.participantInformationRequirements.includes('địa chỉ') && (
                        <CustomTextField
                            type='text'
                            label='Địa chỉ'
                            placeholder='Nhập địa chỉ'
                            fullWidth
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                        />
                    )}
                </Box>

                {/* Confirm Agreement Button */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '100%',
                        gap: 1,
                        marginTop: 4,
                    }}
                >
                    <IconButton
                        onClick={handleToggleCheck}
                        sx={{
                            borderRadius: '50%',
                            padding: 0,
                            color: isChecked ? red[500] : gray[500],
                        }}
                    >
                        {isChecked ? <CheckCircle /> : <CircleOutlined />}
                    </IconButton>
                    <Typography variant="body2" color="textSecondary">
                        Tôi hiểu và đồng ý với việc thu thập dữ liệu.
                        <Link href="#" underline="none" sx={{ color: red[500] }}>
                            Tìm hiểu thêm
                        </Link>
                    </Typography>
                </Box>
                {/* Confirm Button */}
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 4,
                    }}
                >
                    <Button
                        sx={{
                            paddingX: 4,
                            borderRadius: 1,
                            bgcolor: red[500],
                            color: 'white',
                            fontWeight: 400,
                            textTransform: 'none',
                            fontSize: 18,
                            border: `2px solid ${red[500]}`,
                            width: 150,
                            ":hover": {
                                bgcolor: white[50],
                                color: red[500],
                            },
                            ...(isChecked
                                ? {}
                                : {
                                    bgcolor: gray[300],
                                    color: gray[500],
                                    border: `2px solid ${gray[300]}`,
                                }),
                        }}
                        disabled={!isChecked || loading}
                        onClick={handleSubmission}
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Xác nhận'}
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default PaticipatingModal