import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/home/books/add-book/add-book.component';
import { BookDescriptionComponent } from './components/home/books/book-description/book-description.component';
import { BooksComponent } from './components/home/books/books.component';
import { HomeComponent } from './components/home/home.component';
import { WrittersComponent } from './components/home/writters/writters.component';
import { AddWritterComponent } from './components/home/writters/add-writter/add-writter.component';
import { NewestComponent } from './components/home/books/newest/newest.component';
import { AllBComponent } from './components/home/books/all-b/all-b.component';
import { AllWrittersComponent } from './components/home/writters/all-writters/all-writters.component';
import { WritterDescriptionComponent } from './components/home/writters/writter-description/writter-description.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: HomeComponent,
  },
  { path: 'home', component: HomeComponent },

  {
    path: 'books',

    children: [
      {
        path: '',
        pathMatch: 'full',
        component: BooksComponent,
      },
      {
        path: 'all-books',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: BooksComponent,
          },
          { path: 'add-new-books', component: AddBookComponent },
          { path: 'add-new-books/:id', component: AddBookComponent },
          {
            path: 'book-description/:id',
            component: BookDescriptionComponent,
          },
        ],
      },
      { path: 'newest', component: NewestComponent },
      { path: 'all', component: AllBComponent }
    ],
  },

  {
    path: 'writters',

    children: [
      {
        path: '',
        pathMatch: 'full',
        component: WrittersComponent,
      },
      {
        path: 'all-writters',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: WrittersComponent,
          },
          { path: 'add-new-writters', component: AddWritterComponent },
          { path: 'add-new-writters/:id', component: AddWritterComponent },
          {
            path: 'writter-description/:id',
            component: WritterDescriptionComponent,
          },
        ],
      },
      { path: 'all-writt', component: AllWrittersComponent }
    ],
  },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
