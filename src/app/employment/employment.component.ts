import {Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {
  mobile

  constructor(private ngZone:NgZone) {
    window.onresize = (e) =>
    {
      //ngZone.run will help to run change detection
      this.ngZone.run(() => {
        this.mobile = window.innerWidth <= 720;
      });
    };
  }
  employmentTimeline: any[];

  ngOnInit(): void {
    this.mobile = window.innerWidth <= 720;
    this.employmentTimeline = [
      {
        employer: 'Amazon',
        date: '06/27/2022 - 09/16/2022',
        img: '/assets/images/employers/Amazon-logo.png',
        position: "Incoming SDE Intern",
        type: '',
        info: ''
      },
      {
        employer: 'Ford Motor Company',
        date: '03/30/2021 - Present',
        img: '/assets/images/employers/Ford-logo.jpg',
        position: "ADAS Software Engineer",
        type: 'Co-op',
        info: ' Built a tool to annotate large amounts of video data for training. Developed a root cause analysis tool' +
          ' to parse logs generated from NN testing to more efficiently analyze NN performance. Reviewed and created ' +
          'documentation for ADAS software. Annotated and prepared large datasets for training.'
      },
      {
        employer: 'Ford Motor Company',
        date: '03/30/2020 - 12/23/2020',
        img: '/assets/images/employers/Ford-logo.jpg',
        position: "Full Stack Engineer",
        type: 'Co-op',
        info: 'I worked on an internal website for employees to see and change various settings on vehicles. The ' +
          'website is written in AngularJS with a Java backend. I have gained very useful skills working here ' +
          'including source control, code reviews, working with SQL databases, and creating and consuming REST APIs.'
      },
      {employer: 'Ford Motor Company',
        date: '09/30/2019 - 12/20/2019',
        img: '/assets/images/employers/Ford-logo.jpg',
        position: "Software Developer",
        type: 'Co-op',
        info: 'I supported data scientists with interpreting vehicle data and helped to streamline the data ' +
          'collection process. I also developed a search engine to parse the data coming off of the vehicles. ' +
          'This was an area that I saw employees struggling in and wanted to create an easy way for them to look ' +
          'at what data they could be getting off of the cars. It also converted the data into a format that a ' +
          'human could easily read and search through.'
      },
      {employer: 'Ruhlig Farms & Gardens',
        date: '05/05/2018 - 06/28/2019',
        img: '/assets/images/employers/Ruhligs-logo.png',
        position: "Cashier",
        type: 'Seasonal/Part-time',
        info: 'Ruhlig Farms and Gardens is a local retail center for flowers and plants. This was my first real job. ' +
          'I worked here as a cashier for my Junior and Senior year of high school.'
      }
    ];
  }


}
