import {Component, ElementRef, OnInit} from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {faBriefcase, faFilm, faHome} from '@fortawesome/free-solid-svg-icons';
import {faComments, faFilePdf} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private elementRef: ElementRef, private router: Router) { }

  menuItems: any[];
  activeMenuItem: any;

  ngOnInit(): void {
    this.menuItems = [
      {label: 'Home', icon: faHome},
      {label: 'Projects', icon: faBriefcase},
      {label: 'Resume', icon: faFilePdf},
      {label: 'Contact', icon: faComments}
    ];

    this.activeMenuItem = this.menuItems[0];
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#bfbfbf';
  }
  menuChange(active: MenuItem){
    console.log("in menu change");
    let label = (active.label).toLowerCase();
    if(label == 'home')
      label = '';
    if(label != 'resume')
      this.router.navigate([label]);
    else{
      window.location.href="./assets/Resume Summer 2020.pdf";
    }
  }
}
