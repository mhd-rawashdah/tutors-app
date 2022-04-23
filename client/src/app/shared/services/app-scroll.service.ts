import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppScrollService {

  private scrollDown$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  get onScrollDown(): Observable<boolean> {
    return this.scrollDown$.asObservable();
  }

  triggerScrollDown() {
    this.scrollDown$.next(true);
  }
}
