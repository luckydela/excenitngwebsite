import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeprodComponent } from './officeprod.component';

describe('OfficeprodComponent', () => {
  let component: OfficeprodComponent;
  let fixture: ComponentFixture<OfficeprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
