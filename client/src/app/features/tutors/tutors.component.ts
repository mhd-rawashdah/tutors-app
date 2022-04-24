import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Response } from 'src/app/core/interfaces/response';
import { User } from 'src/app/core/interfaces/user';
import { AppScrollService } from 'src/app/shared/services/app-scroll.service';
import { TutorsService } from './tutors.service';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit, OnDestroy {

  loading: boolean = false;
  tutors: User[] = [];
  count: number = 0;
  notEmptyData = true;
  notscrolly = false;
  search: string = "";
  page = 1;
  limit = 5;

  subscriptions: Subscription[] = [];
  constructor(
    private tutorsService: TutorsService,
    private appScrollService: AppScrollService
  ) { }


  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s?.unsubscribe());
  }

  ngOnInit(): void {
    this.getTutors();

    const sub = this.appScrollService.onScrollDown.subscribe((scroll) => {
      if (scroll) {
        this.loadMore();
      }
    });

    this.subscriptions.push(sub);
  }

  loadMore() {
    console.log("onScroll");
    if (this.notscrolly && this.notEmptyData) {
      this.notscrolly = false;
      this.getTutors();
    }
  }

  getTutors() {
    this.loading = true;
    const params: any = {
      page: this.page,
      limit: this.limit,
      search: this.search
    };

    this.tutorsService.get(params).subscribe((res: Response) => {
      this.loading = false;
      if (res.success) {
        this.count = res.count;
        this.tutors = this.tutors.concat(res.data);
        if (res.data < this.limit) {
          this.notEmptyData = false;
        }

        this.notscrolly = true;
        this.page++;
        this.loading = false;
      }
    })
  }

  onSearch(searchValue: string) {
    this.search = searchValue;
    this.refresh();
  }

  refresh() {
    this.tutors = [];
    this.notEmptyData = true;
    this.notscrolly = false;
    this.loading = true;
    this.page = 1;
    this.getTutors();
  }

}
