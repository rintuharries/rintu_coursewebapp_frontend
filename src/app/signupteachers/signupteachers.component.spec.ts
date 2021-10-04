import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupteachersComponent } from './signupteachers.component';

describe('SignupteachersComponent', () => {
  let component: SignupteachersComponent;
  let fixture: ComponentFixture<SignupteachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupteachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
