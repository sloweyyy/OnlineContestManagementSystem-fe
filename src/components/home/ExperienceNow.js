import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import BoxText from './BoxText'; // Adjust the import path as needed
import { AutoAwesomeRounded } from '@mui/icons-material';
import { red } from '../../config/theme/themePrintives';

const ExperienceNow = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '24px',
                borderRadius: '12px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                height: '300px',
            }}
        >
            <Typography
                sx={{
                    fontSize: 20,
                    fontWeight: 700,
                    marginBottom: 3,
                    lineHeight: 1.4
                }}
            >
                HÃY SỞ HỮU NGAY CÔNG CỤ TUYÊN<br />TRUYỀN MỚI VỚI KONTEXT
            </Typography>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                mb: 3
            }}>
                <BoxText text="Thao tác đơn giản, tiết kiệm thời gian tạo cuộc thi" />
                <BoxText text="Nộp bài dự thi và tham gia bình chọn dễ dàng" />
                <BoxText text="Xếp hạng theo thời gian thực, thúc đẩy thi đua" />
                <BoxText text="Thống kê, phân tích kết quả chi tiết phục vụ báo cáo sau khi tổ chức" />
                <BoxText text="Tư vấn & hỗ trợ kỹ thuật hội thi 24/7" />
            </Box>

            <Button
                variant="contained"
                sx={{
                    backgroundColor: red[500],
                    color: 'white',
                    fontWeight: 600,
                    paddingY: 1,
                    paddingX: 4,
                    fontSize: 16,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textTransform: 'none',
                    "&:hover": {
                        backgroundColor: red[700],
                    },
                    borderRadius: 8
                }}
                href='/participant/contest-creating'
            >
                <AutoAwesomeRounded sx={{ marginRight: 2, fontSize: 22 }} />
                Tạo cuộc thi
            </Button>
        </Box>
    );
};

export default ExperienceNow;
