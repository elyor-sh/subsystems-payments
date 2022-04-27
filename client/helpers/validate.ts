import {IPostPayment} from "../models/payment";

export const validate = (type: string, data: string | number): boolean => {
    switch (data) {
        case 'Card':
            return false
        default:
            return false
    }
}

export class ValidatePayment {

    constructor(private state: IPostPayment) {}

    card (): boolean {
        const regex = new RegExp(`^([0-9]{4}[- ]?){3}[0-9]{4}$`)

        return regex.test(`${this.state.CardNumber}`)
    }

    expDate (): boolean {
        const regex = new RegExp(`(0[1-9]|10|11|12)/20[0-9]{2}$`)
        return regex.test(`${this.state.ExpDate}`)
    }

    cvv (): boolean {
       const regex = new RegExp(`^[0-9]{3, 4}$`)
        return regex.test(`${this.state.Cvv}`)
    }

    amount (): boolean {
        return (typeof this.state.Amount === 'number')
    }

    valid (): boolean {
        return this.card() && this.cvv() && this.expDate() && this.amount()
    }
}