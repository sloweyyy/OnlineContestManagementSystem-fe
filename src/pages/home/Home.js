import { Box, Typography } from '@mui/material'
import React from 'react'
import AnalysisCard from '../../features/authentication/components/home/AnalysisCard'
import { CalendarMonth, CheckCircleRounded, SignalCellularAltRounded } from '@mui/icons-material'
import { red, white } from '../../config/theme/themePrintives'
import ExperienceNow from '../../features/authentication/components/home/ExperienceNow'

const iconStyle = {
    fontSize: 26,
    color: white[50],
    backgroundColor: red[500],
    borderRadius: 1,
    padding: 1
}

const Home = () => {
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    margin: '10px'
                }}
            >
                <AnalysisCard title="Sắp diễn ra" count={10} icon={<CalendarMonth sx={iconStyle} />} />
                <AnalysisCard title="Đang diễn ra" count={100} icon={<CalendarMonth sx={iconStyle} />} />
                <AnalysisCard title="7 ngày qua" count={10} icon={<SignalCellularAltRounded sx={iconStyle} />} />
                <AnalysisCard title="7 ngày qua" count={10} icon={<SignalCellularAltRounded sx={iconStyle} />} />
            </Box>

            <Box>
                <ExperienceNow />
                <Box
                    sx={{
                        width: '50%',
                        backgroundColor: red[500],
                    }}
                >

                </Box>
            </Box>
        </Box>
    )
}

export default Home