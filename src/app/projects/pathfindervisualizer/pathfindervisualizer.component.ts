import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pathfindervisualizer',
  templateUrl: './pathfindervisualizer.component.html',
  styleUrls: ['./pathfindervisualizer.component.css']
})
export class PathfindervisualizerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goToLink(url: string){
    window.open(url, "_blank");
  }
}
