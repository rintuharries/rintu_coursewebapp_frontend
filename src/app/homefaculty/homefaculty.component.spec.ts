import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefacultyComponent } from './homefaculty.component';

describe('HomefacultyComponent', () => {
  let component: HomefacultyComponent;
  let fixture: ComponentFixture<HomefacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomefacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomefacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
