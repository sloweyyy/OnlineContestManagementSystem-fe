import React from 'react';
import { Modal, Box, Typography, Button, IconButton } from '@mui/material';
import { Check, Warning, Close } from '@mui/icons-material';
import { black, gray, green, red, white } from '../../config/theme/themePrintives';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    textAlign: 'center',
};

export const ConfirmModal = ({ open, onClose, title, message }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                <IconButton
                    disableRipple
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <Close />
                </IconButton>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ bgcolor: green[100], borderRadius: 2, color: green[500], padding: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Check fontSize="large" />
                    </Box>
                </Box>
                <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
                    {title}
                </Typography>
                <Typography sx={{ mb: 3, color: gray[500] }}>{message}</Typography>
                <Button
                    disableRipple
                    onClick={onClose}
                    fullWidth
                    sx={{
                        mb: 1,
                        bgcolor: white[50],
                        color: black[900],
                        textTransform: 'none',
                        fontSize: 18,
                        fontWeight: 600,
                        border: `1px solid ${gray[300]}`,
                    }}>
                    Xác nhận
                </Button>
            </Box>
        </Modal>
    );
};

export const YesNoModal = ({ open, onClose, onConfirm, title, message }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                <IconButton
                    disableRipple
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <Close />
                </IconButton>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ bgcolor: red[100], borderRadius: 2, color: red[500], padding: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Warning fontSize="large" />
                    </Box>
                </Box>
                <Typography variant="h5" component="h2" sx={{ mb: 1, color: black[900] }}>
                    {title}
                </Typography>
                <Typography sx={{ mb: 3, color: gray[500] }}>{message}</Typography>
                <Button
                    disableRipple
                    onClick={onConfirm}
                    fullWidth
                    sx={{
                        mb: 1,
                        bgcolor: red[500],
                        color: white[50],
                        textTransform: 'none',
                        fontSize: 18,
                        fontWeight: 600,
                        border: `1px solid ${red[500]}`,
                    }}>
                    Xác nhận
                </Button>
                <Button
                    disableRipple
                    onClick={onClose}
                    fullWidth
                    sx={{
                        mb: 1,
                        bgcolor: white[50],
                        color: gray[500],
                        fontWeight: 600,
                        textTransform: 'none',
                        border: `1px solid ${gray[300]}`,
                        fontSize: 18,
                    }}
                >
                    Hủy bỏ
                </Button>
            </Box>
        </Modal>
    );
};