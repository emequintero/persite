import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {
  projects: Project[] = [];
  pagePtr: number = 0;
  pageChange: string = "";
  currentProject:Project;
  constructor() { }

  ngOnInit(): void {
    //add Nordstrom WMi Egress
    this.projects.push(new Project(
      "Nordstrom WMi Egress",
      "",
      "Multi-App system for ensuring Warehouse Data Integrity.",
      "+ 10 Others"));
    //add breathing connection app
    this.projects.push(new Project(
      "Breathing Connection",
      "http://breathing-connection.com",
      "A guided Breathing Technique mobile app. Making life simpler through breathing.",
      ""));
    //add HIOS
    this.projects.push(new Project(
      "HIOS",
      "",
      "Government collection of systems to manage healthcare.",
      "+ 50 Others"));
    //add fabricate app
    this.projects.push(new Project(
      "Fabricate",
      "http://fabricate-ws.s3-website.us-east-2.amazonaws.com/login",
      "Web Socket based Multi-user Chat Web Application.",
      ""));
      //add vitalsys app
    this.projects.push(new Project(
      "Vitalsys",
      "http://vital-sys.s3-website.us-east-2.amazonaws.com/",
      "A system for demonstrating the capabilities of chaos engineering.",
      "+ 1 Other"));
    //add pathfinding app
    this.projects.push(new Project(
      "Guiden",
      "http://guiden.s3-website.us-east-2.amazonaws.com/",
      "Pathfinding Algorithm visualizer with maze generation capabilities.",
      ""));
    //add sorting app
    this.projects.push(new Project(
      "Sortegy",
      "http://sortegy.s3-website.us-east-2.amazonaws.com/",
      "Sorting algorithm visualizer with a range of options.",
      ""));
    //add rideforce app
    this.projects.push(new Project(
      "Rideforce",
      "",
      "Full-stack application built for Revature that allows employees without cars to get rides. ",
      "+ 20 others"));
      //display first element
      this.currentProject = this.projects[this.pagePtr];
  }

  nextPage() {
    //put currently displayed element in temp
    let temp: Project = this.projects[this.pagePtr];
    //check if page pointer is at the last element
    if (this.pagePtr < this.projects.length-1) {
      //display next element
      temp = this.projects[++this.pagePtr];
    }
    //pointer is at the last element
    else {
      //reset pointer to beginning
      this.pagePtr = 0;
      //display first element
      temp = this.projects[this.pagePtr];
    }
    //set display
    this.currentProject = temp;
    //show right turn animation
    this.pageChange = "right";
  }

  prevPage() {
    //put currently displayed element in temp
    let temp: Project = this.projects[this.pagePtr];
    //check if pointer is at the first element
    if (this.pagePtr > 0) {
      //display previous element
      temp = this.projects[--this.pagePtr];
    }
    //pointer is at the first element
    else {
      //set the pointer to the last element
      this.pagePtr = this.projects.length-1;
      //display last element
      temp = this.projects[this.pagePtr];
    }
    this.currentProject = temp;
    //show left turn animation
    this.pageChange = "left";
  }

}
