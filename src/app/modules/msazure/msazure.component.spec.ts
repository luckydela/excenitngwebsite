import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsazureComponent } from './msazure.component';

describe('MsazureComponent', () => {
  let component: MsazureComponent;
  let fixture: ComponentFixture<MsazureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsazureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsazureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
