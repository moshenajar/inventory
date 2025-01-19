import { Controller, Get } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { InventoryDto } from './dto/inventory.dto';
import { InventoryService } from './inventories.service';

const CREATE_INVENTORY_OF_PRODUCT  = 'CreateInventoryOfProduct';


@Controller('inventory')
export class InventoriesController {
  constructor(private readonly inventoryService: InventoryService) {}

  @EventPattern(CREATE_INVENTORY_OF_PRODUCT)
  handleProductInventory(@Payload() inventoryDto: InventoryDto) {
    return this.inventoryService.handleProductInventory(inventoryDto);
  }

  @MessagePattern({ cmd: 'fetch-inventory' })
  getOrders(@Ctx() context: RmqContext) {
    console.log(context.getMessage());
    return this.inventoryService.getInventory();
  }
}
