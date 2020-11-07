import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordsearchengineComponent } from './fordsearchengine.component';

describe('FordsearchengineComponent', () => {
  let component: FordsearchengineComponent;
  let fixture: ComponentFixture<FordsearchengineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FordsearchengineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FordsearchengineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
