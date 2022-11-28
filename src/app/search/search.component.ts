import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  Title =""

  readValue = () =>
  {
    let data:any = {"Title":this.Title}
    console.log(data)
  }

}
