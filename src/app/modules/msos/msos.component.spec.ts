import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsosComponent } from './msos.component';

describe('MsosComponent', () => {
  let component: MsosComponent;
  let fixture: ComponentFixture<MsosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
