import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';
import { ResultsComponent } from './results/results.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { ResultsDetailsComponent } from './results-details/results-details.component';
import { FilterPipe } from '../shared/pipes/filter.pipe';


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
    }),
    NgbModule,
    FormsModule,
  ],
  declarations: [
    ResultsComponent,
    ResultsListComponent,
    ResultsDetailsComponent,
    FilterPipe,
  ]
})
export class ResultsModule { }
