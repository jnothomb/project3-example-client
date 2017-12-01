import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class JournalEntryService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getJournalEntries() {
    return this.http.get(`${this.baseUrl}/journal-entries`);
  }
}
