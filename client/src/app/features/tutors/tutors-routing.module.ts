import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorsComponent } from './tutors.component';

const routes: Routes = [
  { path: '', component: TutorsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorsRoutingModule { }
