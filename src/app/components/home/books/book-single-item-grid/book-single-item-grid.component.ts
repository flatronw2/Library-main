import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from '../book.service';
import { Book } from '../books.model';

type Key =
  | 'dateOfCreation'
  | 'id'
  | 'title'
  | 'genres';
@Component({
  selector: 'app-book-single-item-grid',
  templateUrl: './book-single-item-grid.component.html',
  styleUrls: ['./book-single-item-grid.component.scss']
})
export class BookSingleItemGridComponent implements OnInit {

  @Input() movieNumber: number | undefined;
  @Input()
  sortBy!: Key;

  books: Book[] = [];

  pageIndex: number = 0;
  pageSize: number = 15;
  lowValue: number = 0;
  highValue: number = 15;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    const sub: Subscription = this.bookService.getBooks().subscribe({
      next: (bookResult: Book[]) => {
        this.books = bookResult;
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete'),
    });
  }

  getPaginatorData(event: { pageIndex: number }) {
    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue = this.highValue + this.pageSize;
    } else if (event.pageIndex === this.pageIndex - 1) {
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue = this.highValue - this.pageSize;
    }
    this.pageIndex = event.pageIndex;
  }
}
