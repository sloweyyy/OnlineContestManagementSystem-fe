import { Box } from '@mui/material'
import React, { useState } from 'react'
import ForgotPasswordCard from '../../components/auth/ForgotPasswordCard'
import ConfirmPasswordCard from '../../components/auth/ConfirmPasswordCard'
import OTP from '../../components/auth/OTP'
import SuccessfullyCard from '../../components/auth/SuccessfullyCard'

const ForgotPassword = () => {
    const [isSendOTP, setIsSendOTP] = useState(false);
    const [isContinue, setIsContinue] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false);

    const handleSendOTP = () => {
        setIsSendOTP(true);
    }

    const handleContinue = () => {
        setIsContinue(true);
    }

    const handleConfirm = () => {
        setIsConfirm(true);
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width={'100%'}
            height={'100vh'}
        >
            {!isContinue && !isSendOTP && <ForgotPasswordCard handleSendOTP={handleSendOTP} />}
            {isSendOTP && !isContinue && <OTP handleContinue={handleContinue} />}
            {isContinue && !isConfirm && <ConfirmPasswordCard handleConfirm={handleConfirm} />}
            {isConfirm && <SuccessfullyCard />}
        </Box>
    )
}

export default ForgotPassword