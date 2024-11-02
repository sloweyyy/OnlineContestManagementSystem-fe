import React, { useTransition } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { black, dark, gray, red, white } from "../../config/theme/themePrintives";
const svg = require("../../assets/404-1.svg");

const NotFoundPage = () => {
    const [isPending, startTransition] = useTransition();
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        startTransition(() => {
            navigate("/");
        });
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "top",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Box
                flex={1}
                display={"flex"}
                flexDirection={"column"}
                marginLeft={10}
                gap={4}

            >
                <Box
                    flex={1}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={2}
                >
                    <Typography variant="h1" color={black[900]}>
                        Page<br />Not Found
                    </Typography>
                    <Typography sx={{ fontSize: 16, fontWeight: 400, color: gray[400] }}>
                        Không tìm thấy trang bạn đang tìm kiếm.<br />Vui lòng kiểm tra lại đường dẫn hoặc trở về trang chủ.
                    </Typography>
                </Box>
                <Button
                    sx={{ backgroundColor: red[500], color: white[50], textTransform: "none", width: 180, borderRadius: 20, fontSize: 16, fontWeight: 600 }}
                    onClick={handleNavigateHome}
                    disabled={isPending}
                >
                    {isPending ? "Loading..." : "Trở về trang chủ"}
                </Button>
            </Box>
            <img src={svg.default} alt="404" width={'40%'} style={{ flex: 1, marginRight: 50 }} />
        </Box>
    );
};

export default NotFoundPage;
