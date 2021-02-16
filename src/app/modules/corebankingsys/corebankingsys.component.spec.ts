import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorebankingsysComponent } from './corebankingsys.component';

describe('CorebankingsysComponent', () => {
  let component: CorebankingsysComponent;
  let fixture: ComponentFixture<CorebankingsysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorebankingsysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorebankingsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
