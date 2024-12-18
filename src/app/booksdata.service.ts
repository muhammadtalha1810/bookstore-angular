import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksdataService {
  private apiUrl = 'https://localhost:7015/api/books';

  constructor(private http: HttpClient) {}

  // Method to fetch all books from the API
  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getSearchedBooks(path:string): Observable<any[]> {
    return this.http.get<any[]>(path);
  }

  // Method to add a new book to the API
  addBook(book: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, book, {headers});
  }

}
