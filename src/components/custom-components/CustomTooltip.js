import React from "react";
import { Tooltip, Typography, styled } from "@mui/material";
import { red, white } from "../../config/theme/themePrintives";

const RedTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .MuiTooltip-tooltip`]: {
        backgroundColor: red[500],
        color: white[50],
        fontSize: "14px",
        fontWeight: "bold",
        borderRadius: "4px",
        padding: "8px 12px",
    },
});

const CustomTooltip = ({ title, children, ...props }) => {
    return (
        <RedTooltip
            title={
                <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                    {title}
                </Typography>
            }
            placement="right"
            {...props}
        >
            {children}
        </RedTooltip>
    );
};

export default CustomTooltip;
