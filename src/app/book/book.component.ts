import { Component, Input } from '@angular/core';
import { Books } from '../books';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() Book!:Books;

}
