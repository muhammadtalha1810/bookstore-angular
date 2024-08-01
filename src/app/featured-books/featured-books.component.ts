import { Component } from '@angular/core';
import { Books } from '../books';
import { BookComponent } from '../book/book.component';
import { NgFor } from '@angular/common';
import * as $ from 'jquery';


@Component({
  selector: 'app-featured-books',
  standalone: true,
  imports: [BookComponent, NgFor],
  templateUrl: './featured-books.component.html',
  styleUrl: './featured-books.component.css'
})
export class FeaturedBooksComponent{
  some:string = "This is the content";
  booksList: Books[] = [{
    id:1,
    title:"Book-1",
    author:"Author-1",
    price:4555,
    imageUrl:"Image-1"
  },
  {
    id:2,
    title:"Book-2",
    author:"Author-2",
    price:4555,
    imageUrl:"Image-2"
  },
  {
    id:3,
    title:"Book-3",
    author:"Author-3",
    price:4555,
    imageUrl:"Image-3"
  }];
  
  constructor()
  {
    console.log(this.booksList);
    setTimeout(() => {
      this.booksList.push({
        id:4,
        title:"Book-4",
        author:"Author-4",
        price:4555,
        imageUrl:"Image-4"
      })
    }, 3000);
    console.log(this.booksList);
    $.ajax({
      type: "GET",
      url: "https://localhost:7015/api/books",
      dataType: "json",
      success: function (data:any) {
          this.booksList = data;
          console.log(this.booksList);
      },
      error: function(error:any){
          //shownotif("Book Server Connection Error",3);
          console.log(error);
      }
    });
  }
}
