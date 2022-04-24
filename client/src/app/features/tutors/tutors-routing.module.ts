import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';
import { TutorsComponent } from './tutors.component';

const routes: Routes = [
  { path: '', component: TutorsComponent},
  { path: ':id', component: TutorProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorsRoutingModule { }
