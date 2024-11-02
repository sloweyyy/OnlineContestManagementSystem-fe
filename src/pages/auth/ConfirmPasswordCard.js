import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { gray, red } from '../../config/theme/themePrintives';

const ConfirmPasswordCard = ({ handleConfirm }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width={'100%'}
            height={'100vh'}
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width={{ xs: '90vw', sm: '70vw', md: '50vw' }}
                px={6}
                py={8}
                borderRadius={2}
                boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
            >
                <Typography
                    variant="h1"
                    color={red[500]}
                    width={'100%'}
                    fontWeight="bold"
                    mb={2}
                >
                    Kon
                    <Typography
                        component="span"
                        variant="h1"
                        color={gray[400]}
                        fontWeight="bold"
                    >
                        test
                    </Typography>
                </Typography>

                <Typography
                    width={'100%'}
                    color={gray[400]}
                    fontSize={45}
                    fontWeight={600}
                    mb={6}
                >
                    Mật khẩu mới
                </Typography>

                <Box
                    display="flex"
                    flexDirection="column"
                    width="100%"
                    gap={1}
                    mb={3}
                >
                    <Typography sx={{ color: gray[400], fontSize: 16, fontWeight: 400 }}>
                        Nhập mật khẩu mới
                    </Typography>
                    <TextField
                        type='password'
                        fullWidth
                        variant={'outlined'}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                height: '50px',
                                borderRadius: '8px',
                                '& fieldset': {
                                    borderColor: gray[200],
                                    borderWidth: 2,
                                },
                                '&:hover fieldset': {
                                    borderColor: gray[400],
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: gray[400],
                                },
                            }
                        }}
                    />
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    width="100%"
                    gap={1}
                    mb={3}
                >
                    <Typography sx={{ color: gray[400], fontSize: 16, fontWeight: 400 }}>
                        Xác nhận mật khẩu
                    </Typography>
                    <TextField
                        type='password'
                        fullWidth
                        variant={'outlined'}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                height: '50px',
                                borderRadius: '8px',
                                '& fieldset': {
                                    borderColor: gray[200],
                                    borderWidth: 2,
                                },
                                '&:hover fieldset': {
                                    borderColor: gray[400],
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: gray[400],
                                },
                            }
                        }}
                    />
                </Box>

                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: red[500],
                        color: 'white',
                        borderRadius: '8px',
                        height: '50px',
                        fontWeight: 'bold',
                        '&:hover': { backgroundColor: red[600] },
                        textTransform: 'none',
                        fontSize: 18,
                        mt: 2,
                    }}
                    href='/successfully'
                >
                    Xác nhận
                </Button>
            </Box>
        </Box>
    )
}

export default ConfirmPasswordCard