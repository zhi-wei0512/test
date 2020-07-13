import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }
    /**
   * 查詢狗狗
   */
  getDogs(): Observable<any> {
    return this.http.get('./assets/dogs.json');
  }
}
