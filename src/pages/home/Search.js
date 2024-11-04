import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import { blue, gray, red, yellow, black } from '../../config/theme/themePrintives';
import SearchingContestCard from '../../components/home/SearchingContestCard';
import { Chat, Email, Phone } from '@mui/icons-material';
import { keyframes } from '@emotion/react';

const floatAnimation = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0); }
`;

const Search = () => {
    const contestData = [
        {
            title: 'Cuộc thi video clip “Việt Nam hạnh phúc - Happy Vietnam 2024" 1',
            timeStart: '10:00 ngày 10/10/2021',
            timeEnd: '10:00 ngày 20/10/2021',
            organizers: 'Cục Thông Tin Đối Ngoại 1',
            image: 'https://picsum.photos/200/300',
        },
        {
            title: 'Cuộc thi video clip “Việt Nam hạnh phúc - Happy Vietnam 2024" 2',
            timeStart: '10:00 ngày 10/10/2021',
            timeEnd: '10:00 ngày 20/10/2021',
            organizers: 'Cục Thông Tin Đối Ngoại 2',
            image: 'https://picsum.photos/200/300',
        },
        {
            title: 'Cuộc thi video clip “Việt Nam hạnh phúc - Happy Vietnam 2024" 3',
            timeStart: '10:00 ngày 10/10/2021',
            timeEnd: '10:00 ngày 20/10/2021',
            organizers: 'Cục Thông Tin Đối Ngoại 3',
            image: 'https://picsum.photos/200/300',
        },
        {
            title: 'Cuộc thi video clip “Việt Nam hạnh phúc - Happy Vietnam 2024" 4',
            timeStart: '10:00 ngày 10/10/2021',
            timeEnd: '10:00 ngày 20/10/2021',
            organizers: 'Cục Thông Tin Đối Ngoại 4',
            image: 'https://picsum.photos/200/300',
        },
        {
            title: 'Cuộc thi video clip “Việt Nam hạnh phúc - Happy Vietnam 2024" 5',
            timeStart: '10:00 ngày 10/10/2021',
            timeEnd: '10:00 ngày 20/10/2021',
            organizers: 'Cục Thông Tin Đối Ngoại 5',
            image: 'https://picsum.photos/200/300',
        },
    ];

    return (
        <Box
            display="flex"
            flexDirection={'column'}
            justifyContent="center"
            alignItems="center"
            gap={2}
            padding={4}
        >
            {/* Searching Bar */}
            <TextField
                id="outlined-search"
                label="Tìm kiếm cuộc thi"
                type="search"
                size='small'
                sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                        padding: '8px 14px',
                        '& fieldset': {
                            borderColor: gray[400],
                        },
                        '&:hover fieldset': {
                            borderColor: gray[400],
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: red[400],
                        },
                        borderRadius: '100px',
                        height: '50px',
                    },
                    '& .MuiInputLabel-root': {
                        color: gray[400],
                        fontSize: '14px',
                        top: '50%',
                        transform: 'translate(0, -50%)',
                        marginLeft: '12px',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: red[400],
                        fontSize: '14px',
                        top: 10,
                        transform: 'translate(0, -100%)',
                    },
                    '& .MuiInputBase-input': {
                        padding: '0 8px',
                    },
                }}
            />

            {/* Recent Contests */}
            <Typography fontSize={28} fontWeight={600} color={black[900]} width={'100%'}>
                Các cuộc thi lớn đang diễn ra
            </Typography>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                flexWrap="wrap"
                gap={2}
                width="100%"
            >
                {contestData.map((contest, index) => (
                    <SearchingContestCard key={index} contest={contest} />
                ))}
            </Box>

            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    borderRadius: '12px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    paddingX: 2,
                    paddingY: 4,
                    overflow: 'hidden',
                    width: '100%',
                    gap: 10
                }}
            >
                {/* Hotline Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 1
                    }}
                >
                    <Phone sx={{
                        backgroundColor: blue[50],
                        color: blue[500],
                        padding: 1,
                        borderRadius: 10,
                        animation: `${floatAnimation} 2s ease-in-out infinite` // Thêm animation cho icon
                    }} />
                    <Typography sx={{ fontSize: 16, fontWeight: 600, color: gray[500] }}>Hotline</Typography>
                    <Typography sx={{ fontSize: 12, fontWeight: 600 }}>0123456789</Typography>
                </Box>

                {/* Feedback Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 1
                    }}
                >
                    <Email sx={{
                        backgroundColor: red[50],
                        color: red[500],
                        padding: 1,
                        borderRadius: 10,
                        animation: `${floatAnimation} 2s ease-in-out infinite`
                    }} />
                    <Typography sx={{ fontSize: 16, fontWeight: 600, color: gray[500] }}>Góp ý</Typography>
                    <Typography sx={{ fontSize: 12, fontWeight: 600 }}>cho KONTEXT</Typography>
                </Box>

                {/* Chat Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 1
                    }}
                >
                    <Chat sx={{
                        backgroundColor: yellow[50],
                        color: yellow[500],
                        padding: 1,
                        borderRadius: 10,
                        animation: `${floatAnimation} 2s ease-in-out infinite`
                    }} />
                    <Typography sx={{ fontSize: 16, fontWeight: 600, color: gray[500] }}>Chat</Typography>
                    <Typography sx={{ fontSize: 12, fontWeight: 600 }}>với Admin</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Search