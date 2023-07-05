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

  iconClicked(site: string){
    let url : any = this.infoService.user.social[site];
    console.log(`${site} clicked`);  
    window.open(url, '_blank');      
  }

  downloadFunc(){
    var anchor : any = document.createElement('a');
    anchor.setAttribute('href',this.home.cvLink);  
    anchor.setAttribute('download','');
    document.body.appendChild(anchor);
    anchor.click();
    anchor.parentNode.removeChild(anchor);
}
  downloadPortfolio(){
    var anchor : any = document.createElement('a');
    anchor.setAttribute('href',this.home.portfolio);  
    anchor.setAttribute('download','');
    document.body.appendChild(anchor);
    anchor.click();
    anchor.parentNode.removeChild(anchor);
}
}
