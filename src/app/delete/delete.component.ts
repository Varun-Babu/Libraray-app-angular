import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  Title =""

  readValue = () =>
  {
    let data:any = {"Title":this.Title}
    console.log(data)
  }

}
