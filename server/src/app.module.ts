import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import { PaymentsModule } from './payments/payments.module';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_URI),
    PaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
