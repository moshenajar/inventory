import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'inventory'})
export class InventoryEntity {
    @PrimaryGeneratedColumn('uuid')
    InventoryID?: string;
    //id: string;

    //@Column({type:'varchar', length: 24})
    //productId: string;

    //@Column()
    //amount: number;

    @Column()
    QuantityAvailable: number;

    @Column()
    MinimumStockLevel: number;

    @Column()
    MaximumStockLevel: number;

    @Column()
    ReorderPoint: number;

    @Column({ default: true})
    isActive: boolean;

    @CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    createDateTime?: Date;

    @CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    updateDateTime?: Date;
}