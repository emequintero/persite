import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { MenuLink } from 'src/app/models/MenuLink';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  menuLinks:MenuLink[] = [];
  constructor(private menuService:MenuService) { }

  public ngOnInit(): void {
    this.menuLinks = this.menuService.getMenuLinks();
  }

  public scrollTo(id:string){
    let element:HTMLElement = document.querySelector(id);
    setTimeout(()=>{
      element.scrollIntoView();
    }, 100);
  }
}
