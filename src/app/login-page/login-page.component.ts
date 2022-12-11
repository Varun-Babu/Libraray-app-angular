import { Component, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  password=""
  email=""

  constructor(private api:ApiService,private route:Router){}

  readValue = () =>{
    let data:any = {"email":this.email,"password":this.password}
    console.log(data)
    this.api.userLogin(data).subscribe(
      (response: any) => {
        this.email = ""
        this.password = ""
        if (response.status == "success") {
          let userId = response.userId
          console.log(userId);
          localStorage.setItem("userInfo",userId)
          this.route.navigate(["/view"])
        } else {
          alert(response.message)
        }
      }
    )
    
    }
  }

