import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteredListComponent } from './filtered-list/filtered-list.component';
import {ListModule} from '../list/list.module';


@NgModule({
  declarations: [FilteredListComponent],
  exports: [
    FilteredListComponent,
  ],
  imports: [
    CommonModule,
    ListModule
  ]
})
export class FilteredlistModule { }
