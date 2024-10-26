import React, { useState } from "react";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Collapse,
    Divider,
    IconButton
} from "@mui/material";
import ExpandMoreRounded from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRounded from "@mui/icons-material/ExpandLessRounded";
import { dark, white } from "../../config/theme/themePrintives";

const FAQ = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const questions = [
        "Tôi có thể tạo những loại cuộc thi nào?",
        "Người tham gia có cần tạo tài khoản để tham gia cuộc thi không?",
        "Cuộc thi có thể diễn ra trong bao lâu?",
        "Có thể giới hạn số lượng người tham gia cuộc thi không?",
        "Chi phí để sử dụng dịch vụ này là bao nhiêu?",
        "Làm sao để tôi có thể liên hệ hỗ trợ khi gặp vấn đề?",
    ];

    const answers = [
        "Bạn có thể tạo nhiều loại cuộc thi như trắc nghiệm, tự luận, bài kiểm tra thời gian thực, và nhiều định dạng khác phù hợp với nhu cầu của bạn.",
        "Điều này tùy thuộc vào thiết lập của người tạo cuộc thi. Bạn có thể cho phép người tham gia đăng ký tài khoản hoặc tham gia dưới tư cách khách.",
        "Bạn có thể cài đặt thời gian bắt đầu và kết thúc cho mỗi cuộc thi. Thời gian có thể kéo dài từ vài phút đến nhiều ngày, tùy thuộc vào mục tiêu của cuộc thi.",
        "Có, bạn có thể cài đặt giới hạn số lượng người tham gia và hệ thống sẽ tự động dừng nhận đăng ký khi đạt số lượng tối đa.",
        "Trang web cung cấp các gói dịch vụ từ miễn phí đến trả phí tùy vào tính năng và nhu cầu của bạn. Chi tiết về các gói dịch vụ có thể được tìm thấy trong phần 'Giá cả và Dịch vụ'.",
        "Bạn có thể liên hệ với chúng tôi qua mục 'Liên hệ' hoặc gửi email trực tiếp đến bộ phận hỗ trợ. Chúng tôi sẽ phản hồi sớm nhất có thể.",
    ];

    return (
        <Box padding={6}>
            <Typography variant="h3" fontWeight="bold" textAlign="center" color={white[50]} marginBottom={4}>
                Những câu hỏi thường gặp.
            </Typography>
            <List>
                {questions.map((question, index) => (
                    <React.Fragment key={index}>
                        <ListItem button onClick={() => toggleExpand(index)} sx={{ "&:hover": { backgroundColor: "transparent" } }}>
                            <ListItemText primary={question} primaryTypographyProps={{ fontSize: 22, fontWeight: 600, color: white[50] }} sx={{ cursor: "default" }} />
                            <IconButton>
                                {expandedIndex === index ? <ExpandLessRounded sx={{ color: white[50] }} /> : <ExpandMoreRounded sx={{ color: white[50] }} />}
                            </IconButton>
                        </ListItem>
                        <Collapse in={expandedIndex === index}>
                            <Typography variant="body1" sx={{ mx: 2, my: 2, fontSize: 18, color: white[50], cursor: "default" }}>
                                {answers[index]}
                            </Typography>
                        </Collapse>
                        {index < questions.length - 1 && <Divider sx={{ my: 2 }} />}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
};

export default FAQ;
