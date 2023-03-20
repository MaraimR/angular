import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { CatgoryApiService } from 'src/app/services/catgory-api.service';
import { ProdectApiService } from 'src/app/services/prodect-api.service';

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.scss']
})
export class OrderParentComponent {
  catlist!: ICategory[];
  
  selectcategoryId:number=0;

  resevordertotalprice: number = 0;
  data:IProduct[]=[] ;
  // total:number=0
  // @ViewChild
  // @ViewChild('username')
  // user?: ElementRef;
  // @ViewChild('username')
  // user: ElementRef| null=null;
  // @ViewChild('username')
  // user: ElementRef| undefined=undefined;
  // @ViewChild('username')
  //  user: ElementRef ={} as ElementRef;
  
  
  // @ViewChild('username')
  // user!: ElementRef;
  

  constructor( private catgaryapiserice:CatgoryApiService){

    //this.catlist=[{id:1,name:"	tv"},{id:2,name:"labtop"},{id:3,name:"mobile"}]

    this.catgaryapiserice.getallcatgory().subscribe(data3=>{this.catlist=data3})
  }
  // ngAfterViewInit(): void {
  //  // if(this.user)
  //   this.user.nativeElement.value="hii" ;
  // }
  ontatilprice(totalprice: number){

    this.resevordertotalprice=totalprice;
  }

  
  array(prodects:any){

    this.data=Array.from(prodects.prodect)
    this.resevordertotalprice=prodects.resevordertotalprice
  }

}
