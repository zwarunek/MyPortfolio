import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {

  constructor() { }
  employmentTimeline: any[];

  ngOnInit(): void {
    this.employmentTimeline = [
      {employer: 'Ford', date: '03/30/2019 - Present',  color: '#9C27B0', img: '/assets/images/employers/Ford-logo.jpg', position: "Full Stack Engineer Intern",
        info: 'asldfi jhas dpoifih jasdpi ofhj dpiouo fhaspdi ouifhsaio ufdh siadufh lkisadjih fkjsadhflkjsahflkjuh saifluh sajkfdj sadfkjhgsajhfd jasdfjuhsadbfkjh sadlkfj ijkhsadf'},
      {employer: 'Ford', date: '09/30/2019 - 12/20/2019',  color: '#673AB7', img: '/assets/images/employers/Ford-logo.jpg', position: "Software Developer Intern",
        info: 'asldfijh as poifih jasdpiofhja sdpiouo fhas diouifhsa iou fdh siadufh lkisadjih fkjsadhflkjsahflkjuh saifluh sajkfdj sadfkjhgsajhfd jasdfjuhsadbfkjh sadlkfj ijkhsadf'},
      {employer: 'Ruhlig Farms & Gardens', date: '15/10/2020 16:15',  color: '#FF9800', img: '/assets/images/employers/Ruhligs-logo.png', position: "Cashier",
        info: 'asldfi jhasdpo ifihja sdpiof hjasdpio ofhas pdiouif hsaioufdh siadufh lkisadjih fkjsadhflkjsahflkjuh saifluh sajkfdj sadfkjhgsajhfd jasdfjuhsadbfkjh sadlkfj ijkhsadf'}
    ];
  }

}
