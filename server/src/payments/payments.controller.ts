import {Body, Controller, Post} from '@nestjs/common';
import {PaymentsService} from "./payments.service";
import {CreatePaymentDto} from "./dto/create-payment.dto";

@Controller('api/payments')
export class PaymentsController {

    constructor(private paymentsService: PaymentsService) {}

    @Post()
    create (@Body() dto: CreatePaymentDto) {

        return this.paymentsService.create(dto)
    }
}
