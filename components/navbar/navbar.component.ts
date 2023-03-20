import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userLogged:boolean;
  constructor(private authService: UserAuthService){
  this.userLogged=this.authService.userLoggedState;
   console.log(this.userLogged);
  
  }
    ngOnInit(): void {
  
  this.authService.getLoggedStatus().subscribe(result=>{
    this.userLogged=result;
    console.log(this.userLogged);
  
  })
  
    }
}
