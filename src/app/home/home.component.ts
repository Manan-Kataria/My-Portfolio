import { Component, OnInit } from '@angular/core';
import { InfoService } from '../Services/info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private infoService : InfoService
  ) { }
  home : any;
  ngOnInit(): void {
    this.home = this.infoService?.user?.home;
    console.log(this.home);
  }

  iconClicked(site: any){
    console.log(`${site} clicked`);        
  }

  downloadFunc(){
    var anchor : any = document.createElement('a');
    anchor.setAttribute('href','../../assets/documents/MyCV.pdf');
    anchor.setAttribute('download','');
    document.body.appendChild(anchor);
    anchor.click();
    anchor.parentNode.removeChild(anchor);
}
}
