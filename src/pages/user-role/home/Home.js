import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AnalysisCard from '../../../components/home/AnalysisCard'
import { CalendarMonth, SignalCellularAltRounded } from '@mui/icons-material'
import { red, white } from '../../../config/theme/themePrintives'
import ExperienceNow from '../../../components/home/ExperienceNow'
import ReactPlayer from 'react-player'
import RecentContestsCard from '../../../components/home/RecentContestsCard'
import NewsCard from '../../../components/home/NewsCard'
import ContactCard from '../../../components/home/ContactCard'
import ContestService from '../../../services/contest.service'
import DashboardService from '../../../services/dashboard.service'

const iconStyle = {
    fontSize: 26,
    color: white[50],
    backgroundColor: red[500],
    borderRadius: 1,
    padding: 1
}

const Home = () => {
    const [contests, setContests] = useState([]);
    const [contestStatistics, setContestStatistics] = useState({
        comingSoon: 0,
        onBoarding: 0,
        totalParticipant: 0
    });
    // const [CommingSoonContestContest, setCommingSoonContest] = useState(null);
    // const [runningContest, setRunningContest] = useState(null);
    // const [numberOfRegistration, setNumberOfRegistration] = useState(null);

    useEffect(() => {
        const fetchContests = async () => {
            const contests = await ContestService.getContests();
            if (contests.message) {
                console.log(contests);
            } else {
                setContests(contests);
            }
        }

        fetchContests();
    }, []);

    // useEffect(() => {
    //     const now = new Date();

    //     const commingSoon = contests?.filter(contest => new Date(contest?.startDate) > now);
    //     const running = contests?.filter(contest => new Date(contest?.startDate) < now && new Date(contest?.endDate) > now);
    //     const number = contests?.filter(contest => new Date(contest?.startDate) < now && new Date(contest?.endDate) > now);

    //     setCommingSoonContest(commingSoon.length);
    //     setRunningContest(running.length);
    //     setNumberOfRegistration(number.length);
    // }, [contests]);

    useEffect(() => {
        const fetchContestStatistics = async () => {
            const comingSoon = await DashboardService.getComingSoonContests();
            const onBoarding = await DashboardService.getOnboardingContests();
            const totalParticipant = await DashboardService.getTotalParticipants();

            setContestStatistics({
                comingSoon: comingSoon.comingSoonContests,
                onBoarding: onBoarding.onBoardingContests,
                totalParticipant: totalParticipant
            });

            console.log(contestStatistics);
        }

        fetchContestStatistics();
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: 2,
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
                {/* TODO */}
                {/* total-contest-conming-soon */}
                <AnalysisCard title="Sắp diễn ra" count={contestStatistics?.comingSoon} icon={<CalendarMonth sx={iconStyle} />} isContest={true} />
                {/* total-contest-onboarding */}
                <AnalysisCard title="Đang diễn ra" count={contestStatistics?.onBoarding} icon={<CalendarMonth sx={iconStyle} />} isContest={true} />
                {/* total-participant */}
                <AnalysisCard title="Tổng số lượt thi" count={contestStatistics?.totalParticipant} icon={<SignalCellularAltRounded sx={iconStyle} />} isContest={false} />
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
                <RecentContestsCard contests={contests?.slice(0, 5)} />
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