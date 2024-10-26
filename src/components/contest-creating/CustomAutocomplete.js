import React from 'react';
import { Box, Typography, Autocomplete, TextField } from '@mui/material';
import { black, gray } from '../../config/theme/themePrintives';

const CustomAutocomplete = ({ label, value, onChange, options, placeholder = 'Chọn kỹ năng cần thiết', ...props }) => {
    const limitedOptions = options.slice(0, 5);

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

            <Autocomplete
                multiple
                freeSolo
                value={value}
                onChange={onChange}
                options={limitedOptions.map(option => option.label)}
                size='small'
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder={placeholder}
                        sx={{
                            '& .MuiInputBase-root': {
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
                            '& .MuiAutocomplete-tag': {
                                backgroundColor: gray[200],
                                color: black[900],
                            },
                        }}
                    />
                )}
                sx={{
                    '& .MuiAutocomplete-inputRoot': {
                        fontSize: 18,
                        color: value.length ? black[900] : gray[400],
                    },
                    '& .MuiAutocomplete-input::placeholder': {
                        color: gray[700],
                    },
                }}
                {...props}
            />
        </Box>
    );
};

export default CustomAutocomplete;
