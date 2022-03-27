import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritterOneGridComponent } from './writter-one-grid.component';

describe('WritterOneGridComponent', () => {
  let component: WritterOneGridComponent;
  let fixture: ComponentFixture<WritterOneGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritterOneGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritterOneGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
