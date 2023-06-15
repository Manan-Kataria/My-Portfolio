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
    "about" : "Frontend Developer, Angular",
    "btn1_text" : "Download CV",
    "btn2_text" : "Contact Me" 
  }
  ngOnInit(): void {
  }

}
