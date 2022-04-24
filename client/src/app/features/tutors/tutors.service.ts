import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Params } from 'src/app/core/interfaces/params';
import { Response } from 'src/app/core/interfaces/response';
import { TutorModel } from 'src/app/core/models/tutor';
import { TUTORS_URL } from 'src/app/shared/urls';

@Injectable({
  providedIn: 'root'
})
export class TutorsService extends TutorModel {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  public get(params?: Params): Observable<any> {
    params = params || {};
    if (params.limit) {
      params.limit = params.limit.toString();
    }
    if (params.page) {
      params.page = params.page.toString();
    }
    if (params.filter) {
      params.filter = JSON.stringify(params.filter);
    }
    if (params.sort) {
      params.sort = JSON.stringify(params.sort);
    }
    return this.http.get(TUTORS_URL(''), {params: {...params}})
  }

  public getById(tutorId: string): Observable<any> {
    return this.http.get(TUTORS_URL(tutorId));
  }

}
