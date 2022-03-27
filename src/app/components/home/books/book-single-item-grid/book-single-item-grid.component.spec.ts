import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSingleItemGridComponent } from './book-single-item-grid.component';

describe('BookSingleItemGridComponent', () => {
  let component: BookSingleItemGridComponent;
  let fixture: ComponentFixture<BookSingleItemGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSingleItemGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSingleItemGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
