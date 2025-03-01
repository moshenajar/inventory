import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'location'})
export class InventoryEntity {
    @PrimaryGeneratedColumn('uuid')
    LocationID?: string;

    @Column({type:'varchar', length: 256})
    warehouseID: string; //1:N

    @Column({type:'varchar', length: 256})
    LocationName: string;

    @Column({type:'varchar', length: 256})
    LocationAddress: string;

    @CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    createDateTime?: Date;

    @CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    updateDateTime?: Date;
}