import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../books/books.model';
import { Writter } from './writter.model';

@Injectable({
  providedIn: 'root'
})
export class WritterService {
  
  private BASE_URL = environment.apiBaseUrl + '/writters';
  private BOOKS_URL = environment.apiBaseUrl + '/books';

  constructor(private http: HttpClient) { }
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.BOOKS_URL)
  }

  getWritterById(id: number): Observable<Writter> {
    return this.http.get<any>(`${this.BASE_URL}/${id}`);
  }

  addWritter(body: Writter): Observable<any> {
    return this.http.post(`${this.BASE_URL}`, body);
  }

  updateWritter(body: Writter): Observable<any> {
    return this.http.put(`${this.BASE_URL}/${body.id}`, body);
  }

  getWritter(): Observable<Writter[]>  {
    return this.http.get<Writter[]>(`${this.BASE_URL}`)
  }

  deleteWritter(id: number): Observable<any> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }

}
