import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [PaymentsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
