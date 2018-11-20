import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoahComponent } from './noah.component';

describe('NoahComponent', () => {
  let component: NoahComponent;
  let fixture: ComponentFixture<NoahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
