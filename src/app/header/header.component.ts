import {Component, ElementRef, OnInit} from '@angular/core';
import {TabMenu, TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {Router, ActivatedRoute } from '@angular/router';
import {faBriefcase, faFilm, faHome, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {faComments, faFilePdf} from '@fortawesome/free-regular-svg-icons';
import {Menu} from 'primeng/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private elementRef: ElementRef, private router: Router, private activatedRoute: ActivatedRoute) { }

  menuItems: any[];
  projectItems: any[];
  activeMenuItem: any;
  dropdownIcon: any = faAngleDown;

  ngOnInit(): void {
    this.menuItems = [
      {label: 'Home', icon: faHome, routerLink: ['']},
      {label: 'Projects', icon: faBriefcase, items: [{label: 'Time Machine'}], routerLink: ['projects']},
      {label: 'Resume', icon: faFilePdf},
      {label: 'Contact', icon: faComments, routerLink: ['contact']}
    ];
    this.projectItems = [
      {label: 'Time Machine', routerLink: ['projects/timemachine']},
      {label: 'Flappy Bird AI', routerLink: ['projects/flappybirdai']},
      {label: 'Ford Search Engine', routerLink: ['projects/fordsearchengine']}
    ];
    if (window.location.href.endsWith('/')) {
      this.activeMenuItem = this.menuItems[0];
    }
    if (window.location.href.includes('projects')) {
      this.activeMenuItem = this.menuItems[1];
    }
    if (window.location.href.endsWith('contact')) {
      this.activeMenuItem = this.menuItems[3];
    }
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#bfbfbf';
  }

  entered($event: any, span: HTMLSpanElement, menu: Menu): void{
    menu.hide();
    for (let i = 0; i < this.menuItems.length; i++){
      if (span.innerText == this.menuItems[i].label && this.menuItems[i].items != null){
        menu.show($event);
        break;
      }
    }
    console.log(span.innerText);
  }
  exit($event: any, span: HTMLSpanElement, menu: Menu): void{

    for (let i = 0; i < this.menuItems.length; i++){
      if (span.innerText == this.menuItems[i].label && this.menuItems[i].items != null){
        menu.hide();
        break;
      }
    }
    console.log('hide');
  }

  navigate($event: MouseEvent): void {
    console.log($event);
  }
}
