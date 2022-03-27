import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookService } from '../book.service';
import { Book } from '../books.model';
import { DialogService } from './delete-dialog/dialog.service';

@Component({
  selector: 'app-book-single-item',
  templateUrl: './book-single-item.component.html',
  styleUrls: ['./book-single-item.component.scss']
})
export class BookSignleItemComponent implements OnInit {

  @Input() book!: Book;

  constructor(
    private bookService: BookService,
    private dialogService: DialogService,
    private router: Router
  ) {}
  @Input() movieNumber: number | undefined;
  

  books: Book[] = [];

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    const sub: Subscription = this.bookService.getBooks().subscribe({
      next: (bookResult: Book[]) => {
        this.books = bookResult;
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete'),
    });
  }

  onDelete(id: number) {
    this.dialogService
      .openDialog()
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.bookService.deleteBook(id).subscribe((response) => {
            window.location.reload();
            this.getBooks();
          });
        }
      });
  }

  onEdit() {
    this.router.navigate(['/books/all-books/add-new-books', this.book.id]);
  }
}