import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ContestTable from '../../components/contest/ContestTable';
import { gray, red, white } from '../../config/theme/themePrintives';
import { Add, Delete } from '@mui/icons-material';

const Contest = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [contests, setContests] = useState([
        { id: 1, name: 'Cuộc thi số 1', dateStart: '2021-10-10', dateEnd: '2021-10-20', contestantNumber: 10, status: 'Đang diễn ra' },
        { id: 2, name: 'Cuộc thi số 2', dateStart: '2021-10-10', dateEnd: '2021-10-20', contestantNumber: 15, status: 'Đã kết thúc' },
        { id: 3, name: 'Cuộc thi số 3', dateStart: '2021-10-10', dateEnd: '2021-10-20', contestantNumber: 20, status: 'Sắp diễn ra' },
        { id: 4, name: 'Cuộc thi số 4', dateStart: '2021-10-10', dateEnd: '2021-10-20', contestantNumber: 5, status: 'Sắp diễn ra' },
        { id: 5, name: 'Cuộc thi số 5', dateStart: '2021-10-10', dateEnd: '2021-10-20', contestantNumber: 8, status: 'Sắp diễn ra' },
        { id: 6, name: 'Cuộc thi số 6', dateStart: '2021-10-10', dateEnd: '2021-10-20', contestantNumber: 12, status: 'Sắp diễn ra' }
    ]);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredContests = contests.filter(contest =>
        contest.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDeleteSelected = () => {
        setContests(prevContests => prevContests.filter(contest => !selectedRows.includes(contest.id)));
        setSelectedRows([]);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                padding: 4,
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
                                backgroundColor: 'transparent',
                                color: red[500],
                                '&:hover': {
                                    backgroundColor: red[500],
                                    color: white[50],
                                },
                                border: '1px solid',
                                gap: 1,
                                width: 150,
                                textTransform: 'none',
                                fontWeight: 'bold',
                                fontSize: 14,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onClick={handleDeleteSelected}
                            disabled={selectedRows.length === 0}
                        >
                            <Delete />
                            Xóa
                        </Button>
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
                <ContestTable contests={filteredContests} setSelectedRows={setSelectedRows} />
            </Box>
        </Box>
    );
}

export default Contest;
