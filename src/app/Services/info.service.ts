import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class InfoService {
    user : any = {
        "home": {
            "greetings": "Hi, my name is",
            "name": "Manan Kataria",
            "about": "and I'm a Frontend Developer"
        },
        "about": {
            "intro": "I'm Manan and I'm a Frontend Developer.",
            "details": "Oil spills are another source of water pollution. In April 2010, the Deepwater Horizon oil rig exploded in the Gulf of Mexico, causing oil to gush from the ocean floor. In the following months, hundreds of millions of gallons of oil spewed into the gulf waters. The spill produced large plumes of oil under the sea and an oil slick on the surface as large as 24,000 square kilometers (9,100 square miles). The oil slick coated wetlands in the U.S. states of Louisiana and Mississippi, killing marsh plants and aquatic organisms such as crabs and fish. Birds, such as pelicans, became coated in oil and were unable to fly or access food. More than two million animals died as a result of the Deepwater Horizon oil spill."
        },
        "skills": [
            {
                "skill": "HTML",
                "value": "80%",
                "icon": "../../assets/skills/html.svg"
            },
            {
                "skill": "CSS",
                "value": "60%",
                "icon": "../../assets/skills/css.svg"
            },
            {
                "skill": "Javascript",
                "value": "80%",
                "icon": "../../assets/skills/javascript.svg"
            },
            {
                "skill": "Angular",
                "value": "80%",
                "icon": "../../assets/skills/angular.svg"
            },
            {
                "skill": "Java",
                "value": "60%",
                "icon": "../../assets/skills/java.svg"
            },
            {
                "skill": "Bootstrap",
                "value": "60%",
                "icon": "../../assets/skills/bootstrap.svg"
            },
            {
                "skill": "MySql",
                "value": "60%",
                "icon": "../../assets/skills/mysql.svg"
            },
            {
                "skill": "MongoDB",
                "value": "50%",
                "icon": "../../assets/skills/mongodb.svg"
            }
        ],
        "work": {},
        "contact": [
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
            },
            {
                "property": "Phone",
                "value": "9643778784",
                "icon": "bi bi-telephone-fill"
            }
        ],
        "social": {
            "facebook": "https://www.facebook.com/manan.kataria",
            "instagram": "https://www.instagram.com/_manan_kataria_/",
            "linkedin": "https://www.linkedin.com/in/manan-kataria-595774170",
            "twitter": "https://twitter.com/manankataria97?s=11"
        }
    }
    constructor() { }
}
