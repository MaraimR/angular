import { Component } from '@angular/core';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { Store } from 'src/app/Models/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  nationalID: string = '29809102601427'
  creditCard: string = '0000000000000000'


  Discount = DiscountOffers.No


  Discount1 = DiscountOffers.disoffer1
  Discount2 = DiscountOffers.disoffer2

  ClientName: string = "maraim"
  store: Store = new Store("mobile", ["alex", "sohage"], "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAMAAAAqeZcjAAAAYFBMVEUAAAD////g4OBMTEwRERHAwMD5+fkbGxu1tbVRUVHv7+/r6+s0NDR+fn7d3d2KiopFRUUgICAsLCzR0dFYWFjJycl2dnaRkZFsbGxkZGSioqJAQECpqak7OzsnJyeXl5f3w4KWAAAEZUlEQVRogd2babOrIAyG0Sp16e7WxdP+/395EdciJLFNx5n7fjxDeY4QICRBeAsls6g+XuO/cyBEcDnl5asO/aWdeGJJ46y+Crsu+2gRm4xNw2vgYHY6HwvJi03CfAszWz33GR/2cLxQmK1OdcKCzW50ZjfY6dfYLF8I1dpjXwxjU5flonrB1gVh5etTqNI5/BBbPL+gKt2AkXZj999BG0WLsT5pnWK6umbYga05oEpbx5ZpxzIMcC/7QNuwcukGAepFxCYnTqoQRxI23fFS1Z5FwPJTbVwTm/yAahlnAyuZ57VXBWNZbXiqO4RF1usmBvSAf1u4seDelB9mhmEoOkO/fzv7p1gf+pVt9ZmSG6CDnQsL7f45gapWH+RcTpfRBAtOLNEjPEJ9TKZ3xBbQL/6IHnAGdSLGTgasBH2Jjdm/f9Ayz7UD6MKPwzxgYb/JxA4T8r4uPB++OQxT1WNTsPkMO/RubAMIduimxyKeqYnNNlon001DsMOh32FhU7DMrUMYdiffsJjvz4UV9RSLfSwftvvcFosePA3WjxBRsN3sauwBa6uxIdaIhN2MWHBLY8a2a7dpm+C3Zkbstcei/bFiz2mHJdycGbHaqFTblHDL4sTGLZYwxqzYbaqxlEABJ1aEGktpyYotGyy6MbJjtw2WdINmxQpfYUkxIF5spLCUdszYyhNyBWzsCZJFMWPVEEdrYKWghYKYsQeBn7U/wBaCFkNlxkYiXgf7twb2JcAb+K+wlaC1Y8bS7Pj/wa40yLTMErsl06J9zNi7oKWX2LeLch0sLcXEfhSscvD5gnIn+IF3AcY3f4QN1vEcbwpL2i94sXeFJWW4eLGFwpJcR1ZskCgsyaZYsTt90aT4F6zYSmMpZy4rttBYMGz+A+xTaiwcN+fHll2AiLCEOLFZhyVc+hixOsaqY464h8GIrYZQJ374MWL9AZugS5cPexsDu/jSbbFbUDRsNsEi6RjGoH2XK+xSFNgaYsNmb9hkOba4Wyo5MGyfGO3TT4gDOcc25hAvxvap5x4rYWOepxb1n2c1UQh2yC0OqUV4ecyw7flRL8QOmdQxfwvmgk5m/60xzJLJcGpnNAZhdOTQc1bMF21tVTrgITpJtE+S5KBTNbfaNLPUQoFDNsl+TksCoBDVhVI0CX/s9D+fYiWUItkQuOAJWk5bvpV7wE5kdZCQkhC8sz48J5bmM3+mBMBim9XnMszPrJeiRowWyihYmFeHMRb9jZptovNauB9w54veUvnHPs6WIlpbnWPFSzXn1YX17pxUazmpvZiUci2i6WHf3Byls1zVjqW9e3d9MotBOwuU3WXR3w907j49gCJw+eUHu2uxkUr7DKrkQ7QHy9iQdwXRh6aFFUVizxlk/QE4R+sE8ccbMlo41DdCcSLlqYqXXWlJKqVdRXoXRMKq7SOKCbUozzIj1kMSsQ05LCFysKvor5CWPbry/KiyZUCD270gObQfYrWSqHli9myfmN3KF7G89U3/ANIILpc0wRBiAAAAAElFTkSuQmCC")

  showimg: boolean = true
  tag() {

    this.showimg = !this.showimg

  }
}
