import { Component, OnInit } from '@angular/core';
import { InfoService } from '../Services/info.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any;

  constructor(
    private infoService : InfoService
  ) { }
  
  ngOnInit(): void {
    this.skills = this.infoService?.user?.skills;
    console.log("hey");
  }

}
