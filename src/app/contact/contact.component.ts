import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  contactInfo = {
    "name" : ["Manan Kataria"],
    "address" : ["Delhi, India"],
    "email" : ["katariamanan1997@gmail.com"]
  }
  ngOnInit(): void {
  }

}
