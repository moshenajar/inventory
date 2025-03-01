import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'warehouses'})
export class Warehouses {

    @PrimaryGeneratedColumn('uuid')
    warehouseID?: string;

    @Column({type:'varchar', length: 256})
    warehouseName: string;

    @Column({ default: true})
    IsRefrigerated: boolean;

    @Column({type:'varchar', length: 256})
    BAN: string;

    /*
    Billing Account Number - a unique number identifying the customer's account. 
    The BAN is legally responsoble for the account, receiving the bill, making payments, 
    etc.
    */

    @CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    createDateTime?: Date;

    @CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    updateDateTime?: Date;
}