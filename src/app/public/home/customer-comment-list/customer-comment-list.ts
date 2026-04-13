import { Component } from '@angular/core';
import { CustomerComment } from './customer-comment/customer-comment';
import { ICustomerComment } from './cusromer-comment-list-interface';

@Component({
  selector: 'app-customer-comment-list',
  imports: [CustomerComment],
  templateUrl: './customer-comment-list.html',
  styleUrl: './customer-comment-list.scss',
})
export class CustomerCommentList {
   readonly comments: ICustomerComment[] = [
    {
      name: 'Leslie Alexander',
      position: 'Model',
      imageUrl: 'assets/images/avatar.jpg',
      stars: 5,
      comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
    },
    {
      name: 'Jacob Jones',
      position: 'Co-Founder',
      imageUrl: 'assets/images/avatar.jpg',
      stars: 5,
      comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
    },
    {
      name: 'Jenny Wilson',
      position: 'Fashion Designer',
      imageUrl: 'assets/images/avatar.jpg',
      stars: 5,
      comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
    }
  ];

}
