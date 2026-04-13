import { Component } from '@angular/core';
import { MegaMenu } from './mega-menu/mega-menu';
import { PublicRoutingModule } from "../../public-routing-module";

@Component({
  selector: 'app-header',
  imports: [MegaMenu, PublicRoutingModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  showMenu:boolean=false;
   showMegaMenu(show:boolean) :void {
      this.showMenu=show;
   }

}
