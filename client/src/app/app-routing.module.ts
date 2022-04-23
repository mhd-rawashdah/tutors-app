import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tutors',
    loadChildren: () => import('./features/tutors/tutors.module').then((m) => m.TutorsModule)
  },
  { path: '', redirectTo: '/tutors', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
