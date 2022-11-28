import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  Username=""
  Password=""

  readValue = () =>{
    let data:any = {"Username":this.Username,"Password":this.Password}
    console.log(data)

    if (this.Username=="admin" && this.Password=="23" ) {
      alert("valid")
      
    } else {
      alert("invalid credentials")
      
    }
  }

}
