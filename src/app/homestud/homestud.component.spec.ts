import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestudComponent } from './homestud.component';

describe('HomestudComponent', () => {
  let component: HomestudComponent;
  let fixture: ComponentFixture<HomestudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomestudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomestudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
