import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsdynamicsComponent } from './msdynamics.component';

describe('MsdynamicsComponent', () => {
  let component: MsdynamicsComponent;
  let fixture: ComponentFixture<MsdynamicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsdynamicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsdynamicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
