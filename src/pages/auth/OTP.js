import { Box, Button, Link, TextField, Typography } from '@mui/material'
import React, { useRef } from 'react'
import { gray, red } from '../../config/theme/themePrintives'

const OTP = () => {
    const refs = [useRef(), useRef(), useRef(), useRef()];

    const handleInputChange = (e, index) => {
        const value = e.target.value;
        if (value.length === 1 && index < refs.length - 1) {
            refs[index + 1].current.focus();
        } else if (value.length === 0 && index > 0) {
            refs[index - 1].current.focus();
        }
    };

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
                width={{ xs: '90vw', sm: '70vw', md: '40vw' }}
                px={6}
                py={8}
                borderRadius={2}
                boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
            >
                <Typography
                    width={'100%'}
                    color={gray[400]}
                    fontSize={45}
                    fontWeight={600}
                    mb={1}
                >
                    Xác minh
                </Typography>

                <Typography
                    width={'100%'}
                    color={gray[400]}
                    fontSize={16}
                    fontWeight={400}
                    mb={6}
                >
                    Nhập mã gồm 4 chữ số mà bạn nhận được trên email của mình.
                </Typography>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent={'space-between'}
                    width="100%"
                    mb={4}
                >
                    {[1, 2, 3, 4].map((_, index) => (
                        <TextField
                            key={index}
                            type="text"
                            variant="outlined"
                            inputProps={{
                                maxLength: 1,
                                inputMode: 'numeric',
                                pattern: '[0-9]*',
                                style: { fontSize: 24, textAlign: 'center' },
                            }}
                            onChange={(e) => handleInputChange(e, index)}
                            inputRef={refs[index]}
                            onInput={(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    height: '100px',
                                    width: '100px',
                                    borderRadius: '12px',
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
                                },
                                '& input[type=number]': {
                                    MozAppearance: 'textfield',
                                },
                                '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                                    WebkitAppearance: 'none',
                                    margin: 0,
                                },
                            }}
                        />
                    ))}
                </Box>

                {/* Continue Button */}
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
                    href='/reset-password'
                >
                    Tiếp tục
                </Button>

                {/* Resend code */}
                <Typography
                    width={'100%'}
                    color={gray[400]}
                    fontSize={16}
                    fontWeight={400}
                    textAlign={'center'}
                    mt={4}
                >
                    Bạn chưa nhận được mã xác minh? <span />
                    <Link
                        onClick={() => { }}
                        sx={{
                            textDecoration: 'none',
                            color: red[500],
                            '&:hover': {
                                textDecoration: 'underline'
                            }
                        }}
                    >
                        Gửi lại mã
                    </Link>
                </Typography>
            </Box>
        </Box>
    )
}

export default OTP