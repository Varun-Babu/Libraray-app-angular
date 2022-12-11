import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
name=""
address=""
password=""
email=""
phone=""
confirmPassword =""

constructor(private api:ApiService, private router:Router){}
  readValue = () =>{
    let data:any = {"name":this.name,"password":this.password,"address":this.address,"email":this.email,"phone":this.phone,"confirmPassword":this.confirmPassword}
    console.log(data)
    if(this.password == this.confirmPassword){
      this.api.userSignUp(data).subscribe(
        (response:any)=>{
          if(response.status == "success"){
            
            alert("user added successfully")
            this.name=""
            this.address=""
            this.password=""
            this.email=""
            this.phone=""
            this.confirmPassword =""
            this.router.navigate([""])
          }
          else{
            alert(response.message)
          }
        }
    
    )
    }
    else{
      alert("Passwords do not match")
    }
  }

}
