import {Component, HostListener, OnInit} from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  screenHeight: number;
  screenWidth: number;

  constructor() {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
  }

  resizeBackgroundImg(): boolean{
    return this.screenWidth * .666667 > 1200 && this.screenWidth > 1500
  }

}
