import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishersOfMenComponent } from './fishers-of-men.component';

describe('FishersOfMenComponent', () => {
  let component: FishersOfMenComponent;
  let fixture: ComponentFixture<FishersOfMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishersOfMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishersOfMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
