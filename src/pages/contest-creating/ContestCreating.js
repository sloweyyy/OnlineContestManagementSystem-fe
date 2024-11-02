import { Box, Typography, TextField, Autocomplete, Button } from '@mui/material';
import React, { useState } from 'react';
import { black, gray, red, white } from '../../config/theme/themePrintives';
import CustomTextField from '../../components/user-profile/CustomTextField';
import CustomAutocomplete from '../../components/contest-creating/CustomAutocomplete';
import PrizeCard from '../../components/contest-creating/PrizeCard';

const ContestCreating = () => {
    const [skillsRequirement, setSkillsRequirement] = useState([]);
    const [prizes, setPrizes] = useState([{ value: '', number: '', description: '' }]);
    const [image, setImage] = useState(null);

    const [options, setOptions] = useState([
        { value: 'programming', label: 'Lập trình' },
        { value: 'design', label: 'Thiết kế' },
        { value: 'writing', label: 'Viết lách' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'communication', label: 'Giao tiếp' },
        { value: 'teamwork', label: 'Làm việc nhóm' },
        { value: 'problem-solving', label: 'Giải quyết vấn đề' },
    ]);

    const handleSkillsRequirementChange = (event, newValue) => {
        const newOptions = newValue.filter((option) =>
            typeof option === 'string' && !options.some(opt => opt.label === option)
        ).map(option => ({ value: option.toLowerCase(), label: option }));

        setOptions([...options, ...newOptions]);
        setSkillsRequirement(newValue);
    };

    const prizeLevels = ['Giải nhất', 'Giải nhì', 'Giải ba', 'Giải khuyến khích'];

    const handleAddPrize = () => {
        setPrizes([...prizes, { value: '', number: 1, description: '' }]);
    };

    const handlePrizeChange = (index, field, value) => {
        const updatedPrizes = [...prizes];
        updatedPrizes[index][field] = value;
        setPrizes(updatedPrizes);
    };

    const handleDeletePrize = (index) => {
        const updatedPrizes = prizes.filter((prize, i) => i !== index);
        setPrizes(updatedPrizes);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 4 }}>
            <Typography marginBottom={2} fontSize={24} fontWeight={600}>Tạo cuộc thi</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginBottom: 4 }}>
                {/* Contest Section */}
                <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: gray[500], marginBottom: 2 }}>
                    Cấu hình cuộc thi
                </Typography>

                <Box sx={{ display: 'flex', gap: 4 }}>
                    {/* Image */}
                    <Box sx={{ flex: 1, backgroundColor: gray[200], display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 2, borderRadius: 1 }}>
                        {image ? (
                            <img src={image} alt="Uploaded" style={{ width: '100%', height: 'auto' }} />
                        ) : (
                            <Typography sx={{ color: gray[600], marginBottom: 2 }}>
                                Chọn hình ảnh từ tính của bạn
                            </Typography>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ marginTop: 8 }}
                        />
                    </Box>

                    {/* Contest Information */}
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {/* Contest Name */}
                        <CustomTextField label="Tên cuộc thi" placeholder="Tên cuộc thi" />

                        {/* Contest Description */}
                        <CustomTextField label="Thể lệ cuộc thi" placeholder="Thể lệ cuộc thi" multiline rows={4} />

                        {/* Start Date and Ending Date */}
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                            <CustomTextField label="Thời gian bắt đầu" placeholder="Thời gian bắt đầu" type="datetime-local" />
                            <CustomTextField label="Thời gian kết thúc" placeholder="Thời gian kết thúc" type="datetime-local" />
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* Organiser Section */}
            <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: gray[500], marginBottom: 2 }}>
                Thông tin ban tổ chức
            </Typography>

            {/* Organiser Name */}
            <CustomTextField label="Tên ban tổ chức" placeholder="Tên ban tổ chức" />

            {/* Phone Number and Email */}
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, marginY: 2 }}>
                <CustomTextField label="Số điện thoại" placeholder="Số điện thoại" type='tel' />
                <CustomTextField label="Email" placeholder="Email" type='email' />
            </Box>

            {/* Organiser Address */}
            <CustomTextField label="Địa chỉ" placeholder="Địa chỉ" />

            {/* Participant Section */}
            <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: gray[500], marginY: 2 }}>
                Thông tin thí sinh
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 2, marginBottom: 2 }}>
                <CustomTextField label="Số lượng thí sinh tối thiểu" placeholder="Số lượng thí sinh tối thiểu" type="number" />
                <CustomTextField label="Số lượng thí sinh tối đa" placeholder="Số lượng thí sinh tối đa" type="number" />
            </Box>

            {/* Skills Requirement Section */}
            <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 2 }}>
                <CustomAutocomplete
                    label="Kỹ năng cần thiết"
                    value={skillsRequirement}
                    onChange={handleSkillsRequirementChange}
                    options={options}
                />
            </Box>

            {/* Prize Information  */}
            <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: gray[500], marginBottom: 2, marginTop: 4 }}>
                Thông tin giải thưởng
            </Typography>

            {/* Prize Card Section */}
            {prizes.map((prize, index) => (
                <PrizeCard
                    key={index}
                    index={index}
                    name={prizeLevels[index]}
                    value={prize.value}
                    number={prize.number}
                    description={prize.description}
                    onChange={(field, value) => handlePrizeChange(index, field, value)}
                    onDelete={() => handleDeletePrize(index)}
                />
            ))}

            {/* Add Button */}
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '100%', gap: 2 }}>
                <Button sx={{ textTransform: 'none', paddingY: '8px', paddingX: '24px', backgroundColor: red[500], color: white[50], fontSize: 16, fontWeight: 600, ":disabled": { backgroundColor: gray[200], color: gray[400] } }} onClick={handleAddPrize} disabled={prizes.length === 4}>
                    Thêm giải thưởng
                </Button>
            </Box>

            {/* Button Section */}
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%', marginTop: 4, gap: 2, marginBottom: 4 }}>
                <Button sx={{ textTransform: 'none', paddingY: '8px', paddingX: '24px', backgroundColor: gray[200], color: black[900], fontSize: 16, fontWeight: 600, marginLeft: 2 }}>Hủy</Button>
                <Button sx={{ textTransform: 'none', paddingY: '8px', paddingX: '24px', backgroundColor: red[500], color: white[50], fontSize: 16, fontWeight: 600 }}>Thêm cuộc thi</Button>
            </Box>
        </Box>
    );
};

export default ContestCreating;
