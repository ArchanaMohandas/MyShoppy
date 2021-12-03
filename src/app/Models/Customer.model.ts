export class Customer {
   customerId:number;
   custName:string;
   custEmail:string;
   custPhone:number;
   custCity:string;
   isRegularCustomer:boolean;
   custAge:number;
   

   constructor()
   {
       this.customerId=0;
       this.custName='';
       this.custEmail='';
       this.custPhone=0;
       this.custCity='';
       this.isRegularCustomer=false;
       this.custAge=0;
   }
}