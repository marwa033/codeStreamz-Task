import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolWordComponent } from './school-word.component';

describe('SchoolWordComponent', () => {
  let component: SchoolWordComponent;
  let fixture: ComponentFixture<SchoolWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
