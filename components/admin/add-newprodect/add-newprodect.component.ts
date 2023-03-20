import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProdectApiService } from 'src/app/services/prodect-api.service';
import { CatgoryApiService } from "src/app/services/catgory-api.service";
import { ICategory } from 'src/app/Models/icategory';
@Component({
  selector: 'app-add-newprodect',
  templateUrl: './add-newprodect.component.html',
  styleUrls: ['./add-newprodect.component.scss']
})
export class AddNewprodectComponent {
  newpr: IProduct = {} as IProduct;
   newcat:ICategory[]=[] ;
  constructor(private prodectapiservice: ProdectApiService, private router: Router
    , private catapisevice: CatgoryApiService) { 
      
       this.catapisevice.getallcatgory().subscribe(data2=>this.newcat=data2)
    }
  addnewprodect() {


    // let newpr: IProduct = {

    //   id: 7, name: "LG", Quantity: 4, Price: 7000, CateogryID: 1, Img: "https://m.media-amazon.com/images/I/71iaZyoeNIL._AC_SL1500_.jpg"
    // }
    // this.prodectapiservice.addprodect(newpr).subscribe(data=>{console.log(data)

    //   this.router.navigate(['/prodects'])
    // })


    this.prodectapiservice.addprodect(this.newpr).subscribe
    (data => { console.log("h",data) })
    this.router.navigate(['/order-parent'])}}


// {
//   next:(data)=>{
//    console.log(data) 
//     this.router.navigate(['/prodect'])
//   }
// }
    
     
  
//   )}
// }
