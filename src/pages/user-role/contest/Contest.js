import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ContestTable from '../../../components/contest/ContestTable';
import { gray, red, white } from '../../../config/theme/themePrintives';
import { Add } from '@mui/icons-material';
import ContestService from '../../../services/contest.service';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Contest = () => {
    const { user } = useSelector((state) => state.user);
    const [searchTerm, setSearchTerm] = useState('');
    const [contests, setContests] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredContests = contests?.filter(contest =>
        contest?.name?.toLowerCase().includes(searchTerm?.toLowerCase())
    );

    const handleDeleteSelected = async (contestId) => {
        const response = await ContestService.deleteContest(contestId);

        try {
            if (response) {
                setContests(contests.filter(contest => contest.id !== contestId));
                toast.success('Xóa cuộc thi thành công');
            } else {
                toast.error('Xóa cuộc thi thất bại');
            }
        } catch (error) {
            console.log('error', error);
            toast.error('Xóa cuộc thi thất bại');
        }
    };

    useEffect(() => {
        const fetchContests = async () => {
            const contests = await ContestService.getContestByCreatorId(user.id);
            setContests(contests);
        }

        fetchContests();
    }, [user.id]);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: 2,
                gap: 2,
            }}
        >
            <Typography variant="h4">Danh sách cuộc thi</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    padding: 4,
                    borderRadius: 1,
                    boxShadow: 1,
                }}
            >
                {/* Button and Searching Bar Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 2,
                        marginBottom: 4,
                    }}
                >
                    {/* Delete and Create Button */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 2,
                        }}
                    >
                        <Button
                            sx={{
                                backgroundColor: red[500],
                                color: white[50],
                                '&:hover': {
                                    backgroundColor: white[50],
                                    color: red[500],
                                    border: '1px solid',
                                },
                                gap: 1,
                                width: 150,
                                textTransform: 'none',
                                fontWeight: 'bold',
                                fontSize: 14,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            href='/participant/contest-creating'
                        >
                            <Add />
                            Thêm mới
                        </Button>
                    </Box>
                    {/* Searching Bar */}
                    <TextField
                        id="outlined-search"
                        label="Tìm kiếm cuộc thi"
                        type="search"
                        size='small'
                        value={searchTerm}
                        onChange={handleSearchChange}
                        sx={{
                            width: 300,
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
                </Box>

                {/* Pass filtered contests to ContestTable */}
                <ContestTable
                    contests={filteredContests}
                    handleDeleteSelected={handleDeleteSelected}
                />
            </Box>
        </Box>
    );
}

export default Contest;
