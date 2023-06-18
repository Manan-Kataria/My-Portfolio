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
            "details": "Software engineer with 2.7+ years of experience facilitating cutting edge solution with wide range of technical skills. Ability to develop interactive and user-centerer website.Excellent problem-solving skills and ability to perform well in team. Passionate about coding and learning new technologies."
        },
        "skills": [
            {
                "skill": "HTML",
                "value": "80%",
                "icon": "assets/skills/html.svg"
            },
            {
                "skill": "CSS",
                "value": "60%",
                "icon": "assets/skills/css.svg"
            },
            {
                "skill": "Javascript",
                "value": "80%",
                "icon": "assets/skills/javascript.svg"
            },
            {
                "skill": "Angular",
                "value": "80%",
                "icon": "assets/skills/angular.svg"
            },
            {
                "skill": "Java",
                "value": "60%",
                "icon": "assets/skills/java.svg"
            },
            {
                "skill": "Bootstrap",
                "value": "60%",
                "icon": "assets/skills/bootstrap.svg"
            },
            {
                "skill": "MySql",
                "value": "60%",
                "icon": "assets/skills/mysql.svg"
            },
            {
                "skill": "MongoDB",
                "value": "50%",
                "icon": "assets/skills/mongodb.svg"
            }
        ],
        "work": {
            "education" : [
                {
                    "level" : "B.Tech",
                    "school" : "Bhagwan Parshuram Institute Of Technology",
                    "location" : "Delhi, India",
                    "percentage" : "87.5%",
                    "years" : "2016-2020"
                },
                {
                    "level" : "12th",
                    "school" : "St. Margaret Sr. Sec. School",
                    "location" : "Delhi, India",
                    "percentage" : "91.2%",
                    "years" : "2016"
                },
                {
                    "level" : "10th",
                    "school" : "St. Margaret Sr. Sec. School",
                    "location" : "Delhi, India",
                    "percentage" : "85.5%",
                    "years" : "2014"
                }
                
            ],
            "experience" : [
                {
                    "company" : "Biz2Credit | Biz2X",
                    "location" : "Noida, India",
                    "designation" : "Software Engineer",
                    "project" : "Biz2X Pro",
                    "years" : "Nov 2022 - Present"
                },
                {
                    "company" : "Infosys",
                    "location" : "Bengaluru, India",
                    "designation" : "Senior System Engineer",
                    "project" : "Converge, CMA, Martini",
                    "years" : "Jul 2022 - Nov 2022"
                },
                {
                    "company" : "Infosys",
                    "location" : "Bengaluru, India",
                    "designation" : "System Engineer",
                    "project" : "CMA, Martini",
                    "years" : "Apr 2021 - Jun 2022"
                },
                {
                    "company" : "Infosys",
                    "location" : "Mysore, India",
                    "designation" : "System Engineer Trainee",
                    "project" : "Training Demo",
                    "years" : "Nov 2020 - Mar 2021"
                }
            ]
        },
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
        "social":{
            "facebook": "https://www.facebook.com/manan.kataria",
            "instagram": "https://www.instagram.com/_manan_kataria_/",
            "linkedin":"https://www.linkedin.com/in/manan-kataria-595774170",
            "twitter":"https://twitter.com/manankataria97?s=11"
        }
    }
    
    constructor() { }
}
