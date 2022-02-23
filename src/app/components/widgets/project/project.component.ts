import { Component, OnInit, Input} from '@angular/core';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() app:Project;
  imgSource:string;
  constructor() { }

  ngOnInit(): void {
    this.imgSource = `../../../assets/${this.app.title}.PNG`;
    this.imgSource = this.imgSource.replace(/ +/g, '');
  }

}
