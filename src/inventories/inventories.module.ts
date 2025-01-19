import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoriesController } from './inventories.controller';
import configuration from 'src/config/configuration';
import { InventoryService } from './inventories.service';
import { InventoryEntity } from './model/inventory.entity';


@Module({
  imports: [TypeOrmModule.forFeature([InventoryEntity])],
  controllers: [InventoriesController],
  providers: [InventoryService],
})
export class InventoriesModule {}
