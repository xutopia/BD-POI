import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';
import { ResultsComponent } from './results/results.component';
import { ResultsListComponent } from './results-list/results-list.component';
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
    AgmCoreModule.forRoot({
      apiKey: environment.PLACES_API_KEY
    })
  ],
  declarations: [
    ResultsComponent,
    ResultsListComponent,
    ResultsDetailsComponent,
  ]
})
export class ResultsModule { }
