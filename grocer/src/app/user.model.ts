
export interface User{
  _id:Number; // Auto-generated user ID, this will be the username
  firstname:String;
  lastname:String;
  email:String;
  dob:String;
  phone:String;
  address:String;
  password:String;
  funds:Number;
  attemptedLogins:Number;
  isLocked:Boolean;
}
