import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMAIL_URL } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  email(senderEmail:string, senderName:string, senderMsg:string): Observable<any> {
    let data = {
      "email": senderEmail,
      "name": senderName,
      "message": senderMsg
    }

    return this.http.post(EMAIL_URL, data);
  }
}
