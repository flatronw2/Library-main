import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritterOneComponent } from './writter-one.component';

describe('WritterOneComponent', () => {
  let component: WritterOneComponent;
  let fixture: ComponentFixture<WritterOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritterOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
