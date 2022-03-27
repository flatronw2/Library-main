import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBComponent } from './all-b.component';

describe('AllBComponent', () => {
  let component: AllBComponent;
  let fixture: ComponentFixture<AllBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
