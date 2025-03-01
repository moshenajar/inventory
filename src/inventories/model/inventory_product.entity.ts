import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'inventory_product'})
export class InventoryProductEntity {
    @PrimaryGeneratedColumn('uuid')
    ID?: string;

    @Column({type:'varchar', length: 256})
    InventoryID: string;

    @Column({type:'varchar', length: 36})
    ProductId: string;

    @CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    createDateTime?: Date;

    @CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    updateDateTime?: Date;
}