import { Component } from '@angular/core';


import { ShopByCategories } from './shop-by-categories/shop-by-categories';
import { BestSeller } from "./best-seller/best-seller";
import { Banner } from "./banner/banner";
import { MonthDeals } from "./month-deals/month-deals";
import { CustomerCommentList } from "./customer-comment-list/customer-comment-list";
import { Testimonials } from "./testimonials/testimonials";
import { InstagramStories } from "./instagram-stories/instagram-stories";

@Component({
  selector: 'app-home',
  imports: [ShopByCategories, BestSeller, Banner, MonthDeals, CustomerCommentList, Testimonials, InstagramStories],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
