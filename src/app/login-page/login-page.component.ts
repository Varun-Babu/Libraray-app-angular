import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  Username=""
  Password=""

  constructor(private route:Router){}

  readValue = () =>{
    let data:any = {"Username":this.Username,"Password":this.Password}
    console.log(data)

    if (this.Username=="admin" && this.Password=="23" ) {
      this.route.navigate(['/view'])
      
    } else {
      alert("invalid credentials")
      
    }
  }

}
