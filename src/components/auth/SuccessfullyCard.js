import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { gray, red } from '../../config/theme/themePrintives'
import { CheckRounded } from '@mui/icons-material'

const SuccessfullyCard = () => {
    return (
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
            gap={8}
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    border: `10px solid ${red[200]}`,
                }}
            >
                <CheckRounded
                    sx={{
                        color: red[500],
                        fontSize: 150,
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
                }}
                onClick={() => window.location.href = '/'}
            >
                Tiếp tục
            </Button>
        </Box>
    )
}

export default SuccessfullyCard