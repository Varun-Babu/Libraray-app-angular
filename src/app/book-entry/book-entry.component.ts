import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
BookName =""
Authorname=""
Description=""
Publisher=""
Language=""
ReleasedDate=""
Distributor=""
Price=""
image=""

readValue = () =>
{
  let data:any = {"Bookname":this.BookName,"Authorname":this.Authorname,"Description":this.Description,"Publisher":this.Publisher,"Language":this.Language,"ReleasedDate":this.ReleasedDate,"Distributor":this.Distributor,"Price":this.Price,"image":this.image}
  console.log(data)
}

}
