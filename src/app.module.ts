import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoriesModule } from './inventories/inventories.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      //envFilePath: '.development.env',
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: +configService.get<number>('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.name'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, //Don't use this option for prod mode
        keepConnectionAlive: true,
        timezone: 'UTC',
        ssl: configService.get('database.sll'),
        extra: configService.get('database.ssl') ? {
          ssl: {
            rejectUnauthorized: false
          }
        } : null,
        autoLoadEntities: true
      }),
      inject: [ConfigService],
    }),
    InventoriesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
