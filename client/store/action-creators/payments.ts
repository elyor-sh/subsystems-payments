import {PaymentAction, PaymentActionTypes} from "../../models/payment";

export const cardActionCreator = (payload: number | null): PaymentAction => {
    return {type: PaymentActionTypes.CARD, payload}
}

export const expDataActionCreator = (payload: string | null): PaymentAction => {
    return {type: PaymentActionTypes.EXP, payload}
}

export const cvvActionCreator = (payload: number | null): PaymentAction => {
    return {type: PaymentActionTypes.CVV, payload}
}

export const amountActionCreator = (payload: number | null): PaymentAction => {
    return {type: PaymentActionTypes.AMOUNT, payload}
}

export const emptyStateCreator = () => {
    return {type: PaymentActionTypes.EMPTY}
}