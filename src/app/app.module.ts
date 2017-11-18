import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { SearchModule } from './search/search.module';
import { ResultsModule } from './results/results.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ApiService } from './shared/services/api.service';
import { QueryBuilderService } from './shared/services/query-builder.service';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SearchModule,
    ResultsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.PLACES_API_KEY
    }),
  ],
  providers: [
    ApiService,
    QueryBuilderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
