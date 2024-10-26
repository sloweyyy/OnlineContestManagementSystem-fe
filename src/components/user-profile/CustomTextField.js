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
                sx={{
                    '& .MuiOutlinedInput-root': {
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
