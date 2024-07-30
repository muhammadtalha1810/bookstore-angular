import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeaderComponent } from '../header/header.component';
import { FeaturedBooksComponent } from '../featured-books/featured-books.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NavBarComponent, HeaderComponent, FeaturedBooksComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
