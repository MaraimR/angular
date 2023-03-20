import { uersrervice } from './../../services/user.service';
import { UserModule } from './../user/user.module';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-use-register',
  templateUrl: './use-register.component.html',
  styleUrls: ['./use-register.component.scss']
})
export class UseRegisterComponent {
userformgroup:FormGroup;
user:User={} as User ;
constructor(private formBuilder: FormBuilder, private useripi:uersrervice){
//   this.userformgroup=new FormGroup({
// fullname: new FormControl('',[Validators.required,Validators.minLength(5)]),
// Email:new FormControl('',[Validators.required,Validators.email]),
// mobileNo:new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
// address:new FormGroup({
//   city:new FormControl('',[Validators.required]),
//   potal:new FormControl('',[Validators.required]),
//   street:new FormControl('',[Validators.required]),
// }),
// password:new FormControl('',[Validators.required,Validators.minLength(6)])
//   })
this.userformgroup=this.formBuilder.group({
  fullname:['',[Validators.required,Validators.minLength(5)]],
  Email:['',[Validators.required,Validators.email]],
  mobileNo:formBuilder.array([formBuilder.control(''),[Validators.required,Validators.pattern('[0-9]{10}')]]),
  address:this.formBuilder.group({
    city:['',[Validators.required]],
    potal:['',[Validators.required]],
    street:['',[Validators.required]]
  }),
  password:['',[Validators.required,Validators.minLength(6)]],
 
})

}
get fullname(){

  return this.userformgroup.get('fullname')
}
get Email(){

  return this.userformgroup.get('Email')
}
get address(){

  return this.userformgroup.get('address')
}
get city(){

  return this.address?.get('city')
}
get  street (){

  return this.address?.get('street')
}
get   potal (){

  return this.address?.get('potal')
}
get mobileNo(){
  return this.userformgroup.get('mobileNo') as FormArray;
}
addMobile(){
  // add new control
  // push
  this.mobileNo.push(this.formBuilder.control(''));
//this.mobileNo.disable
}
deleteMobile(index:number){
  
  this.mobileNo.removeAt(index)
}

addNewUser(){

  this.user=this.userformgroup.value

  this.useripi.addprodect(this.user).subscribe({
    next:(newUser)=>{
      console.log(newUser);
    
      
    },
    error:(err)=>{
      console.log(err);
      
    }
  })


}
}
