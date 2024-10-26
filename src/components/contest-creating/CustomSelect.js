import { Box, Typography, Select, MenuItem, FormControl } from '@mui/material';
import React from 'react';
import { black, gray, red } from '../../config/theme/themePrintives';

const CustomSelect = ({ label, value, onChange, options, placeholder = 'Chọn loại cuộc thi', ...props }) => {
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
            <FormControl
                fullWidth
                size="small"
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
            >
                <Select
                    value={value}
                    onChange={onChange}
                    displayEmpty
                    sx={{
                        '& .MuiSelect-select': {
                            fontSize: 16,
                            color: value ? black[900] : gray[400],
                        },
                    }}
                    inputProps={{
                        style: {
                            fontSize: 16,
                            color: value ? black[900] : gray[400],
                        },
                    }}
                    {...props}
                >
                    <MenuItem value="" disabled sx={{ color: black[900], fontSize: 16 }}>
                        {placeholder}
                    </MenuItem>
                    {options.map((option, index) => (
                        <MenuItem
                            key={index}
                            value={option.value}
                            sx={{
                                fontSize: 16,
                                color: black[900],
                            }}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default CustomSelect;
