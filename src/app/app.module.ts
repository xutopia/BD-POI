import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { SearchModule } from './search/search.module';
import { ResultsModule } from './results/results.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    SearchModule,
    ResultsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.PLACES_API_KEY
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
