import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { black, dark, primary, red } from '../../config/theme/themePrintives'
import FooterCard from '../../components/landing-page/FooterCard'
import StepCard from '../../components/landing-page/StepCard'
import VideoCard from '../../components/landing-page/VideoCard'

const Guide = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpandClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const steps = [
        {
            title: "Đăng ký tài khoản",
            description: `Để sử dụng dịch vụ tạo cuộc thi trực tuyến, bạn cần đăng nhập vào tài khoản của mình trên <a href="/" target="_blank" rel="noopener noreferrer" style="color: ${red[500]}; text-decoration: none;">kontext.online.vn</a><br/><br/>Bạn chưa có tài khoản? Đăng ký <a href="/sign-in" target="_blank" rel="noopener noreferrer" style="color: ${red[500]}; text-decoration: none;">tại đây</a>.`,
            image: "Howitworks-signup.png",
            notice: 'Hãy chắc chắn rằng thông tin đăng ký của bạn là chính xác và đầy đủ.',
        },
        {
            title: "Tạo cuộc thi",
            description: `Sau khi đăng nhập vào tài khoản, bạn sẽ thấy nút "Tạo cuộc thi" ở góc trên bên trái của trang web. Nhấn vào nút đó để bắt đầu tạo cuộc thi của mình.<br/><br/>Bạn cần điền đầy đủ thông tin về cuộc thi, chọn hình thức tham gia, cài đặt thời gian diễn ra cuộc thi và chọn giải thưởng cho người chiến thắng.`,
            image: "Howitworks-contest.png",
            notice: 'Hãy chắc chắn rằng bạn đã cài đặt thời gian diễn ra cuộc thi một cách hợp lý.',
        },
        {
            title: "Chờ duyệt cuộc thi",
            description: `Sau khi tạo cuộc thi, bạn cần chờ đợi để cuộc thi được duyệt. Thời gian duyệt cuộc thi có thể kéo dài từ 1-2 ngày làm việc.<br/><br/>Sau khi cuộc thi được duyệt, bạn sẽ nhận được thông báo qua email và có thể bắt đầu quảng bá cuộc thi của mình.`,
            image: "Howitworks-pending.png",
            notice: 'Hãy chắc chắn rằng bạn đã kiểm tra thông báo qua email của mình.',
        },
        {
            title: "Quảng bá cuộc thi",
            description: `Sau khi cuộc thi được duyệt, bạn có thể chia sẻ cuộc thi của mình trên các mạng xã hội, website cá nhân, blog cá nhân hoặc bất kỳ nơi nào bạn muốn.<br/><br/>Hãy chắc chắn rằng bạn đã quảng bá cuộc thi một cách rộng rãi để thu hút nhiều người tham gia nhất.`,
            image: "Howitworks-maketing.png",
            notice: 'Hãy chắc chắn rằng bạn đã chia sẻ cuộc thi của mình trên các mạng xã hội.',
        },
        {
            title: "Chọn người chiến thắng",
            description: `Sau khi cuộc thi kết thúc, bạn cần chọn người chiến thắng dựa trên tiêu chí mà bạn đã đặt ra.<br/><br/>Sau khi chọn người chiến thắng, bạn cần thông báo cho họ và trao giải thưởng cho họ.`,
            image: "Howitworks-final.png",
            notice: 'Hãy chắc chắn rằng bạn đã chọn người chiến thắng một cách công bằng và minh bạch.',
        },
    ];

    return (
        <Box>
            {/* Header Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 10,
                }}
            >
                <Box height="fit-content" width="fit-content" sx={{ px: 20 }}>
                    <Typography
                        variant="h2"
                        textAlign="center"
                        color={red[500]}
                        sx={{
                            maxWidth: 900,
                            mx: "auto",
                            width: "100%",
                            mt: '20px',
                            fontWeight: 700,
                        }}
                        height="fit-content"
                        width="fit-content"
                    >
                        5 bước để sử dụng dịch vụ<br />tạo cuộc thi trực tuyến
                    </Typography>
                    <Typography
                        variant="body2"
                        textAlign="center"
                        color={dark[500]}
                        sx={{ mt: '15px', width: "100%", maxWidth: 900, mx: "auto" }}
                        height="fit-content"
                        width="fit-content"
                    >
                        Tạo cuộc thi trực tuyến trở nên dễ dàng hơn khi sử dụng dịch vụ của chúng tôi. Hãy thực hiện 5 bước <br /> đơn giản sau để tạo cuộc thi một cách nhanh chóng và tiện lợi.
                    </Typography>
                </Box>
            </Box>
            {/* Steps */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 10,
                    gap: '100px',
                }}
            >
                {steps.map((step, index) => (
                    <StepCard key={index} index={index} step={step} expandedIndex={expandedIndex} handleExpandClick={handleExpandClick} />
                ))}
                {/* Video Section */}
                <VideoCard />
            </Box>
            {/* Footer Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 10,
                    gap: '100px',
                }}
            >
                <FooterCard />
            </Box>
        </Box>
    )
}

export default Guide;