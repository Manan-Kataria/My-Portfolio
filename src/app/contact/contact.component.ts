import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
 
  contactInfo = [
    {
      "property" : "Name",
      "value" : "Manan Kataria",
      "icon" : "bi bi-person-fill"
    },
    {
      "property" : "Address",
      "value" : "Delhi, India",
      "icon" : "bi bi-pin-map-fill"
    },
    {
      "property" : "Email",
      "value" : "katariamanan1997@gmail.com",
      "icon" : "bi bi-envelope-fill"
    }
  ]
  ngOnInit(): void {
  }

}
