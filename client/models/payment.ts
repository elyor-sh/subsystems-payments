export interface IPostPayment {
    CardNumber: number | null
    ExpDate: string | null
    Cvv: number | null
    Amount: number | null
}

export interface IPayment {
    RequestId: string
    Amount: number
}

export enum PaymentActionTypes {
    CARD = "CARD",
    EXP = "EXP",
    CVV = "CVV",
    AMOUNT = "AMOUNT",
    EMPTY = "EMPTY"
}


interface CardAction {
    type: PaymentActionTypes.CARD
    payload: number| null
}

interface ExpAction {
    type: PaymentActionTypes.EXP
    payload: string| null
}

interface CvvAction {
    type: PaymentActionTypes.CVV
    payload: number| null
}

interface AmountAction {
    type: PaymentActionTypes.AMOUNT
    payload: number| null
}

interface EmptyStateAction {
    type: PaymentActionTypes.EMPTY
}


export type PaymentAction = CardAction | ExpAction | CvvAction | AmountAction | EmptyStateAction