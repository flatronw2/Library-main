// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-add-book',
//   templateUrl: './add-book.component.html',
//   styleUrls: ['./add-book.component.scss']
// })
// export class AddBookComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GenresEnum, GenresType } from './genres.model';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Observable,
  take, 
  switchMap,
  tap,
  EMPTY,
  concat,
  Subscription,
} from 'rxjs';
import { Location } from '@angular/common';
// import { Celeb } from '../../celebs/celeb.model';
// import { CelebService } from '../../celebs/celeb.service';
import { MatSelect } from '@angular/material/select';
import { Writter } from '../../writters/writter.model';
import { BookService } from '../book.service';
import { Book } from '../books.model';
import { WritterService } from '../../writters/writter.service';

const WRITTER_LIST: Writter[] = [];

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  displayedColumns: string[] = ['select', 'fullName', 'filter'];
  dataSource = new MatTableDataSource(WRITTER_LIST);
  selectionOfCelebrity = new SelectionModel<Writter>(true, []);

  public genres = GenresType;
  public genresTypes = Object.values(GenresEnum);

  booksForm!: FormGroup;
  book!: Book;
  isEditMode = false;
  isDataLoaded = false;
  desc = '';
  description!: FormControl;
  writters!: Writter[];
  allSelected = false;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private writterService: WritterService,
  ) {
    this.initiliazeForm();
  }

  ngOnInit(): void {
    this.initiliazeForm();
    concat(this.formMethod()).subscribe();
    this.getWritters();
  }

  public initiliazeForm(): void {
    this.booksForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
      ]),
      dateOfCreation: new FormControl('', [Validators.required]),
      genres: new FormControl('', [Validators.required]),
    });
  }

  public onSubmit() {
    if (this.isEditMode) {
      this.book = { ...this.book, ...this.booksForm.value };
      this.book.writters = this.selectionOfCelebrity.selected;
      this.bookService.updateBook(this.book).subscribe((response) => {
        this.router.navigate(['/books/all-books']);
      });
    } else {
      this.book = this.booksForm.value;
      this.book.writters = this.selectionOfCelebrity.selected;
      this.bookService.addBook(this.book).subscribe((response) => {
        this.router.navigate(['/books/all-books']);
      });
    }
  }

  public formMethod(): Observable<any> {
    return this.route.params.pipe(
      take(1),
      switchMap((params) => {
        this.isDataLoaded = true;
        if (params['id']) {
          this.isEditMode = true;
          return this.bookService.getBookById(params['id']).pipe(
            tap((re) => {
              this.book = re;
              this.booksForm.patchValue(re);
            }),
          );
        } else {
          this.isEditMode = false;
          return EMPTY;
        }
      }),
    );
  }

  getWritters(): void {
    const sub: Subscription = this.writterService.getWritter().subscribe({
      next: (writterResult: Writter[]) => {
        this.dataSource.data = writterResult;
        this.dataSource.data.forEach((celebrity) => {
          if (
            this.book.writters.findIndex(
              (writter) => writter.id === celebrity.id,
            ) !== -1
          ) {
            this.selectionOfCelebrity.select(celebrity);
          }
        });
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete'),
    });
  }

  optionClick() {
    this.allSelected = this.select.options
      .toArray()
      .every((item) => item.selected);
  }

  @ViewChild('select') select!: MatSelect;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selectionOfCelebrity.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selectionOfCelebrity.clear()
      : this.dataSource.data.forEach((row) =>
          this.selectionOfCelebrity.select(row),
        );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  backClicked() {
    this.location.back();
  }
}
