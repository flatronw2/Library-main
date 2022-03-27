import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from './books.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private BASE_URL = environment.apiBaseUrl + '/books'

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.BASE_URL);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<any>(`${this.BASE_URL}/${id}`);
  }

  addBook(body: Book): Observable<Book> {
    return this.http.post<Book>(`${this.BASE_URL}`, body);
  }

  updateBook(body: Book): Observable<any> {
    return this.http.put(`${this.BASE_URL}/${body.id}`, body);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }
}
