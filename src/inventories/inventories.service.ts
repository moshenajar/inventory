import { Injectable } from "@nestjs/common";
import { Logger } from "@nestjs/common/services";
import { InjectRepository } from "@nestjs/typeorm";
import { InventoryEntity } from "src/inventories/model/inventory.entity";
import { Repository } from "typeorm";
import { InventoryDto } from "./dto/inventory.dto";

@Injectable()
export class InventoryService {
    logger = new Logger(InventoryService.name);
    constructor(
        @InjectRepository(InventoryEntity) private readonly repo: Repository<InventoryEntity>
        ){}


    handleProductInventory(inventoryDto: InventoryDto) {
        console.log(inventoryDto.amount);
        this.repo.save(inventoryDto);
        //Send email
      }
    
      getInventory() {
        //return this.createProductInventoryDto;
      }


    public async gatAll() {
        this.logger.debug("bla bla");
        //return await this.repo.find();
    }

    /*public async getOne(id: string) {
        return await this.repo.findOne({
            where:{
                id:id
            },
        });
    }*/

    public async save(inventoryDto: InventoryDto) {
        this.logger.debug("Savin Inventory " + inventoryDto);
        //return await this.repo.save(inventoryDto);
    }
}