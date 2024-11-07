import { Box, Button, Typography } from '@mui/material';
import { red, gray, black, white, brown } from '../../config/theme/themePrintives';

const SubscribeSection = () => (
    <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderRadius={2}
        padding={8}
        width="65vw"
        bgcolor={white[50]}
        marginTop={12}
        boxShadow={`0 0 8px 8px ${gray[100]}`}
    >
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
        >
            <Typography
                variant="h2"
                fontWeight={600}
                color={black}
            >
                Đăng ký ngay để<br />trải nghiệm dịch vụ
            </Typography>
            <Typography
                fontSize={16}
                fontWeight={400}
                color={gray[400]}
                marginTop={2}
            >
                Hãy đăng ký tài khoản và tạo cuộc thi ngay hôm nay
            </Typography>
        </Box>
        <Button
            sx={{
                textTransform: 'none',
                backgroundColor: red[500],
                color: 'white',
                borderRadius: 1,
                padding: '10px 50px',
                border: `2px solid ${red[500]}`,
                '&:hover': {
                    backgroundColor: white[50],
                    color: red[500],
                    boxShadow: 'none',
                },
                fontWeight: 'bold',
                fontSize: 16,
                boxShadow: `0px 4px 4px ${gray[200]}`,
            }}
            href='/sign-up'
        >
            Đăng ký ngay
        </Button>
    </Box>
);

export default SubscribeSection;
