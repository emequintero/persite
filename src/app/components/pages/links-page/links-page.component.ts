import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/Link';

@Component({
  selector: 'links-page',
  templateUrl: './links-page.component.html',
  styleUrls: ['./links-page.component.css']
})
export class LinksPageComponent implements OnInit {
  links:Link[] = [];
  constructor() {
    this.links.push(new Link("Github", "https://github.com/emequintero"));
    this.links.push(new Link("LinkedIn", "https://www.linkedin.com/in/%C3%A9me-arc%C3%A1ngel-quintero-macias-bb652b122/"));
  }

  ngOnInit(): void {
  }

}
