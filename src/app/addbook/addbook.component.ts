import { Component } from '@angular/core';
import { BooksdataService } from '../booksdata.service';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent {

  constructor(private bookService: BooksdataService) {}

  addbook(e:any):void{
    e.preventDefault();
    var formData = { 
      id :      document.getElementById('book-id')?.textContent, 
      title:    document.getElementById('book-title')?.textContent, 
      author:   document.getElementById('book-author')?.textContent, 
      price:    document.getElementById('book-price')?.textContent,  
      imageUrl: document.getElementById('book-imageurl')?.textContent,};
    
    this.bookService.addBook(JSON.stringify(formData)).subscribe(
      (response) => {
        console.log('Book added successfully: ', response);
        // Optionally, fetch books again to refresh the list after adding
        //this.fetchBooks();
      },
      (error) => {
        console.error('Error adding book: ', error);
      }
    );

  }
}
