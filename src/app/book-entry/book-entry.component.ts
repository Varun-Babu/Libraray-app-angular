import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
title =""
author=""
description=""
releasedYear=""
price=""
image=""

constructor(private api:ApiService){}

readValue = () =>
{
  let data:any = {"title":this.title,"author":this.author,"description":this.description,"releasedYear":this.releasedYear,"price":this.price,"image":this.image}
  console.log(data)
  this.api.addBooks(data).subscribe(
    (response) => {
      console.log(response)
    }
  )
}

}
