import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcomponentComponent } from './parentcomponent.component';

describe('ParentcomponentComponent', () => {
  let component: ParentcomponentComponent;
  let fixture: ComponentFixture<ParentcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
