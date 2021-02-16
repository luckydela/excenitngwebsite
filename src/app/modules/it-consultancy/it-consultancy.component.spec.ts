import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItConsultancyComponent } from './it-consultancy.component';

describe('ItConsultancyComponent', () => {
  let component: ItConsultancyComponent;
  let fixture: ComponentFixture<ItConsultancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItConsultancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItConsultancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
