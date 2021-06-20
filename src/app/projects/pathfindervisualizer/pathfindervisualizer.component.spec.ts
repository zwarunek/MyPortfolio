import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathfindervisualizerComponent } from './pathfindervisualizer.component';

describe('PathfindervisualizerComponent', () => {
  let component: PathfindervisualizerComponent;
  let fixture: ComponentFixture<PathfindervisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathfindervisualizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathfindervisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
