import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampExclusivesComponent } from './camp-exclusives.component';

describe('CampExclusivesComponent', () => {
  let component: CampExclusivesComponent;
  let fixture: ComponentFixture<CampExclusivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampExclusivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampExclusivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
