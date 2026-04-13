import { Component } from '@angular/core';
import { InstagramCard } from './instagram-card/instagram-card';

@Component({
  selector: 'app-instagram-stories',
  imports: [InstagramCard],
  templateUrl: './instagram-stories.html',
  styleUrl: './instagram-stories.scss',
})
export class InstagramStories {
   readonly images: string[] = [
    'assets/images/lady_one.jpg',
    'assets/images/lady_two.jpg',
    'assets/images/lady_three.jpg',
    'assets/images/lady_four.png'
  ];

}
