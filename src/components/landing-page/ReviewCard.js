import { Star } from '@mui/icons-material'
import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { gray, red, yellow } from '../../config/theme/themePrintives'

const ReviewCard = ({ review }) => {
    return (
        <Box
            width={'23vw'}
            height={'20vh'}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: `2px solid ${gray[100]}`,
                borderRadius: 1,
                padding: 4,
                ":hover": {
                    borderColor: 'transparent',
                    boxShadow: `0 0 4px 4px ${red[100]}`,
                    transition: 'all 0.3s ease'
                }
            }}
        >
            <Box
                flex={1}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                width={'100%'}
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Avatar />
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        marginLeft={2}
                        gap={1}
                    >
                        <Box fontSize={16} fontWeight={600}>{review.user.name}</Box>
                        <Box fontSize={14} color={'gray'}>{review.user.address}</Box>
                    </Box>
                </Box>

                {/* Star */}
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    padding={1}
                    gap={1}
                >
                    <Typography fontSize={16}>{5}</Typography>
                    <Star sx={{ color: yellow[500] }} />
                </Box>
            </Box>
            <Box
                flex={2}
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                paddingY={4}
                color={gray[500]}
            >
                <Box fontSize={16} textAlign="left">{review.review}</Box>
            </Box>
        </Box>
    )
}

export default ReviewCard