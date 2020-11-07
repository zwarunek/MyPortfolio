import { Component, OnInit } from '@angular/core';
import {} from "@fortawesome/free-regular-svg-icons";
import {faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  githubIcon = faGithubSquare;
  linkedinIcon = faLinkedin;

  ngOnInit(): void {
  }

}
