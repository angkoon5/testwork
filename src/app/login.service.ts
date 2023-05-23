import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient: HttpClient) {
  }
  login(credentials: { username: string; password: string }): Observable<any> {
    return this._httpClient.post('http://103.13.231.185:8080/api/v1/test_login/', credentials).pipe(
      map((response: any) => response.meta),
    );
  }
}
