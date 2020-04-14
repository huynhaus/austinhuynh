import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../_models/album';
import { Library } from '../_models/library';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }

  getLibrary(): Observable<Library> {
    const url = 'http://localhost:8080/library';
    return this.http.get<Library>(url, HTTP_OPTIONS);
  }
}

const HTTP_HEADERS = new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json' });
const HTTP_OPTIONS = { headers: HTTP_HEADERS };