
export interface Order {
    _id:Number;
    userId:Number;
    date:Date;
    status:String;
    email:String;
    orderItems:Array<any>;
}