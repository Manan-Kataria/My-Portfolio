import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  user = {
    "name" : "Manan Kataria",
    "about" : "and I'm a Frontend Developer",
    "btn1_text" : "Download CV",
  }
  ngOnInit(): void {
  }

}
