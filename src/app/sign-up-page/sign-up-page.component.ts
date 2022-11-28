import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
Name=""
AadharNo=""
Address=""
Pincode=""
Password=""
DateOfBirth=""
Email=""
PhoneNo =""
Username=""


  readValue = () =>{
    let data:any = {"Username":this.Username,"Password":this.Password
    ,"Name":this.Name,"Address":this.Address,"Pincode":this.Pincode,"DateOfBirth":this.DateOfBirth,
  "Email":this.Email,"PhoneNo":this.PhoneNo}


    console.log(data)
  }


}
