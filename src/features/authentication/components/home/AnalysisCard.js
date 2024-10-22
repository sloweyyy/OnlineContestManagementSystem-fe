import { Box, Typography } from '@mui/material'
import React from 'react'
import { black, gray } from '../../../../config/theme/themePrintives'

//countup
const AnalysisCard = ({ title, count, icon }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '300px',
                height: '80px',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                margin: '10px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flex: 1,
                    gap: 1
                }}
            >
                <Typography sx={{ fontSize: 14, fontWeight: 400, color: gray[500] }}>{title}</Typography>
                <Typography sx={{ fontSize: 18, fontWeight: 600, color: black[900] }}>{count} Cuộc thi</Typography>
            </Box>
            <Box>
                {icon}
            </Box>
        </Box>
    )
}

export default AnalysisCard