import {Component, HostListener} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  header: HTMLDivElement;

  constructor(router: Router) {

  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    // this.currentSectionName = this.getCurrentSectionName();
  }
}

