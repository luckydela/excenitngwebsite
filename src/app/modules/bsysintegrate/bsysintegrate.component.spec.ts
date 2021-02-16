import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsysintegrateComponent } from './bsysintegrate.component';

describe('BsysintegrateComponent', () => {
  let component: BsysintegrateComponent;
  let fixture: ComponentFixture<BsysintegrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsysintegrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsysintegrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
