import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ResultsComponent } from './results/results.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { ResultsFilterComponent } from './results-filter/results-filter.component';
import { ResultsDetailsComponent } from './results-details/results-details.component';

const ResultsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'results',
    component: ResultsComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    ResultsRouting,
    SharedModule,
  ],
  declarations: [
    ResultsComponent,
    ResultsListComponent,
    ResultsFilterComponent,
    ResultsDetailsComponent,
  ]
})
export class ResultsModule { }
