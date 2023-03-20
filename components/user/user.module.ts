import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ProdectComponent } from './prodect/prodect.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
 {path:'edit',component:EditProfileComponent,canActivate:[AuthGuard]},
 { path: 'prodect',component: ProdectComponent, canActivate: [AuthGuard] },
 { path: 'Prodect/:pid', component: DetailsComponent },
]


@NgModule({
  declarations: [
    EditProfileComponent,
   
 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) 
  ]
})
export class UserModule { }
