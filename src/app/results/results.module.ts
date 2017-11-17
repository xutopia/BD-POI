import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsListComponent } from './results-list/results-list.component';
import { ResultsFilterComponent } from './results-filter/results-filter.component';
import { ResultsDetailsComponent } from './results-details/results-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResultsListComponent, ResultsFilterComponent, ResultsDetailsComponent]
})
export class ResultsModule { }
