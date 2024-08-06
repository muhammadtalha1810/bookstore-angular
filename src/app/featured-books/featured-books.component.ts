import { Component, EventEmitter, OnInit} from '@angular/core';
import { NgFor } from '@angular/common';
import { BooksdataService } from '../booksdata.service';
import { Output } from '@angular/core';
//import * as $ from 'jquery';

@Component({
  selector: 'app-featured-books',
  standalone: true,
  imports: [NgFor],
  templateUrl: './featured-books.component.html',
  styleUrl: './featured-books.component.css',
})
export class FeaturedBooksComponent implements OnInit {
  booksList: any[] = [];

  @Output() myevent = new EventEmitter();

  constructor(private bookService: BooksdataService) {
   
  }

  ngOnInit(): void {
    this.fetchBooks();
    
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe(
      (data) => {
        this.booksList = data.slice(0,5);
      },
      (error) => {
        console.error('Error fetching books: ', error);
      }
    );
  }

  loadmorebooks():void{
    this.myevent.emit("Load Books Clicked");
    console.log("Clicked1");
    this.bookService.getBooks().subscribe(
      (data) => {
        for(let i = this.booksList.length; i < data.length ; i++)
        {
          this.booksList.push(data[i]);
        }
      },
      (error) => {
        console.error('Error fetching books: ', error);
      }
    );
  }
}



/*

export class FeaturedBooksComponent implements OnInit {
  booksList: any = [];
  loadbookindex:number = 0;

  constructor() {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    $.ajax({
      type: 'GET',
      url: 'https://localhost:7015/api/books',
      dataType: 'json',
      success: (data: any) => {
        this.booksList = data.slice(0, 5);
      },
      error: (error: any) => {
        console.error('Error fetching books', error);
      }
    });
  }

  loadmorebooks():void{
    $.ajax({
      type: 'GET',
      url: 'https://localhost:7015/api/books',
      dataType: 'json',
      success: (data: any) => {
        for(let i = this.booksList.length; i < data.length; i++)
        {
          this.booksList.push(data[i]);
        }
      },
      error: (error: any) => {
        console.error('Error fetching books', error);
      }
    });
  }
}

*/
