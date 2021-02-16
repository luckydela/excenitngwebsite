import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ms365packComponent } from './ms365pack.component';

describe('Ms365packComponent', () => {
  let component: Ms365packComponent;
  let fixture: ComponentFixture<Ms365packComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ms365packComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ms365packComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
