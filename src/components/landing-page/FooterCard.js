import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { gray, red } from '../../config/theme/themePrintives';

const FooterCard = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <Paper
            ref={ref}
            sx={{
                display: "flex",
                flexDirection: "row",
                width: 900,
                height: 300,
                alignItems: "center",
                justifyContent: "center",
                paddingX: 6,
                paddingY: 2,
                borderRadius: 2,
                overflow: "hidden",
                gap: 3,
                boxShadow: "0px 0px 10px 0px rgba(210, 213, 219)",
                '&:hover': {
                    boxShadow: "0px 0px 20px 0px rgba(221, 166, 177, 0.50)",
                },
                background: 'linear-gradient(180deg, rgba(255, 240, 245, 1) 0%, rgba(255, 255, 255, 1) 100%)',
                transform: inView ? 'translateY(0)' : 'translateY(150px)',
                opacity: inView ? 1 : 0,
                transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Typography fontSize={'32px'} color={red[500]} fontWeight={'800'} marginBottom={1}>
                    Tạo hồ sơ công chứng ngay hôm nay
                </Typography>
                <Typography fontSize={'16px'} color={gray[500]} textAlign={'center'} marginBottom={4}>
                    Dịch vụ công chứng trực tuyến của chúng tôi cung cấp giải pháp nhanh chóng và tiện lợi cho mọi nhu cầu công chứng của bạn.
                    Hãy bắt đầu ngay hôm nay và trải nghiệm sự khác biệt!
                </Typography>
                <Button
                    sx={{
                        borderRadius: 1,
                        px: 4,
                        py: 1,
                        textTransform: "inherit",
                        fontSize: 20,
                        fontWeight: 600,
                        color: "white",
                        background: red[500],
                        '&:hover': {
                            background: red[600],
                        },
                    }}
                    href="/sign-up"
                >
                    Tạo hồ sơ công chứng
                </Button>
            </Box>
        </Paper >
    )
}

export default FooterCard