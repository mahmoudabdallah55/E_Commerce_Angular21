import { Component, Input } from '@angular/core';
import { ICustomerComment } from '../cusromer-comment-list-interface';

@Component({
  selector: 'app-customer-comment',
  imports: [],
  templateUrl: './customer-comment.html',
  styleUrl: './customer-comment.scss',
})
export class CustomerComment {
    customerComment!: ICustomerComment;
  stars: number[] = [];

  @Input({required: true}) set comment (val: ICustomerComment) {
    if (val) {
      this.customerComment = val;
      this.stars.length = val.stars;
    }
  }

}
