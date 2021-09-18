import { Product } from "./product.model";

export interface Order {
    _id:number;
    userId:number;
    date:Date;
    status:string;
    email:string;
    orderItems:Array<Product>;
}