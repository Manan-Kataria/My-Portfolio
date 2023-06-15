import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  aboutMe = {
    "intro": "I'm Manan and I'm a Frontend Developer.",
    "details": "Oil spills are another source of water pollution. In April 2010, the Deepwater Horizon oil rig exploded in the Gulf of Mexico, causing oil to gush from the ocean floor. In the following months, hundreds of millions of gallons of oil spewed into the gulf waters. The spill produced large plumes of oil under the sea and an oil slick on the surface as large as 24,000 square kilometers (9,100 square miles). The oil slick coated wetlands in the U.S. states of Louisiana and Mississippi, killing marsh plants and aquatic organisms such as crabs and fish. Birds, such as pelicans, became coated in oil and were unable to fly or access food. More than two million animals died as a result of the Deepwater Horizon oil spill."
  }
  ngOnInit(): void {
  }

}
