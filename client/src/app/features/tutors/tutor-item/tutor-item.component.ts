import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-tutor-item',
  templateUrl: './tutor-item.component.html',
  styleUrls: ['./tutor-item.component.css']
})
export class TutorItemComponent implements OnInit {

  @Input() item: User = { };
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateToProfile(tutorId: any): void {
    this.router.navigate(['/tutors/', tutorId]);
  }

}
