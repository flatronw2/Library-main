import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concat, Observable, take, switchMap, tap, EMPTY } from 'rxjs';
import { BookService } from '../book.service';
import { Book } from '../books.model';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.scss']
})
export class BookDescriptionComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
  ) {}

  isDataLoaded = false;
  @Input() book!: Book;
  last_index = 200;
  counter = 200;
  showTxt = 'Show More';

  ngOnInit(): void {
    concat(this.formMethod()).subscribe();

    this.last_index = this.book.description.substring(0, 200).lastIndexOf(' ');
    if (this.last_index > 200) this.last_index = 200;
    this.counter = this.last_index;
  }

  public formMethod(): Observable<any> {
    return this.route.params.pipe(
      take(1),
      switchMap((params) => {
        this.isDataLoaded = true;
        if (params['id']) {
          return this.bookService.getBookById(params['id']).pipe(
            tap((re) => {
              this.book = re;
            }),
          );
        } else {
          return EMPTY;
        }
      }),
    );
  }

  toggleSkil() {
    if (this.counter < 201) {
      this.counter = this.book.description.length;

      this.showTxt = 'Show less';
    } else {
      this.counter = this.last_index;

      this.showTxt = 'Show more';
    }
  }
}
