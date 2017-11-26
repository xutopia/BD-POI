import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { SearchModule } from './search/search.module';
import { ResultsModule } from './results/results.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { environment } from '../environments/environment';

import { ApiService } from './shared/services/api.service';
import { QueryBuilderService } from './shared/services/query-builder.service';
import { StoreService } from './shared/services/store.service';
import { UtilService } from './shared/services/util.service';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SearchModule,
    SharedModule,
    ResultsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.PLACES_API_KEY
    }),
  ],
  providers: [
    ApiService,
    QueryBuilderService,
    StoreService,
    UtilService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
