import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import {MongooseModule} from "@nestjs/mongoose";
import {PaymentsSchema} from "./payments.schema";

@Module({
  controllers: [
    PaymentsController
  ],
  providers: [PaymentsService],
  imports: [
    MongooseModule.forFeature([{ name: 'payments', schema: PaymentsSchema }]),
  ]
})
export class PaymentsModule {}
