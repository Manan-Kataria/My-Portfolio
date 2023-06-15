import { Component, OnInit } from '@angular/core';
import { InfoService } from '../Services/info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about :any;
  constructor(
    private inforService : InfoService
  ) { }
  
  ngOnInit(): void {
    this.about = this.inforService?.user?.about;
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
