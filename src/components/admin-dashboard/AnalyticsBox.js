import { Box, Typography } from '@mui/material'
import React from 'react'
import { gray, red, green, white, black } from '../../config/theme/themePrintives'
import { AnalyticsRounded, ContactPageRounded, GroupRounded } from '@mui/icons-material'

const AnalyticsBox = ({ title, value, growth }) => {
    const setIcon = () => {
        if (title === 'Doanh thu') {
            return (
                <Box sx={{ color: white[50], bgcolor: black[900], borderRadius: 100, width: 30, height: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <AnalyticsRounded fontSize='small' />
                </Box>
            )
        }
        if (title === 'Cuộc thi') {
            return (
                <Box sx={{ color: white[50], bgcolor: black[900], borderRadius: 100, width: 30, height: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ContactPageRounded fontSize='small' />
                </Box>
            )
        }
        if (title === 'Số lượng thí sinh') {
            return (
                <Box sx={{ color: white[50], bgcolor: black[900], borderRadius: 100, width: 30, height: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <GroupRounded fontSize='small' />
                </Box>
            )
        }
    }

    const formatValue = (value) => {
        return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: 1, borderColor: gray[200], borderRadius: 2, padding: 2, gap: '12px' }}>
            {setIcon()}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography sx={{ fontSize: 28, fontWeight: 600 }}>{formatValue(value)}</Typography>
                <Typography sx={{ fontSize: 16, fontWeight: 600 }}>{title}</Typography>
            </Box>
            <Typography sx={{ color: growth < 0 ? red[400] : green[400], fontSize: 12, fontWeight: 400 }}>{growth}% so với hôm qua</Typography>
        </Box>
    )
}

export default AnalyticsBox