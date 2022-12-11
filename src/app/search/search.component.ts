import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
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

}
