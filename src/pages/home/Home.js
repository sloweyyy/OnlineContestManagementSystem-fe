import { Box, Typography } from '@mui/material'
import React from 'react'
import AnalysisCard from '../../components/home/AnalysisCard'
import { CalendarMonth, SignalCellularAltRounded } from '@mui/icons-material'
import { red, white } from '../../config/theme/themePrintives'
import ExperienceNow from '../../components/home/ExperienceNow'
import ReactPlayer from 'react-player'
import RecentContestsCard from '../../components/home/RecentContestsCard'
import NewsCard from '../../components/home/NewsCard'
import ContactCard from '../../components/home/ContactCard'

const iconStyle = {
    fontSize: 26,
    color: white[50],
    backgroundColor: red[500],
    borderRadius: 1,
    padding: 1
}

const Home = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: 4,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 2,
                }}
            >
                <AnalysisCard title="Sắp diễn ra" count={10} icon={<CalendarMonth sx={iconStyle} />} isContest={true} />
                <AnalysisCard title="Đang diễn ra" count={1000} icon={<CalendarMonth sx={iconStyle} />} isContest={true} />
                <AnalysisCard title="7 ngày qua" count={10000} icon={<SignalCellularAltRounded sx={iconStyle} />} isContest={false} />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 2,
                }}
            >
                <ExperienceNow />
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        padding: '12px',
                        borderRadius: '12px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        height: '324px',
                    }}
                >
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        width="100%"
                        height="100%"
                        controls
                    />
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2,
                }}
            >
                <RecentContestsCard contests={[]} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                    }}
                >
                    <NewsCard />
                    <ContactCard />
                </Box>
            </Box>
        </Box>
    )
}

export default Home