import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { reduce } from 'rxjs';

@Directive({
  selector: '[appBorderBox]'
})
////ElementRef=>js ducment
/////nativeElement=.getelment
export class BorderBoxDirective {
@Input()bordercl:string='red'
@Input('appBorderBox')mousoutcl:string='black'
  constructor(private elm:ElementRef ) {
     elm.nativeElement.style.border="4px solid black"
   }
   ////events
   /// dicretour@HostListener('eventname ')functionname(){}
   @HostListener('mouseout')funmousout(){
    //  this.elm.nativeElement.style.border=`4px dashed green `
   this.elm.nativeElement.style.border=`4px dashed  ${ this.mousoutcl}`
  //  this.elm.nativeElement.style.boxshadow=` 0px 7px 29px 0px green`


    };
   @HostListener('mouseover')funmousover(){

    this.elm.nativeElement.style.border=`4px dashed ${ this.bordercl}`
   }

}
