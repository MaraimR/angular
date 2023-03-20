export interface User {


    id:number,
    fullName:string,
    email:string,
    password:string,
   
    address:{
        city:string,
        postalCode:string,
        street:string}
    
}
