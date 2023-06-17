import { Component, OnInit } from '@angular/core';
import { InfoService } from '../Services/info.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private infoService : InfoService) { }
  education : any;
  experience : any;

  ngOnInit(): void {
    this.education = this.infoService?.user?.work?.education;
    this.experience = this.infoService?.user?.work?.experience;
    console.log(this.education, this.experience);
  }

}
