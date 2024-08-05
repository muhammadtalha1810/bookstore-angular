import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {
  sendmessage(e:any):void{
    e.preventDefault();
  }
}
