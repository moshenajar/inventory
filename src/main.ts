import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  /*const appp = await NestFactory.create(AppModule);
  const RABBITMQ_URL = 'RABBITMQ_URL';
  appp.enableCors();
  await appp.listen(3002);*/

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'inventory-queue',
      },
    },
  );
  await app.listen();
}
bootstrap();
