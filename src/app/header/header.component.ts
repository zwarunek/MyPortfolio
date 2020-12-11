import {Component, ElementRef, OnInit} from '@angular/core';
import {TabMenu, TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {Router, ActivatedRoute } from '@angular/router';
import {
  faBriefcase,
  faFilm,
  faHome,
  faAngleDown,
  faHamburger,
  faBars,
  faCross,
  faTimes,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import {faComments, faFilePdf} from '@fortawesome/free-regular-svg-icons';
import {Menu} from 'primeng/menu';
import * as $ from 'jquery/dist/jquery.min.js';

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
  mobileMenuIcon: any = faBars;
  xButtonIcon: any = faTimes;


  ngOnInit(): void {
    this.menuItems = [
      {label: 'Home', icon: faHome, routerLink: ['']},
      {label: 'Projects', icon: faBriefcase, routerLink: ['projects']},
      {label: 'Employment', icon: faUsers, routerLink: ['employment']},
      {label: 'Resume', icon: faFilePdf, url: '/assets/Resume%20Summer%202020.pdf', target: "_blank"},
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

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "81px";
      } else {
        document.getElementById("navbar").style.top = "15px";
      }
      prevScrollpos = currentScrollPos;
    }
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#bfbfbf';
  }

  entered($event: any, span: HTMLSpanElement, menu: Menu): void{
    menu.hide();
    for (let i = 0; i < this.menuItems.length; i++){
      if (span.innerText == this.menuItems[i].label && this.menuItems[i].items != null){
        menu.toggle($event);
        break;
      }
    }
    console.log(span.innerText);
  }
  exit($event: any, span: HTMLSpanElement, menu: Menu): void{

    for (let i = 0; i < this.menuItems.length; i++){
      if (span.innerText == this.menuItems[i].label && this.menuItems[i].items != null){
        menu.toggle($event);
        break;
      }
    }
    console.log('hide');
  }

  navigate($event: MouseEvent): void {
    console.log($event);
  }

  openNav() {
    document.getElementById("sideMenu").classList.add("active");
    document.getElementById("blur").classList.add("active");
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    document.getElementById("sideMenu").classList.remove("active");
    document.getElementById("blur").classList.remove("active");
  }

  hideShowScroll(event: Event) {
  }
}
