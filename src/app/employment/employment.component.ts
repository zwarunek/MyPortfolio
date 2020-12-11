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
      {status: 'Ordered', date: '15/10/2020 10:30',  color: '#9C27B0'},
      {status: 'Processing', date: '15/10/2020 14:00',  color: '#673AB7'},
      {status: 'Shipped', date: '15/10/2020 16:15',  color: '#FF9800'},
      {status: 'Delivered', date: '16/10/2020 10:00', color: '#607D8B'}
    ];
  }

}
