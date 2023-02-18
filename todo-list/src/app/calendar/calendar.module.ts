import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

import CalendarComponent  from './calendar.component';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule, 
    RouterModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
