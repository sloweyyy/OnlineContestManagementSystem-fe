import { Box, Divider, IconButton, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import CustomTextField from '../user-profile/CustomTextField'
import { Clear, EmojiEvents, Star, Recommend, ImageSearch } from '@mui/icons-material';
import { brown, gray, white, yellow } from '../../config/theme/themePrintives';
import CloudinaryService from '../../services/cloudinary.service';

const PrizeCard = ({
    index,
    name,
    value,
    amount,
    description,
    imageUrl,
    onChange,
    onDelete,
}) => {
    const fileInputRef = useRef(null);

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

    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const uploadedImageUrl = await CloudinaryService.uploadImage(file);
            if (uploadedImageUrl) {
                onChange('imageUrl', uploadedImageUrl);
            }
        }
    };

    const formatCurrency = (value) => {
        if (!value) return '';
        const formattedValue = value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return formattedValue;
    };

    const parseCurrency = (value) => {
        if (!value) return 0;
        const cleanedValue = value.replace(/\./g, '');
        return parseInt(cleanedValue, 10);
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
                <Box
                    sx={{
                        flex: 1,
                        height: '35vh',
                        backgroundColor: gray[200],
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 2,
                        borderRadius: 1,
                        position: 'relative',
                        cursor: 'pointer',
                        overflow: 'hidden',
                    }}
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                >
                    {imageUrl ? (
                        <>
                            <img
                                src={imageUrl}
                                alt="uploaded"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s',
                                    '&:hover': {
                                        opacity: 1,
                                    },
                                }}
                            >
                                <ImageSearch sx={{ color: white[50], fontSize: 50 }} />
                            </Box>
                        </>
                    ) : (
                        <>
                            <ImageSearch sx={{ color: gray[500], fontSize: 50 }} />
                        </>
                    )}
                    <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                </Box>
                {/* Prize Information */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 2 }}>
                        {/* Prize Name */}
                        <CustomTextField
                            label='Giá trị giải thưởng (VND)'
                            placeholder='Giá trị giải thưởng'
                            type='text'
                            value={value ? formatCurrency(value) : ''}
                            onChange={(e) => onChange('value', parseCurrency(e.target.value))}
                            onBlur={(e) => onChange('value', parseCurrency(e.target.value))}
                            fullWidth
                        />
                        {/* Prize Number */}
                        <CustomTextField
                            label='Số lượng giải'
                            placeholder='Số lượng giải'
                            type='number'
                            value={amount}
                            onChange={(e) => onChange('amount', e.target.value)}
                            fullWidth
                        />
                    </Box>
                    {/* Prize Description */}
                    <CustomTextField
                        label='Mô tả giải thưởng'
                        placeholder='Mô tả giải thưởng'
                        value={description}
                        onChange={(e) => onChange('description', e.target.value)}
                        multiline
                        rows={5}
                        fullWidth
                        type='text'
                    />
                </Box>
            </Box>

            <Divider sx={{ marginTop: 4, marginBottom: 3, borderWidth: 1, borderColor: gray[200] }} />
        </Box>
    );
};

export default PrizeCard;
