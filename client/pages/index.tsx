import type { NextPage} from 'next'
import React from "react";
import styles from '../styles/Home.module.scss'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {ValidatePayment} from "../helpers/validate";
import {useActions} from "../hooks/useAction";
import {PaymentActionTypes} from "../models/payment";
import {Form} from "../components/Form/Form";
import {PaymentsService} from "../services/payments.service";
import {Layout} from "../components/Layout/Layout";
import {toast} from "react-toastify";

const Index: NextPage = () => {

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
                dispatch.amountActionCreator(+value)
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
        <Layout>
                <Form
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    disabled={!validation.valid()}
                />
        </Layout>
    )
}

export default Index

