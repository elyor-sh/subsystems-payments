import React from "react";
import {Box, Button, Grid} from "@mui/material";
import styles from "../../styles/Form.module.scss";
import {IMask, IMaskInput} from "react-imask";
import {PaymentActionTypes} from "../../models/payment";


interface FormProps {
    handleChange: (name: string, value: any, valueWithMask?: string) => void
    handleSubmit: () => Promise<void>
    disabled: boolean
}

export const Form: React.FC<FormProps> = ({handleChange, handleSubmit, disabled}) => {
    return (
        <Grid container className={styles.gridContainer}>
            <Box>
                <Grid item>
                    <IMaskInput
                        mask={'0000-0000-0000-0000'}
                        unmask={true}
                        onAccept={
                            (value, mask) => handleChange(PaymentActionTypes.CARD, value)
                        }
                        placeholder='0000-0000-0000-0000'
                    />
                </Grid>
                <Grid item>
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
                        unmask={true}
                        onAccept={
                            (value, mask) => {
                                handleChange(PaymentActionTypes.EXP, value, mask.el.value)
                            }
                        }
                        placeholder='12/2022'
                    />
                </Grid>
                <Grid item>
                    <IMaskInput
                        mask={'000'}
                        unmask={false}
                        onAccept={
                            (value, mask) => handleChange(PaymentActionTypes.CVV, value)
                        }
                        placeholder='000'
                    />
                </Grid>
                <Grid item>
                    <IMaskInput
                        mask={Number}
                        radix="."
                        unmask={true}
                        onAccept={
                            (value, mask) => handleChange(PaymentActionTypes.AMOUNT, value)
                        }
                        placeholder='100000'
                    />
                </Grid>
                <Button
                    variant='contained'
                    disabled={disabled}
                    onClick={handleSubmit}
                >
                    Отправить
                </Button>
            </Box>
        </Grid>
    );
};
