import {IPostPayment} from "../models/payment";
import {apiInstance} from "./interceptor";

export const apiPostPayment = (params: IPostPayment) => apiInstance.post('/payments', params)