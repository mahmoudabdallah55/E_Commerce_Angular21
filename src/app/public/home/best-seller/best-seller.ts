import { Component } from '@angular/core';
import { ProductCard } from "./product-card/product-card";
import { IBestSellerProduct } from './best-seller-interface';

@Component({
  selector: 'app-best-seller',
  imports: [ProductCard],
  templateUrl: './best-seller.html',
  styleUrl: './best-seller.scss',
})
export class BestSeller {
    readonly products: IBestSellerProduct[] = [
    {
      name: 'Allen Solly',
      description: 'Women Textured Handheld Bag',
      imageUrl: 'assets/images/adult.png',
      price: '$80.00',
      oldPrice: '$100.00'
    },
    {
      name: 'Allen Solly 2',
      description: 'Women Textured Handheld Bag',
      imageUrl: 'assets/images/boots.png',
      price: '$80.00',
      oldPrice: '$100.00'
    },
    {
      name: 'Allen Solly',
      description: 'Women Textured Handheld Bag',
      imageUrl: 'assets/images/woman-top.png',
      price: '$80.00',
      oldPrice: '$100.00'
    },
    {
      name: 'Allen Solly',
      description: 'Women Textured Handheld Bag',
      imageUrl: 'assets/images/juicer_machine.png',
      price: '$80.00',
      oldPrice: '$100.00'
    }
  ];

}
