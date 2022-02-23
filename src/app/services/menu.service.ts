import { Injectable } from '@angular/core';
import { MenuLink } from '../models/MenuLink';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuLinks:MenuLink[] = [];
  constructor() { 
    //default add home container
    this.menuLinks.push(new MenuLink("Home", "#home-page", "fa fa-tachometer"));
    //default add about container
    this.menuLinks.push(new MenuLink("About", "#about-page", "fa fa-id-card"));
    //default add portfolio container
    this.menuLinks.push(new MenuLink("Apps", "#projects-page", "fa fa-cubes"));
    //default add links container
    this.menuLinks.push(new MenuLink("Links", "#links-page", "fa fa-server"));
    //default add contact container
    this.menuLinks.push(new MenuLink("Contact", "#contact-page", "fa fa-envelope"));
  }

  getMenuLinks():MenuLink[]{
    return this.menuLinks;
  }
}
