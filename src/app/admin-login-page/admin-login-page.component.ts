import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent {
  Username=""
  Password=""

  constructor(private route:Router){}

  readValue = () =>{
    let data:any = {"Username":this.Username,"Password":this.Password}
    console.log(data)

    if (this.Username=="admin" && this.Password=="23" ) {
      this.route.navigate(['/bookentry'])
      
    } else {
      alert("invalid credentials")
      
    }
  }



}
