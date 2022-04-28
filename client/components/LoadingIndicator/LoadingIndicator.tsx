import React from 'react';
import {Backdrop, CircularProgress} from "@mui/material";

interface LoadingIndicatorProps {
    open: boolean
    handleClose: () => void
}

export const LoadingIndicator:React.FC<LoadingIndicatorProps> = ({open, handleClose}) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};