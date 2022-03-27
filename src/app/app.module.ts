import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './components/shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteWritterComponent } from './components/home/writters/writter-item/delete-writter/delete-writter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NavbarMenuComponent, NavbarMenuDialog } from './components/shared/navbar-menu/navbar-menu.component';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/home/books/books.component';
import { AddBookComponent } from './components/home/books/add-book/add-book.component';
import { BookDescriptionComponent } from './components/home/books/book-description/book-description.component';
import { BookItemComponent } from './components/home/books/book-item/book-item.component';
import { BookItemGridComponent } from './components/home/books/book-item-grid/book-item-grid.component';
import { WrittersComponent } from './components/home/writters/writters.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { BookSignleItemComponent } from './components/home/books/book-signle-item/book-single-item.component';
import { BookSingleItemGridComponent } from './components/home/books/book-single-item-grid/book-single-item-grid.component';
import { DeleteDialogComponent } from './components/home/books/book-signle-item/delete-dialog/delete-dialog.component';
import { AddWritterComponent } from './components/home/writters/add-writter/add-writter.component';
import { WritterItemComponent } from './components/home/writters/writter-item/writter-item.component';
import { WritterItemGridComponent } from './components/home/writters/writter-item-grid/writter-item-grid.component';
import { NewestComponent } from './components/home/books/newest/newest.component';
import { AllBComponent } from './components/home/books/all-b/all-b.component';
import { WritterOneComponent } from './components/home/writters/writter-one/writter-one.component';
import { WritterOneGridComponent } from './components/home/writters/writter-one-grid/writter-one-grid.component';
import { AllWrittersComponent } from './components/home/writters/all-writters/all-writters.component';
import { WritterDescriptionComponent } from './components/home/writters/writter-description/writter-description.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarMenuComponent,
    NavbarMenuDialog,
    HomeComponent,
    BooksComponent,
    AddBookComponent,
    BookDescriptionComponent,
    BookItemComponent,
    BookItemGridComponent,
    WrittersComponent,
    CarouselComponent,
    BookSignleItemComponent,
    BookSingleItemGridComponent,
    DeleteDialogComponent,
    AddWritterComponent,
    WritterItemComponent,
    DeleteWritterComponent,
    WritterItemGridComponent,
    NewestComponent,
    AllBComponent,
    WritterOneComponent,
    WritterOneGridComponent,
    AllWrittersComponent,
    WritterDescriptionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
