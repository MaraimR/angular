import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { ProdectApiService } from 'src/app/services/prodect-api.service';
import { ProdectService } from 'src/app/services/prodect.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editprodect',
  templateUrl: './editprodect.component.html',
  styleUrls: ['./editprodect.component.scss']
})
export class EditprodectComponent {
  prd: IProduct | undefined = undefined;
  Location: any;

  prodectidlist: number[] = [];
  currentprodectid: number = 0;

  currentindex: number = 0

  ////////////////////////////////////////////////built in sevice
  constructor(private proservise: ProdectService, private activetedroute: ActivatedRoute, private location: Location, private router: Router,
    private prodectapisevice: ProdectApiService) {

    this.prd = {

      id: this.currentprodectid,
      name: "",
      Quantity: 0,
      Price: 0,
      CateogryID: 0,
      Img: "",
    }

  }
  ngOnInit(): void {


    this.currentprodectid = (this.activetedroute.snapshot.paramMap.get('pid')) ? Number(this.activetedroute.snapshot.paramMap.get('pid')) : 0;

    this.activetedroute.paramMap.subscribe(paramMap => {////////subscribr return object
      this.currentprodectid = (paramMap.get('pid')) ? Number(paramMap.get('pid')) : 0;
      let foundprodect = this.proservise.getptodectbyid(this.currentprodectid);
      console.log(foundprodect);
      if (foundprodect) {
        this.prd = foundprodect;


      }
      else {
this.router.navigate(['/edit',foundprodect])
        this.location.back()
        // console.log(this.location.back())
      }
    })
    this.prodectidlist = this.proservise.getprodectidlist();
  }




  backk() {
    this.location.back();

  }







  edit(newNam: string, newQun: any, newPrice: any, myCat: any, img: string) {
    this.prd = {
      id: this.currentprodectid,
      name: newNam,


      Quantity: parseInt(newQun)
      ,
      Price: parseInt(newPrice),
      CateogryID: parseInt(myCat),
      Img: img,
    }

    this.prodectapisevice.updatePrdById(this.prd, this.currentprodectid).subscribe({
      next: (newPrd) => {
        console.log(newPrd);
        this.router.navigate(["order-parent"])

      },
      error: (err) => {
        console.log(err);

      }
    })

  }
}