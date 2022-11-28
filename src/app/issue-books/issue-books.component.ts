import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-books',
  templateUrl: './issue-books.component.html',
  styleUrls: ['./issue-books.component.css']
})
export class IssueBooksComponent {
  Name=""
  Title =""
  Date=""
  MembershipNo=""

  readValue = () =>
  {
    let data:any = {"Name":this.Name,"Title":this.Title,"Date":this.Date,"MembershipNo":this.MembershipNo}
  }


}
