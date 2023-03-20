import { Component, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges } from '@angular/core';
import { Route, Router } from '@angular/router';
import { count } from 'rxjs';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { ProdectService } from 'src/app/services/prodect.service';
import {ProdectApiService  } from "src/app/services/prodect-api.service";
import { NationalidPipe } from 'src/app/pipe/nationalid.pipe';
@Component({
  selector: 'app-prodect',
  templateUrl: './prodect.component.html',
  styleUrls: ['./prodect.component.scss']
})
export class ProdectComponent implements OnInit, OnChanges {
  // Discount = DiscountOffers.No


  // Discount1 = DiscountOffers.disoffer1
  // Discount2= DiscountOffers.disoffer2

  // ClientName: string = "maraim"
  // store: Store = new Store("mobile", ["alex", "sohage"], "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAMAAAAqeZcjAAAAYFBMVEUAAAD////g4OBMTEwRERHAwMD5+fkbGxu1tbVRUVHv7+/r6+s0NDR+fn7d3d2KiopFRUUgICAsLCzR0dFYWFjJycl2dnaRkZFsbGxkZGSioqJAQECpqak7OzsnJyeXl5f3w4KWAAAEZUlEQVRogd2babOrIAyG0Sp16e7WxdP+/395EdciJLFNx5n7fjxDeY4QICRBeAsls6g+XuO/cyBEcDnl5asO/aWdeGJJ46y+Crsu+2gRm4xNw2vgYHY6HwvJi03CfAszWz33GR/2cLxQmK1OdcKCzW50ZjfY6dfYLF8I1dpjXwxjU5flonrB1gVh5etTqNI5/BBbPL+gKt2AkXZj999BG0WLsT5pnWK6umbYga05oEpbx5ZpxzIMcC/7QNuwcukGAepFxCYnTqoQRxI23fFS1Z5FwPJTbVwTm/yAahlnAyuZ57VXBWNZbXiqO4RF1usmBvSAf1u4seDelB9mhmEoOkO/fzv7p1gf+pVt9ZmSG6CDnQsL7f45gapWH+RcTpfRBAtOLNEjPEJ9TKZ3xBbQL/6IHnAGdSLGTgasBH2Jjdm/f9Ayz7UD6MKPwzxgYb/JxA4T8r4uPB++OQxT1WNTsPkMO/RubAMIduimxyKeqYnNNlon001DsMOh32FhU7DMrUMYdiffsJjvz4UV9RSLfSwftvvcFosePA3WjxBRsN3sauwBa6uxIdaIhN2MWHBLY8a2a7dpm+C3Zkbstcei/bFiz2mHJdycGbHaqFTblHDL4sTGLZYwxqzYbaqxlEABJ1aEGktpyYotGyy6MbJjtw2WdINmxQpfYUkxIF5spLCUdszYyhNyBWzsCZJFMWPVEEdrYKWghYKYsQeBn7U/wBaCFkNlxkYiXgf7twb2JcAb+K+wlaC1Y8bS7Pj/wa40yLTMErsl06J9zNi7oKWX2LeLch0sLcXEfhSscvD5gnIn+IF3AcY3f4QN1vEcbwpL2i94sXeFJWW4eLGFwpJcR1ZskCgsyaZYsTt90aT4F6zYSmMpZy4rttBYMGz+A+xTaiwcN+fHll2AiLCEOLFZhyVc+hixOsaqY464h8GIrYZQJ374MWL9AZugS5cPexsDu/jSbbFbUDRsNsEi6RjGoH2XK+xSFNgaYsNmb9hkOba4Wyo5MGyfGO3TT4gDOcc25hAvxvap5x4rYWOepxb1n2c1UQh2yC0OqUV4ecyw7flRL8QOmdQxfwvmgk5m/60xzJLJcGpnNAZhdOTQc1bMF21tVTrgITpJtE+S5KBTNbfaNLPUQoFDNsl+TksCoBDVhVI0CX/s9D+fYiWUItkQuOAJWk5bvpV7wE5kdZCQkhC8sz48J5bmM3+mBMBim9XnMszPrJeiRowWyihYmFeHMRb9jZptovNauB9w54veUvnHPs6WIlpbnWPFSzXn1YX17pxUazmpvZiUci2i6WHf3Byls1zVjqW9e3d9MotBOwuU3WXR3w907j49gCJw+eUHu2uxkUr7DKrkQ7QHy9iQdwXRh6aFFUVizxlk/QE4R+sE8ccbMlo41DdCcSLlqYqXXWlJKqVdRXoXRMKq7SOKCbUozzIj1kMSsQ05LCFysKvor5CWPbry/KiyZUCD270gObQfYrWSqHli9myfmN3KF7G89U3/ANIILpc0wRBiAAAAAElFTkSuQmCC")

