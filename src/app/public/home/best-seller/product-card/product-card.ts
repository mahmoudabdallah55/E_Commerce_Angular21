import { Component, Input } from '@angular/core';
import { IBestSellerProduct } from '../best-seller-interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
   @Input({required: true}) product!: IBestSellerProduct;

  isHovering = false;

  onMouseEnter(show: boolean): void {
    this.isHovering = show;
  }


}
