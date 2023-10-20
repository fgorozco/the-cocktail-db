import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  private urlApi = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php';

  constructor(private http: HttpClient) { }

  public getData(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/?i=${id}`);
  }
}
