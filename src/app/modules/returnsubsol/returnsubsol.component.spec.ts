import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsubsolComponent } from './returnsubsol.component';

describe('ReturnsubsolComponent', () => {
  let component: ReturnsubsolComponent;
  let fixture: ComponentFixture<ReturnsubsolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnsubsolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnsubsolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
