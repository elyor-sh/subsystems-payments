import type { NextPage} from 'next'
import {Box, Grid, TextField} from "@mui/material";
import React, {useState} from "react";
import styles from '../styles/Home.module.scss'
import {apiInstance} from "../api/interceptor";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {ValidatePayment} from "../helpers/validate";
import {useActions} from "../hooks/useAction";
import {PaymentActionTypes} from "../models/payment";

const Index: NextPage = () => {

    const {CardNumber, Cvv, ExpDate, Amount} = useTypedSelector(state => state.payment)

    const validation = new ValidatePayment({CardNumber, Cvv, ExpDate, Amount})

    const dispatch = useActions()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value

        console.log(name, PaymentActionTypes.CARD, value)

        switch (name){
            case PaymentActionTypes.CARD:
               dispatch.cardActionCreator(+value)
                break
            case PaymentActionTypes.EXP:
                dispatch.expDataActionCreator(value)
                break
            case PaymentActionTypes.CVV:
                dispatch.cvvActionCreator(+value)
                break
            case PaymentActionTypes.AMOUNT:
                dispatch.amountActionCreator(+value)
                break
            default:
                break
        }
    }

    return (
        <div className={styles.container}>
            <Grid container className={styles.gridContainer}>
                <Box>
                    <Grid item>
                        <TextField
                            name={PaymentActionTypes.CARD}
                            value={CardNumber || ''}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            name={PaymentActionTypes.EXP}
                            value={ExpDate || ''}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            name={PaymentActionTypes.CVV}
                            value={Cvv || ''}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            name={PaymentActionTypes.AMOUNT}
                            value={Amount || ''}
                            onChange={handleChange}
                        />
                    </Grid>
                </Box>
            </Grid>
        </div>
    )
}

export default Index

