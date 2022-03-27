import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWritterComponent } from './add-writter.component';

describe('AddWritterComponent', () => {
  let component: AddWritterComponent;
  let fixture: ComponentFixture<AddWritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWritterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWritterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
