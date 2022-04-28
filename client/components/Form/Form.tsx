import React from "react";
import {Box, Button, Grid} from "@mui/material";
import styles from "../../styles/Form.module.scss";
import {IMask, IMaskInput} from "react-imask";
import {PaymentActionTypes} from "../../models/payment";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ValidatePayment} from "../../helpers/validate";
import {PaymentsService} from "../../services/payments.service";
import {useActions} from "../../hooks/useAction";
import {toast} from "react-toastify";


export const Form: React.FC = () => {

    const {CardNumber, Cvv, ExpDate, Amount} = useTypedSelector(state => state.payment)

    const validation = new ValidatePayment({CardNumber, Cvv, ExpDate, Amount})

    const paymentsService = new PaymentsService()

    const dispatch = useActions()

    const handleChange = (name: string, value: any, valueWithMask?: string) => {

        switch (name){
            case PaymentActionTypes.CARD:
                dispatch.cardActionCreator(value)
                break
            case PaymentActionTypes.EXP:
                dispatch.expDataActionCreator(`${valueWithMask}`)
                break
            case PaymentActionTypes.CVV:
                dispatch.cvvActionCreator(value)
                break
            case PaymentActionTypes.AMOUNT:
                dispatch.amountActionCreator(value)
                break
            default:
                break
        }
    }


    const handleSubmit = async () => {

        if(!validation.valid()){
            toast.error(`Не валидные данные`, {
                toastId: 'CustomId'
            })

            return
        }

        await paymentsService.post({
            CardNumber: Number(CardNumber),
            Cvv: Number(Cvv),
            ExpDate,
            Amount
        }).then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e)
        })
    }


    return (
        <Grid container className={styles.gridContainer}>
                <Grid item xs={12} className={styles.gridItem}>
                    <label className={styles.label}>Номер карты:</label>
                    <IMaskInput
                        mask={'0000-0000-0000-0000'}
                        unmask={true}
                        value={CardNumber || ''}
                        onAccept={
                            (value, mask) => handleChange(PaymentActionTypes.CARD, value)
                        }
                        placeholder='0000-0000-0000-0000'
                        className={styles.input}
                    />
                </Grid>
                <Grid item xs={12} className={styles.gridItem}>
                    <label className={styles.label}>Срок годности:</label>
                    <IMaskInput
                        mask={'MM/YYYY'}
                        blocks={{
                            YY: {
                                mask: "00"
                            },
                            MM: {
                                mask: IMask.MaskedRange,
                                from: 1,
                                to: 12
                            }
                        }}
                        value={ExpDate || ''}
                        unmask={true}
                        onAccept={
                            (value, mask) => {
                                handleChange(PaymentActionTypes.EXP, value, mask.el.value)
                            }
                        }
                        placeholder='12/2022'
                        className={styles.input}
                    />
                </Grid>
                <Grid item xs={12} className={styles.gridItem}>
                    <label className={styles.label}>CVV:</label>
                    <IMaskInput
                        mask={'000'}
                        unmask={false}
                        value={Cvv || ''}
                        onAccept={
                            (value, mask) => handleChange(PaymentActionTypes.CVV, value)
                        }
                        placeholder='000'
                        className={styles.input}
                    />
                </Grid>
                <Grid item xs={12} className={styles.gridItem}>
                    <label className={styles.label}>Сумма:</label>
                    <IMaskInput
                        mask={Number}
                        radix="."
                        unmask={true}
                        value={Amount || ''}
                        onAccept={
                            (value, mask) => handleChange(PaymentActionTypes.AMOUNT, value)
                        }
                        placeholder='100000'
                        className={styles.input}
                    />
                </Grid>
                <button
                    className={`${styles.btn} ${!validation.valid() ? styles.disabled : ''}`}
                    onClick={handleSubmit}
                >
                    Оплатить
                </button>
        </Grid>
    );
};
