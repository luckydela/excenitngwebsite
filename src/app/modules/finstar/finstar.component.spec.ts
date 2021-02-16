import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinstarComponent } from './finstar.component';

describe('FinstarComponent', () => {
  let component: FinstarComponent;
  let fixture: ComponentFixture<FinstarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinstarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
