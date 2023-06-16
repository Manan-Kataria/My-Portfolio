import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InfoService } from '../Services/info.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private infoService : InfoService,
    private fb: FormBuilder
  ) { }
  contactForm: any;
  contactInfo : any;
  ngOnInit(): void {
    this.contactInfo = this.infoService?.user?.contact;
    this.contactForm=this.fb.group({
      "name" : ["", [Validators.required]],
      "email" : ["", [Validators.required, Validators.email]],
      "subject" : ["", [Validators.required]],
      "body" : ["", [Validators.required]]
    });
  }

  onSubmit(){
    console.log("Form submitted", this.contactForm);
  }

  iconClicked(site: string){
    let url : any = this.infoService.user.social[site];
    console.log(`${site} clicked`);  
    window.open(url, '_blank');      
  }
}
