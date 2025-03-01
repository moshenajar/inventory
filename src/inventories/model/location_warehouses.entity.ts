import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'location_warehhouses'})
export class InventoryWarehousesEntity {
    @PrimaryGeneratedColumn('uuid')
    ID?: string;

    @Column({type:'varchar', length: 256})
    LocationID: string;

    @Column({type:'varchar', length: 256})
    WarehouseID: string;

    @CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    createDateTime?: Date;

    @CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    updateDateTime?: Date;
}

