import { Star, StarHalf } from '@mui/icons-material'
import { Avatar, Box } from '@mui/material'
import React from 'react'
import { black, gray, red } from '../../config/theme/themePrintives'

const ReviewCard = ({ review }) => {
    return (
        <Box
            flex={1}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: `2px solid ${gray[100]}`,
                borderRadius: 1,
                gap: 2,
                padding: 4,
                transition: 'transform 0.2s ease-in-out, box-shadow 0.5s ease-in-out',
                ":hover": {
                    transform: 'scale(1.05)',
                    boxShadow: `0px 0px 12px ${black[50]}`,
                }
            }}
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                width={'100%'}
                gap={2}
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
                    gap={1}
                >
                    <Star sx={{ color: red[500] }} />
                    <Star sx={{ color: red[500] }} />
                    <Star sx={{ color: red[500] }} />
                    <Star sx={{ color: red[500] }} />
                    <StarHalf sx={{ color: red[500] }} />
                </Box>
            </Box>
            <Box
                flex={1}
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                color={gray[500]}
            >
                <Box fontSize={16} textAlign="left">{review.review}</Box>
            </Box>
        </Box>
    )
}

export default ReviewCard