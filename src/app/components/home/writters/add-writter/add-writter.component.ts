import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { concat, Observable, take, switchMap, tap, EMPTY, Subscription } from 'rxjs';
import { BookService } from '../../books/book.service';
import { Book } from '../../books/books.model';
import { Writter } from '../writter.model';
import { WritterService } from '../writter.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-writter',
  templateUrl: './add-writter.component.html',
  styleUrls: ['./add-writter.component.scss']
})
export class AddWritterComponent implements OnInit {

  displayedColumns: string[] = ['select', 'title'];
  dataSource = new MatTableDataSource<Book>();
  selection = new SelectionModel<Book>(true, []);

  books!: Book[];
  writter!: Writter;
  isEditMode = false;
  isDataLoaded = false;
  writterForm!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private bookService: BookService,
    private writterService: WritterService
    ) {
      this.initiliazeForm();
  }

  ngOnInit(): void {
    this.getBooks();
    this.initiliazeForm();
    concat(this.formMethod()).subscribe();
  }

  public initiliazeForm(): void {
    this.writterForm = new FormGroup({
      image: new FormControl('', [Validators.required]),
      fullName: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.isEditMode) {
      this.writter = { ...this.writter, ...this.writterForm.value };
      this.writterService.updateWritter(this.writter).subscribe(() => {
        this.router.navigate(['/writters/all-writters']);
      });
    } else {
      this.writter = this.writterForm.value;
      this.writter.books = this.selection.selected;  
      this.writterService.addWritter(this.writter).subscribe(() => {
        this.router.navigate(['/writters/all-writters']);        
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
          return this.writterService.getWritterById(params['id']).pipe(
            tap((re) => {
              this.writter = re;
              this.writterForm.patchValue(re);
            }),
          );
        } else {
          this.isEditMode = false;
          return EMPTY;
        }
      }),
    );
  }

  getBooks(): void {
    const sub: Subscription = this.bookService.getBooks().subscribe({
      next: (bookResult: Book[]) => {
        this.dataSource.data = bookResult;
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete')
    })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: Book): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.title + 1}`;
  }

  cancel() {
    this.location.back();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
