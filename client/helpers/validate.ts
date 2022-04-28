import {IPostPayment} from "../models/payment";

export class ValidatePayment {

    constructor(private state: IPostPayment) {}

    card (): boolean {
        const regex = new RegExp(`^([0-9]{4}[- ]?){3}[0-9]{4}$`)
        return regex.test(`${this.state.CardNumber}`)
    }

    expDate (): boolean {

        const regex = new RegExp(`^(0[1-9]|1[0-2])\\/(([2-9]{4})$)`)

        const year = new Date().getFullYear()

        const isValidYear = this.state.ExpDate ? this.state.ExpDate.split('/')[1] : 0

        return (regex.test(`${this.state.ExpDate}`) && isValidYear >= year)
    }

    cvv (): boolean {

        const regex = new RegExp(`^[0-9]{3}$`)

        return regex.test(`${this.state.Cvv}`)
    }

    amount (): boolean {
        return (typeof this.state.Amount === 'number' && this.state.Amount >= 1)
    }

    valid (): boolean {
        return this.card() && this.cvv() && this.expDate() && this.amount()
    }
}