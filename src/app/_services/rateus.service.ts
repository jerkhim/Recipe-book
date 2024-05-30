import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, finalize } from 'rxjs/operators';
import { environment } from '@environments/environment';

const baseUrl = `${environment.apiUrl}/feedback`;

@Injectable({ providedIn: 'root' })
export class RateUsService {
  constructor(private http: HttpClient) {}

  submitFeedback(rating: number, name: string, feedback: string): Observable<any> {
    const feedbackData = {
      rating: rating,
      name: name,
      feedback: feedback
    };

    return this.http.post<any>(baseUrl, feedbackData)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
