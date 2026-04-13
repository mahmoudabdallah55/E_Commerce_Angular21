import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instagram-card',
  imports: [],
  templateUrl: './instagram-card.html',
  styleUrl: './instagram-card.scss',
})
export class InstagramCard {
    @Input({required: true}) imgUrl!: string;

  isHovering = false;

  onMouseEnter(show: boolean): void {
    this.isHovering = show;
  }

}
