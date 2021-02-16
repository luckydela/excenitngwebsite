import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokersureComponent } from './brokersure.component';

describe('BrokersureComponent', () => {
  let component: BrokersureComponent;
  let fixture: ComponentFixture<BrokersureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrokersureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokersureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
