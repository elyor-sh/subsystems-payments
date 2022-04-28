import React from 'react';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import classes from '../../styles/Layout.module.scss'

interface LayoutProps {
    children?: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={'colored'}
            />

            <div className={classes.wrapper}>
                {
                    children
                }
            </div>
        </>
    );
};