import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KilgorisComponent } from './kilgoris.component';

describe('KilgorisComponent', () => {
  let component: KilgorisComponent;
  let fixture: ComponentFixture<KilgorisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KilgorisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KilgorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
