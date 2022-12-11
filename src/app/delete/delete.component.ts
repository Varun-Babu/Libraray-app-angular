import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  title =""
  constructor(private api:ApiService){}

  searchResult:any =[]
  readValue = () =>
  {
    let data:any = {"title":this.title}
    console.log(data)
    this.api.searchBooks(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length ==0){
          alert("invalid title")
        }
        else{
          this.searchResult = response
        }
      }
    )
  }
  
  deleteBtnClick= (id:any)=>{
    let data:any = {"id":id}
    this.api.deleteBooks(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status == "success") {
          alert("Book deleted Successfully")
        } else {
          alert("Invalid")
        }

      }
    )
  }

}
