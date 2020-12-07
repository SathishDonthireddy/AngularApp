import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaycomponentComponent } from './twowaycomponent.component';

describe('TwowaycomponentComponent', () => {
  let component: TwowaycomponentComponent;
  let fixture: ComponentFixture<TwowaycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowaycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
