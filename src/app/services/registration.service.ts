import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
   }

   public getData(): Observable<Question[]> {
    return this.http.get<Question[]>("https://localhost:44329/Registration");
  }

  public UpdateData(question: Question):Observable<Question> {
    return this.http.put<Question>(`https://localhost:44329/Registration`,question);
  }
}
