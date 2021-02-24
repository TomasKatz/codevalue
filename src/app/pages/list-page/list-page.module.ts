import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page/list-page.component';
import {FilteredlistModule} from '../../sharedcomponents/filteredlist/filteredlist.module';
import {EditableDatapanelModule} from '../../sharedcomponents/editable-datapanel/editable-datapanel.module';

@NgModule({
  declarations: [ListPageComponent],
  imports: [
    CommonModule,
    FilteredlistModule,
    EditableDatapanelModule
  ],
  exports: [
    ListPageComponent
  ]
})
export class ListPageModule { }
