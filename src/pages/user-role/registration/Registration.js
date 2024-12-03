import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { gray, red, white } from '../../../config/theme/themePrintives';
import { Search } from '@mui/icons-material';
import RegistrationTable from '../../../components/registration/RegistrationTable';
import RegistrationService from '../../../services/registration.service';
import { useSelector } from 'react-redux';

const Registration = () => {
    const [searchTerm, setSearchTerm] = useState(null);
    const { user } = useSelector(state => state.user);
    const [contests, setContests] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const fetchRegisteredContestsByUserId = async () => {
            const response = await RegistrationService.getRetristeredContestsByUserId(user.id);
            setContests(response);
        }

        fetchRegisteredContestsByUserId();
    }, []);

    console.log(contests);

    const filterRegisterdContest = contests?.filter(contest =>
        searchTerm
            ? contest.result.contestDetails.name.toLowerCase().includes(searchTerm.toLowerCase())
            : true
    );


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: 2,
                gap: 2,
            }}
        >
            <Typography variant="h4">Danh sách dự thi</Typography>
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
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 4,
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
                            width: 220,
                            textTransform: 'none',
                            fontWeight: 'bold',
                            fontSize: 14,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        href='/participant/search'
                    >
                        <Search />
                        Tham gia cuộc thi mới
                    </Button>

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
                <RegistrationTable registration={filterRegisterdContest} />
            </Box>
        </Box>
    );
}

export default Registration;
