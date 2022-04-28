import {IPostPayment, PaymentAction, PaymentActionTypes} from "../../models/payment";

const initialState:IPostPayment = {
    CardNumber: null,
    ExpDate: null,
    Cvv: null,
    Amount: null
}

export const paymentReducer = (state = initialState, action: PaymentAction): IPostPayment => {
    switch (action.type) {
        case PaymentActionTypes.CARD:
            return {...state, CardNumber: action.payload}
        case PaymentActionTypes.EXP:
            return {...state, ExpDate: action.payload}
        case PaymentActionTypes.CVV:
            return {...state, Cvv: action.payload}
        case PaymentActionTypes.AMOUNT:
            return {...state, Amount: action.payload}
        case PaymentActionTypes.EMPTY:
            return {
                CardNumber: null,
                ExpDate: null,
                Cvv: null,
                Amount: null
            }
        default:
            return state
    }
}