import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './search.component';


const searchRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'search',
    component: SearchComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    searchRouting,
    FormsModule,
    NgbModule,
  ],
  declarations: [
    SearchComponent,
  ]
})
export class SearchModule { }
