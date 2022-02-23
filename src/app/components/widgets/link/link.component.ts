import { Component, OnInit, Input } from '@angular/core';
import { Link } from 'src/app/models/Link';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() link:Link;
  imgSource:string;
  constructor() { }

  ngOnInit(): void {
    this.imgSource = `../../../assets/${this.link.name}.png`;
  }

}