  // showimg: boolean = true
  // tag() {

  //   this.showimg = !this.showimg

  // }

  // ProductList: IProduct[];
  @Input() resevcateid: number = 0;
  prouctlistcat: IProduct[] = [];
  ordertotalprice: number = 0;
  @Output() tatalpricechane: EventEmitter<number>
  date: Date = new Date();
  national: NationalidPipe = new NationalidPipe;  ///ingcet service
  
  
  ///ingcet service
  constructor(private prodsrevice: ProdectService, private router: Router,
     private ProdectApiService: ProdectApiService,

  ) {
    this.tatalpricechane = new EventEmitter<number>()
    //   this.ProductList = [{
    //     id: 1, name: " 	LG", Quantity: 4, Price: 4000, CateogryID: 1, Img: "https://m.media-amazon.com/images/I/71iaZyoeNIL._AC_SL1500_.jpg"
    //   }, {
    //     id: 2, name: "SAMSUNG 65 Inch TV ", Quantity: 1, Price: 7000, CateogryID: 1, Img: "https://m.media-amazon.com/images/I/61gS87TUGGL._AC_UL320_.jpg"
    //   }, {
    //     id: 3, name: "hp", Quantity: 4, Price: 2000, CateogryID: 2, Img: "https://m.media-amazon.com/images/I/81uTW77d3rL._AC_UL320_.jpg"
    //   }, {
    //     id: 4, name: "dill", Quantity: 7, Price: 3000, CateogryID: 2, Img: "https://m.media-amazon.com/images/I/81Gphn97m9L._AC_UL320_.jpg"
    //   }, {
    //     id: 5, name: "iphone", Quantity: 7, Price: 24000, CateogryID: 3, Img: "https://images-eu.ssl-images-amazon.com/images/I/71T5NVOgbpL._AC_UL160_SR160,160_.jpg"
    //   }, { id: 6, name: "Samsung Galaxy ", Quantity: 2, Price: 4000, CateogryID: 3, Img: "https://images-eu.ssl-images-amazon.com/images/I/61mOx8va+LL._AC_UL160_SR160,160_.jpg" }]
  }
  ngOnChanges(): void {
    // this.getcatofid();
  //  this.prouctlistcat = this.prodsrevice.getproductbycatid(this.resevcateid);
    if(this.resevcateid==0){
      this.ProdectApiService.getallprodect().subscribe(data1=>{this.prouctlistcat=data1})
    }else{
    this.ProdectApiService.getprodectbycat(this.resevcateid).subscribe(data=>{this.prouctlistcat=data})
  }
}
  ngOnInit(): void {
    // this.getcatofid();
  //this.prouctlistcat = this.prodsrevice.getproductbycatid(this.resevcateid);

  }

  decrease(pro: IProduct) {

    pro.Quantity--

  }
  // private getcatofid() {
  //   if (this.resevcateid == 0) {
  //     //////////from capy arry
  //     this.prouctlistcat = Array.from(this.ProductList)
  //     return;
  //   }

  //   this.prouctlistcat = this.ProductList.filter((pro) => pro.CateogryID == this.resevcateid)
  // }
  upadettotalprice(totalprice: number, itemcount: any) {
    this.ordertotalprice += (totalprice * parseInt(itemcount))
    this.tatalpricechane.emit(this.ordertotalprice)

    //  this.ordertotalprice+=(totalprice * Number( itemcount))
    //       this.ordertotalprice+=(totalprice * itemcount as number)
    //   this.ordertotalprice+=(totalprice * +itemcount )




  }
  opendetalise(prodid: number) {
    console.log("_________", prodid);

    //this.router.navigate(['path',paremter]) //router inclide navigate ( arry[path,parmter] ) 
    this.router.navigate(['/user/Prodect', prodid]).then(console.log).catch(console.log)

    //this.router.navigate(["Product"])
  }

  // decrease(cont: number) {

  //   for (var i = 0; i < this.ProductList.length; i++) {
  //     if (cont == this.ProductList[i].id) {

  //       this.ProductList[i].Quantity--
  //     }



    //}
  // national(d:string){
  // this.nationalid=d   
  // }

  addcare(id: number, Name: string, quantity: number, price: number, img: string, CateogryID: number): void {
    this.prodsrevice.ProductList.push({

      id: id,
      name: Name,
      Quantity: quantity,

      Price: price,


      CateogryID: CateogryID,
      Img: img,
    })
  }
delet(pid:number){

  var confir =confirm ("are you sure delet??????????????????") ;
  if(confir){
this.ProdectApiService.deletprodect(pid).subscribe(()=>{
this.router.navigateByUrl("/order-parent")

})

  }
}
edit(pid:number){

  this.router.navigate(["edit",pid])
}
}