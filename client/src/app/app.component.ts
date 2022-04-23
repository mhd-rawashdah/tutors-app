import { Component } from '@angular/core';
import { AppScrollService } from './shared/services/app-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private appScrollService: AppScrollService,
  ) {}

  onScrollDown() {
    console.log('Scrolling....');
    this.appScrollService.triggerScrollDown();
  }
}
