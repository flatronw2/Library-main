import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from '../book.service';
import { Book } from '../books.model';

@Component({
  selector: 'app-book-item-grid',
  templateUrl: './book-item-grid.component.html',
  styleUrls: ['./book-item-grid.component.scss']
})
export class BookItemGridComponent implements OnInit {
  books: Book[] = [];
  @Input() bookNumber: number | undefined;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }



  getBooks(): void {
    const sub: Subscription = this.bookService.getBooks().subscribe({
      next: (bookResults: Book[]) => {
        this.books = bookResults;
        if(this.bookNumber){
          this.books = this.books.slice(0, this.bookNumber);
        }
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete')
    })
  }
}
