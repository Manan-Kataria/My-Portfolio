import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { InfoService } from '../Services/info.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private infoService : InfoService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private http : HttpClient
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

  onSubmit() {
   
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xbjvjrne',
        { name: this.contactForm.controls.name.value, replyto: this.contactForm.controls.email.value, message: this.contactForm.controls.body.value },
        { 'headers': headers }).subscribe(
          (response :any) => {
            console.log(response);
            this.toastr.success('Email sent successfully', 'Success');
            this.contactForm.reset();
          }
        );
  }

  iconClicked(site: string){
    let url : any = this.infoService.user.social[site];
    console.log(`${site} clicked`);  
    window.open(url, '_blank');      
  }
}
