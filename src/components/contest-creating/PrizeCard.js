import { Box, Divider, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomTextField from '../user-profile/CustomTextField'
import { Clear, EmojiEvents, Star, Recommend } from '@mui/icons-material';
import { brown, gray, yellow } from '../../config/theme/themePrintives';

const PrizeCard = ({
    index,
    name,
    value,
    number,
    description,
    onChange,
    onDelete,
}) => {
    const [image, setImage] = useState(null);

    const handleSetIconByName = () => {
        switch (name) {
            case 'Giải nhất':
                return <EmojiEvents sx={{ color: yellow[500] }} />
            case 'Giải nhì':
                return <Star sx={{ color: gray[300] }} />
            case 'Giải ba':
                return <Star sx={{ color: brown[300] }} />
            case 'Giải khuyến khích':
                return <Recommend />
            default:
                return null;
        }
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
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, justifyContent: 'space-between', alignItems: 'center' }} >
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    <Typography sx={{ fontSize: 18, fontWeight: 600, marginBottom: 2 }}>
                        {name}
                    </Typography>
                    {handleSetIconByName()}
                </Box>
                {index !== 0 && (
                    <IconButton
                        onClick={onDelete}
                        sx={{
                            color: gray[400],
                            width: '30px',
                            height: '30px',
                            border: '2px solid',
                            borderColor: gray[400],
                        }}
                    >
                        <Clear />
                    </IconButton>
                )}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
                {/* Image */}
                <Box sx={{ flex: 1, backgroundColor: gray[200], display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 2, borderRadius: 1 }}>
                    {image ? (
                        <img src={image} alt="Uploaded" style={{ width: '100%', height: 'auto' }} />
                    ) : (
                        <Typography sx={{ color: gray[600], marginBottom: 2 }}>
                            Chọn hình ảnh từ máy của bạn
                        </Typography>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ marginTop: 8 }}
                    />
                </Box>
                {/* Prize Information */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 2 }}>
                        {/* Prize Name */}
                        <CustomTextField
                            label='Giá trị giải thưởng (VND)'
                            placeholder='Giá trị giải thưởng'
                            value={value}
                            onChange={(e) => onChange('value', e.target.value)}
                            fullWidth
                        />
                        {/* Prize Number */}
                        <CustomTextField
                            label='Số lượng giải'
                            placeholder='Số lượng giải'
                            type='number'
                            value={number}
                            onChange={(e) => onChange('number', e.target.value)}
                        />
                    </Box>
                    {/* Prize Description */}
                    <CustomTextField
                        label='Mô tả giải thưởng'
                        placeholder='Mô tả giải thưởng'
                        value={description}
                        onChange={(e) => onChange('description', e.target.value)}
                        multiline
                        rows={4}
                    />
                </Box>
            </Box>

            <Divider sx={{ marginTop: 4, marginBottom: 3, borderWidth: 1, borderColor: gray[200] }} />
        </Box>
    );
};

export default PrizeCard;
