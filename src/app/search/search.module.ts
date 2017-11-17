import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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
    searchRouting
  ],
  declarations: [
    SearchComponent,
  ]
})
export class SearchModule { }
