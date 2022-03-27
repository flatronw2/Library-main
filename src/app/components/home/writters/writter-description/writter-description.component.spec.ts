import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritterDescriptionComponent } from './writter-description.component';

describe('WritterDescriptionComponent', () => {
  let component: WritterDescriptionComponent;
  let fixture: ComponentFixture<WritterDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritterDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritterDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
