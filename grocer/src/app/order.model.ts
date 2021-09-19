import { Product } from "./product.model";

export interface Order {
    _id:number;
    orderId:number;
    userId:number;
    date:Date;
    status:string;
    total:number;
    orderItems:Array<Product>;
}