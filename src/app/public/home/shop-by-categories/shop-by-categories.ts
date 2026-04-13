import { Products } from './../../products/products';
import { Component } from '@angular/core';
import { CategoryCard } from './category-card/category-card';

@Component({
  selector: 'app-shop-by-categories',
  imports: [ CategoryCard],
  templateUrl: './shop-by-categories.html',
  styleUrl: './shop-by-categories.scss',
})
export class ShopByCategories {

    readonly categoriesList: Array<{name: string; imageUrl: string}> = [
    { imageUrl: 'assets/images/casual_wear.png', name: 'Casual Wear' },
    { imageUrl: 'assets/images/western_wear.png', name: 'Western Wear' },
    { imageUrl: 'assets/images/ethnic_wear.png', name: 'Ethnic Wear' },
    { imageUrl: 'assets/images/kids_wear.png', name: 'Kids Wear' }
  ];






}
