import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import { black, gray } from '../../config/theme/themePrintives';

const CustomTextField = ({ label, placeholder, type = 'text', ...props }) => {
    const handleInput = (e) => {
        const { value } = e.target;
        if (type === 'number' && value < 0) {
            e.target.value = '';
        }
    };

    const handleWheel = (e) => {
        if (type === 'number') {
            e.target.blur();
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography
                sx={{
                    color: gray[400],
                    fontSize: 16,
                    fontWeight: 600,
                    marginBottom: 1,
                }}
            >
                {label}
            </Typography>
            <TextField
                type={type}
                variant="outlined"
                placeholder={placeholder}
                fullWidth
                size="small"
                onInput={handleInput}
                onWheel={handleWheel}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& input[type=number]': {
                            MozAppearance: 'textfield',
                        },
                        '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                            WebkitAppearance: 'none',
                            margin: 0,
                        },
                        '& fieldset': {
                            borderColor: gray[200],
                        },
                        '&:hover fieldset': {
                            borderColor: black[900],
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: black[900],
                            borderWidth: 1,
                        },
                    },
                }}
                {...props}
            />
        </Box>
    );
};

export default CustomTextField;
