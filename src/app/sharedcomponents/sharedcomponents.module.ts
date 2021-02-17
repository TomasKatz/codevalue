import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersBarComponent } from './filters/filters-bar/filters-bar.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [FiltersBarComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    FiltersBarComponent
  ]
})
export class SharedcomponentsModule { }
