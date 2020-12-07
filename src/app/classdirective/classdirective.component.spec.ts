import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassdirectiveComponent } from './classdirective.component';

describe('ClassdirectiveComponent', () => {
  let component: ClassdirectiveComponent;
  let fixture: ComponentFixture<ClassdirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassdirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
