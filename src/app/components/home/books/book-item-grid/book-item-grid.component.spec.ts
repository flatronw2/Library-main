import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookItemGridComponent } from './book-item-grid.component';

describe('BookItemGridComponent', () => {
  let component: BookItemGridComponent;
  let fixture: ComponentFixture<BookItemGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookItemGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookItemGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
