import {IPayment, IPostPayment} from "../models/payment";
import {apiPostPayment} from "../api/utils";

export class PaymentsService {

    async post (params: IPostPayment): Promise<IPayment> {
        try {
            const response = await apiPostPayment(params)
            return Promise.resolve(response.data)
        }catch (e){
            return Promise.reject(e)
        }
    }

}