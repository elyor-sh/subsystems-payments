import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import { Model } from 'mongoose';
import {PaymentsDocument} from "./payments.schema";
import {CreatePaymentDto} from "./dto/create-payment.dto";

@Injectable()

export class PaymentsService {

    constructor(@InjectModel('payments') private paymentRepository: Model<PaymentsDocument> ) {}

    async create (dto: CreatePaymentDto) {
        try {

            const payment = await this.paymentRepository.create(dto)

            return {
                RequestId: payment._id,
                Amount: payment.Amount
            }

        }catch (e) {
           throw new HttpException({message: 'Ошибка при создании платежа', error: e}, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
