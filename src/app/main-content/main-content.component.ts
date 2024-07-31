import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeaderComponent } from '../header/header.component';
import { FeaturedBooksComponent } from '../featured-books/featured-books.component';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { FooterComponent } from "../footer/footer.component";
import { ReviewsComponent } from "../reviews/reviews.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NavBarComponent, HeaderComponent, FeaturedBooksComponent, AboutSectionComponent, FooterComponent, ReviewsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
