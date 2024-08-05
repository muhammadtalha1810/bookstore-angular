import { Component, OnInit } from '@angular/core';
import { NgIf , NgFor} from '@angular/common';
import { BooksdataService } from '../booksdata.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  textcontent = "Please enter a keyword to search books";
  booksList:any;
  constructor(private bookService: BooksdataService){}
  ngOnInit(): void {
      this.booksList = [];
  }
  performSearch():void{
    let keyword = (<HTMLInputElement>document.getElementById('searchinput')).value;
    if(!keyword)
    {
      this.booksList = [];
      this.textcontent= "Please enter a keyword to search books";
    }
    let path = "https://localhost:7015/api/books/search/" + keyword;
    this.bookService.getSearchedBooks(path).subscribe(
      (data) => {
        this.booksList = data;
        if(this.booksList.length ===0)
        {
          this.textcontent= "no book found for current keywords";
        }
      },
      (error) => {
        console.error('Error fetching books: ', error);
      }
    );
  }
}
