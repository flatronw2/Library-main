import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWrittersComponent } from './all-writters.component';

describe('AllWrittersComponent', () => {
  let component: AllWrittersComponent;
  let fixture: ComponentFixture<AllWrittersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWrittersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWrittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
