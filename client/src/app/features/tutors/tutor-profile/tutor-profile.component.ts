import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from 'src/app/core/interfaces/response';
import { Tutor } from 'src/app/core/interfaces/tutor';
import { User } from 'src/app/core/interfaces/user';
import { TutorsService } from '../tutors.service';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.css']
})
export class TutorProfileComponent implements OnInit {
  loading: boolean = true;
  user: User = {};
  tutorId: string | null = '';

  constructor(
    private tutorsService: TutorsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.tutorId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getTutor(this.tutorId);
  }


  getTutor(tutorId: any) {
    this.loading = true;
    this.tutorsService.getById(tutorId).subscribe((res: Response) => {
      this.loading = false;
      if (res.success) {
        this.user = res.data;
      }
    })
  }

}
