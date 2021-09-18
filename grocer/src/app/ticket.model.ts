import { Message } from "./message.model";

export interface Ticket {
    _id:number;
    userId:number;
    email:number;
    title:string;
    description:string;
    status:string;
    messages:Array<Message>;
}
