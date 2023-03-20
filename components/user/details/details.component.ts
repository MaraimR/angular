import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProdectService } from 'src/app/services/prodect.service';
import { Location } from '@angular/common';
import { ProdectApiService } from 'src/app/services/prodect-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  prd: IProduct | undefined = undefined;
  Location: any;
  ///////proprty arry return all id from sevice fun getprodectidlist() day5
  prodectidlist:number[]=[];
  currentprodectid:number=0;
 /////// return index
  currentindex:number=0

  ////////////////////////////////////////////////built in sevice
  constructor(private proservise: ProdectService, private activetedroute: ActivatedRoute, private location: Location,private router:Router,
    private prodectapisevice:ProdectApiService) {



  }
  ngOnInit(): void {

    /////activetedroute is built in service=>snapshot=>getpramterod url is name paramap
    ///let prodectid=this.activetedroute.snapshot.paramMap.get('pid')

  //   let prodectid: number = (this.activetedroute.snapshot.paramMap.get('pid')) ? Number(this.activetedroute.snapshot.paramMap.get('pid')) : 0;
  //   let foundprodect = this.proservise.getptodectbyid(prodectid);
  //   console.log(foundprodect);
  //   if (foundprodect) {
  //     this.prd = foundprodect;
     
  //     // console.log("**********",this.prd)

  //   }
  //  else{

  //  this.location.back()
  // // console.log(this.location.back())
  //  }
   ///day 5
   
  this.currentprodectid = (this.activetedroute.snapshot.paramMap.get('pid')) ? Number(this.activetedroute.snapshot.paramMap.get('pid')) : 0;
//    let foundprodect = this.proservise.getptodectbyid(this.currentprodectid);
//    console.log(foundprodect);
//    if (foundprodect) {
//      this.prd = foundprodect;
    
//      
//    }
//   else{

//   this.location.back()
//  // console.log(this.location.back())
//   }
   
//////return arry all id
////////////console.log(this.prodectidlist)
this.activetedroute.paramMap.subscribe(paramMap=>{////////subscribr return object
  this.currentprodectid=(paramMap.get('pid')) ? Number(paramMap.get('pid')) : 0;
  let foundprodect = this.proservise.getptodectbyid(this.currentprodectid);
  console.log(foundprodect);
  if (foundprodect) {
    this.prd = foundprodect;
   
    
  }
 else{

 this.location.back()
// console.log(this.location.back())
 }
})
this.prodectidlist=this.proservise.getprodectidlist();
  }
  
 

next(){
  this.currentindex=this.prodectidlist.findIndex((item)=>item==this.currentprodectid)
  this.router.navigate(["user/Prodect",this.prodectidlist[++this.currentindex]])

}
privese(){
 this.currentindex=this.prodectidlist.findIndex((item)=>item==this.currentprodectid)
this.router.navigate(["user/Prodect",this.prodectidlist[--this.currentindex]])
}
backk(){
  this.location.back();
  
 }

 searchprodect(prodectname:string){
 let foudsearch= this.proservise.searchprodectname(prodectname)
if(foudsearch){
this.prd==foudsearch
console.log(foudsearch)
}
else{

  alert("prodect not find")
}
 }


}


