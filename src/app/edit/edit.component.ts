import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  Title =""

  readValue = () =>
  {
    let data:any = {"Title":this.Title}
    console.log(data)
  }

}
