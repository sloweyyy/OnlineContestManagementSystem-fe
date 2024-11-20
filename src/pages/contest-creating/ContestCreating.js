import { Box, Typography, Button } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { black, gray, red, white } from '../../config/theme/themePrintives';
import CustomTextField from '../../components/user-profile/CustomTextField';
import CustomAutocomplete from '../../components/contest-creating/CustomAutocomplete';
import PrizeCard from '../../components/contest-creating/PrizeCard';
import CustomSelectorAddressAutocomplete from '../../components/contest-creating/CustomSelectorAddressAutocomplete';
import { getProvinces, getDistrictsByProvinceCode, getWardsByDistrictCode } from 'vn-provinces';
import ContestService from '../../services/contest.service';
import { toast } from 'react-toastify';
import CloudinaryService from '../../services/cloudinary.service';
import useOrgAddress from '../../hooks/useOrgAddress';

const ContestCreating = () => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [communes, setCommunes] = useState([]);
    const [province, setProvince] = useState(null);
    const [district, setDistrict] = useState(null);
    const [commune, setCommune] = useState(null);
    const [detailAddress, setDetailAddress] = useState(null);

    const [contest, setContest] = useState({
        name: null,
        ruleDescription: null,
        startDate: null,
        endDate: null,
        minimumParticipant: null,
        maximumParticipant: null,
        prizes: [
            { name: 'Giải nhất', description: null, value: null, imageUrl: null, amount: null }
        ],
        participantInformationRequirements: [],
        organizationInformation: {
            orgName: null,
            orgPhoneNumber: null,
            orgEmail: null,
            orgAddress: null,
        },
        imageUrl: null,
    });

    const orgAddress = useOrgAddress(province, district, commune, detailAddress);

    useEffect(() => {
        setContest(prev => ({
            ...prev,
            organizationInformation: { ...prev.organizationInformation, orgAddress },
        }));
    }, [orgAddress]);

    const handleSubmitContest = async () => {
        if (validateContestData()) {
            try {
                const response = await ContestService.createContest(contest);
                if (response) {
                    toast.success('Tạo cuộc thi thành công');
                }
            } catch (error) {
                toast.error('Tạo cuộc thi thất bại');
            }
        }
    };

    const informationsRequirement = [
        'Số điện thoại',
        'Nghề nghiệp',
        'Đơn vị công tác',
        'CMND/CCCD',
        'Địa chỉ',
        'Giới tính',
    ];

    const handleInformationsRequirementChange = useCallback((event, newValue) => {
        const newSelections = newValue.filter(option => typeof option === 'string' && !contest.participantInformationRequirements.includes(option.toLowerCase()));
        setContest(prev => ({
            ...prev,
            participantInformationRequirements: [...prev.participantInformationRequirements, ...newSelections.map(opt => opt.toLowerCase())],
        }));
    }, [contest.participantInformationRequirements]);

    const validateContestData = () => {
        const { name, ruleDescription, startDate, endDate, organizationInformation } = contest;
        if (!name || !ruleDescription || !startDate || !endDate || !organizationInformation.orgName || !organizationInformation.orgEmail) {
            toast.error("Vui lòng điền đầy đủ thông tin");
            return false;
        }
        return true;
    };

    const prizeLevels = ['Giải nhất', 'Giải nhì', 'Giải ba', 'Giải khuyến khích'];

    const handleAddPrize = useCallback((index) => {
        setContest(prev => ({
            ...prev,
            prizes: [...prev.prizes, { name: prizeLevels[index], description: '', value: 0, imageUrl: '', amount: 1 }],
        }));
    }, [contest.prizes, prizeLevels]);

    const handlePrizeChange = useCallback((index, field, value) => {
        setContest(prev => ({
            ...prev,
            prizes: prev.prizes.map((prize, i) => i === index ? { ...prize, [field]: value } : prize),
        }));
    }, []);

    const handleDeletePrize = useCallback((index) => {
        setContest(prev => ({
            ...prev,
            prizes: prev.prizes.filter((_, i) => i !== index),
        }));
    }, []);

    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const uploadedImageUrl = await CloudinaryService.uploadImage(file);
            if (uploadedImageUrl) {
                setContest((prev) => ({
                    ...prev,
                    imageUrl: uploadedImageUrl,
                }));
            }
        }
    };

    useEffect(() => {
        async function fetchProvinces() {
            const provinceList = getProvinces();
            setProvinces(provinceList);
        }
        fetchProvinces();
    }, []);

    const handleProvinceChange = useCallback(async (event, newValue) => {
        setProvince(newValue);
        setDistrict(null);
        setCommune(null);

        if (newValue) {
            const districtList = getDistrictsByProvinceCode(newValue.code);
            setDistricts(districtList);
        } else {
            setDistricts([]);
        }
    }, []);

    const handleDistrictChange = useCallback(async (event, newValue) => {
        setDistrict(newValue);
        setCommune(null);

        if (newValue) {
            const communeList = getWardsByDistrictCode(newValue.code);
            setCommunes(communeList);
        } else {
            setCommunes([]);
        }
    }, []);

    const handleCommuneChange = (event, newValue) => {
        setCommune(newValue);
    };

    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 4 }}>
            <Typography marginBottom={2} fontSize={24} fontWeight={600}>Tạo cuộc thi</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginBottom: 4 }}>
                {/* Contest Section */}
                <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: gray[500], marginBottom: 2 }}>
                    Cấu hình cuộc thi
                </Typography>

                <Box sx={{ display: 'flex', gap: 4, flexDirection: 'row', alignItems: 'center' }}>
                    {/* Image */}
                    <Box sx={{ flex: 1, height: 300, backgroundColor: gray[200], display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 2, borderRadius: 1 }}>
                        {contest.imageUrl ? (
                            <img src={contest.imageUrl} alt="uploaded" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        ) : (
                            <>
                                <Typography sx={{ color: gray[600], marginBottom: 2 }}>
                                    Chọn hình ảnh từ tính của bạn
                                </Typography>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    style={{ marginTop: 8 }}
                                />
                            </>
                        )}
                    </Box>

                    {/* Contest Information */}
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {/* Contest Name */}
                        <CustomTextField label="Tên cuộc thi" placeholder="Tên cuộc thi" value={contest.name} onChange={(e) => setContest({ ...contest, name: e.target.value })} />

                        {/* Contest Description */}
                        <CustomTextField label="Thể lệ cuộc thi" placeholder="Thể lệ cuộc thi" multiline rows={4} value={contest.ruleDescription} onChange={(e) => setContest({ ...contest, ruleDescription: e.target.value })} />

                        {/* Start Date and Ending Date */}
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                            <CustomTextField label="Thời gian bắt đầu" type="datetime-local" value={contest.startDate} onChange={(e) => setContest({ ...contest, startDate: e.target.value })} />
                            <CustomTextField label="Thời gian kết thúc" type="datetime-local" value={contest.endDate} onChange={(e) => setContest({ ...contest, endDate: e.target.value })} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* Organiser Section */}
            <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: gray[500], marginBottom: 2 }}>
                Thông tin ban tổ chức
            </Typography>

            {/* Organiser Name */}
            <CustomTextField label="Tên ban tổ chức" placeholder="Tên ban tổ chức" value={contest.organizationInformation.orgName} onChange={(e) => setContest((prev) => ({ ...prev, organizationInformation: { ...prev.organizationInformation, orgName: e.target.value } }))} />

            {/* Phone Number and Email */}
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, marginY: 2 }}>
                <CustomTextField label="Số điện thoại" placeholder="Số điện thoại" value={contest.organizationInformation.orgPhoneNumber} onChange={(e) => setContest((prev) => ({ ...prev, organizationInformation: { ...prev.organizationInformation, orgPhoneNumber: e.target.value } }))} />
                <CustomTextField label="Email" placeholder="Email" value={contest.organizationInformation.orgEmail} onChange={(e) => setContest((prev) => ({ ...prev, organizationInformation: { ...prev.organizationInformation, orgEmail: e.target.value } }))} />
            </Box>

            {/* Province District Commune */}
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, marginY: 2 }}>
                <CustomSelectorAddressAutocomplete label="Tỉnh/Thành phố" value={province} onChange={handleProvinceChange} options={provinces} getOptionLabel={(option) => option.name} />
                <CustomSelectorAddressAutocomplete label="Quận/Huyện" value={district} onChange={handleDistrictChange} options={districts} getOptionLabel={(option) => option.name} />
                <CustomSelectorAddressAutocomplete label="Phường/Xã" value={commune} onChange={handleCommuneChange} options={communes} getOptionLabel={(option) => option.name} />
            </Box>

            {/* Organiser Address */}
            <CustomTextField
                label="Địa chỉ chi tiết"
                placeholder="Địa chỉ chi tiết"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
            />

            {/* Participant Section */}
            <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: gray[500], marginY: 2 }}>
                Thông tin thí sinh
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 2, marginBottom: 2 }}>
                <CustomTextField
                    label="Số lượng thí sinh tối thiểu"
                    placeholder="Số lượng thí sinh tối thiểu"
                    type="number"
                    value={contest.minimumParticipant}
                    onChange={(e) => setContest({ ...contest, minimumParticipant: e.target.value })}
                />
                <CustomTextField
                    label="Số lượng thí sinh tối đa"
                    placeholder="Số lượng thí sinh tối đa"
                    type="number"
                    value={contest.maximumParticipant}
                    onChange={(e) => setContest({ ...contest, maximumParticipant: e.target.value })}
                />
            </Box>

            {/* Information Requirement Section */}
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 2 }}>
                <CustomAutocomplete
                    label="Thông tin cần thiết"
                    value={contest.participantInformationRequirements}
                    onChange={handleInformationsRequirementChange}
                    options={informationsRequirement}
                />
            </Box>

            {/* Prize Information  */}
            <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: gray[500], marginBottom: 2, marginTop: 4 }}>
                Thông tin giải thưởng
            </Typography>

            {/* Prize Card Section */}
            {contest.prizes.map((prize, index) => (
                <PrizeCard
                    key={index}
                    index={index}
                    name={prizeLevels[index]}
                    value={prize.value}
                    amount={prize.amount}
                    description={prize.description}
                    imageUrl={prize.imageUrl}
                    onChange={(field, value) => handlePrizeChange(index, field, value)}
                    onDelete={() => handleDeletePrize(index)}
                />
            ))}

            {/* Add Button */}
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '100%', gap: 2 }}>
                <Button sx={{ textTransform: 'none', paddingY: '8px', paddingX: '24px', backgroundColor: red[500], color: white[50], fontSize: 16, fontWeight: 600, ":disabled": { backgroundColor: gray[200], color: gray[400] } }} onClick={() => handleAddPrize(contest.prizes.length)} disabled={contest.prizes.length === 4}>
                    Thêm giải thưởng
                </Button>
            </Box>

            {/* Button Section */}
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%', marginTop: 4, gap: 2, marginBottom: 4 }}>
                <Button sx={{ textTransform: 'none', paddingY: '8px', paddingX: '24px', backgroundColor: gray[200], color: black[900], fontSize: 16, fontWeight: 600, marginLeft: 2 }}>Hủy</Button>
                <Button sx={{ textTransform: 'none', paddingY: '8px', paddingX: '24px', backgroundColor: red[500], color: white[50], fontSize: 16, fontWeight: 600 }} onClick={handleSubmitContest}>Thêm cuộc thi</Button>
            </Box>
        </Box>
    );
};

export default ContestCreating;
