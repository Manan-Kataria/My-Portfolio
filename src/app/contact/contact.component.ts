import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }
  contactForm: any;
  contactInfo = [
    {
      "property": "Name",
      "value": "Manan Kataria",
      "icon": "bi bi-person-fill"
    },
    {
      "property": "Address",
      "value": "Delhi, India",
      "icon": "bi bi-pin-map-fill"
    },
    {
      "property": "Email",
      "value": "katariamanan1997@gmail.com",
      "icon": "bi bi-envelope-fill"
    }
  ]
  ngOnInit(): void {
    this.contactForm=this.fb.group({
      "name" : ["", [Validators.required]],
      "email" : ["", [Validators.required, Validators.email]],
      "subject" : ["", [Validators.required]],
      "body" : ["", [Validators.required]]
    })
  }

  onSubmit(){
    console.log("Form submitted", this.contactForm);
  }

  iconClicked(site: any){
    console.log(`${site} clicked`);        
  }
}
