import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import { black, gray, white } from "../../config/theme/themePrintives";

const RulesModal = ({ open, onClose, rules }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "90%", sm: "60%" },
                    bgcolor: white[50],
                    borderRadius: 2,
                    boxShadow: 24,
                    outline: "none",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 4,
                    }}
                >
                    <IconButton onClick={onClose} sx={{ padding: 0, margin: 0, display: 'flex', alignSelf: 'flex-end' }}>
                        <CloseIcon />
                    </IconButton>

                    <Typography
                        sx={{
                            color: black[900],
                            fontWeight: 600,
                            fontSize: 26,
                            textTransform: 'none',
                            mb: 2
                        }}
                    >
                        Thể lệ cuộc thi
                    </Typography>

                    <Typography variant="body1" color="textSecondary" mb={6}>
                        {rules}
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                        <Button
                            sx={{
                                color: white[50],
                                bgcolor: black[900],
                                ":hover": { bgcolor: gray[400] },
                                fontWeight: 600,
                                fontSize: 14,
                                textTransform: 'none',
                                paddingX: 6,
                                paddingY: 1,
                                '&:disabled': {
                                    bgcolor: gray[200],
                                    color: black[100],
                                }
                            }}
                            onClick={onClose}
                        >
                            Xác nhận
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default RulesModal;