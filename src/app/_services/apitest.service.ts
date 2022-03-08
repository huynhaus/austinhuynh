import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApitestService {

  constructor(private http: HttpClient) { }

  test(): Observable<string> {
    // let url: string = 'http://austinhuynhapi-env.eba-7apdchrj.us-east-2.elasticbeanstalk.com/ping';
    let url: string = '/api/ping';
    return this.http.get<string>(url);
  }
}
