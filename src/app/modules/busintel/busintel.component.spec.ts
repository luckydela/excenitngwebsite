import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusintelComponent } from './busintel.component';

describe('BusintelComponent', () => {
  let component: BusintelComponent;
  let fixture: ComponentFixture<BusintelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusintelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusintelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
