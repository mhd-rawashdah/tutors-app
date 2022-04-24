import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorsRoutingModule } from './tutors-routing.module';
import { TutorsComponent } from './tutors.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TutorItemComponent } from './tutor-item/tutor-item.component';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SearchModule } from 'src/app/shared/components/search/search.module';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';


@NgModule({
  declarations: [
    TutorsComponent,
    TutorItemComponent,
    TutorProfileComponent
  ],
  imports: [
    CommonModule,
    TutorsRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
    InfiniteScrollModule,
    SearchModule
  ]
})
export class TutorsModule { }
