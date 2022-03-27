import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from './books/book.service';
import { Book } from './books/books.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getCarouselBooks();

  }

  getCarouselBooks(): void {
    const sub: Subscription = this.bookService.getBooks().subscribe({
      next: (bookResults: Book[]) => {
        this.books = bookResults.slice(0, 6);
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete'),
    });
  }

}
