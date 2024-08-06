import { Component, EventEmitter, Output } from '@angular/core';
import { BooksdataService } from '../booksdata.service';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent {
  message = "Sample Message";
  constructor(private bookService: BooksdataService) {}

  addbook(e:any):void{
    e.preventDefault();
    var formData = { 
      id:       (<HTMLInputElement>document.getElementById('book-id')).value, 
      title:    (<HTMLInputElement>document.getElementById('book-title')).value,
      author:   (<HTMLInputElement>document.getElementById('book-author')).value, 
      price:    (<HTMLInputElement>document.getElementById('book-price')).value, 
      imageUrl: (<HTMLInputElement>document.getElementById('book-imageurl')).value};
    
    this.bookService.addBook(formData).subscribe(
      (response) => {
        this.shownotif('Book added successfully');
        console.log('Book added successfully: ', response);
        // Optionally, fetch books again to refresh the list after adding
        //this.fetchBooks();
      },
      (error) => {
        this.shownotif('Error adding book');
        //console.error('Error adding book: ', error);
      }
    );

  }
  async shownotif(msg:string):Promise<any>{
    this.message = msg;
    (<HTMLInputElement>document.getElementById('notification-area')).style.visibility = 'visible';
    await new Promise(resolve => setTimeout(resolve, 3000));
    (<HTMLInputElement>document.getElementById('notification-area')).style.visibility = 'hidden';
  }
}
