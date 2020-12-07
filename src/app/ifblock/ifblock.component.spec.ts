import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfblockComponent } from './ifblock.component';

describe('IfblockComponent', () => {
  let component: IfblockComponent;
  let fixture: ComponentFixture<IfblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
