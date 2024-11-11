import { Box, Typography, Autocomplete, TextField } from '@mui/material'
import React from 'react'
import { gray, black } from '../../config/theme/themePrintives'

const CustomSelectorAddressAutocomplete = ({ label, value, onChange, options, ...props }) => {
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
                freeSolo
                onChange={onChange}
                options={options}
                size="small"
                value={value}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder={label}
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
                        }}
                    />
                )}
                sx={{
                    '& .MuiAutocomplete-inputRoot': {
                        '& .MuiAutocomplete-endAdornment': {
                            display: 'none',
                        },
                    },
                }}
                {...props}
            />
        </Box>
    )
}

export default CustomSelectorAddressAutocomplete