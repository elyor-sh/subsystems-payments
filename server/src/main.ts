import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "./pipe/validation.pipe";

async function start() {

  const PORT = process.env.PORT || 5000

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT, () => {
    console.log(`Server has been started in PORT ${PORT}`)
  });
}
start();
