import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { SearchModule } from './search/search.module';
import { ResultsModule } from './results/results.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { StoreModule, ActionReducer, combineReducers } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreRouterConnectingModule } from 'ngrx/router-store';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ApiService } from './shared/services/api.service';
import { QueryBuilderService } from './shared/services/query-builder.service';
// import { initialState } from './shared/models/initial-state.model';
// import { appReducer } from './shared/reducers/app.reducer';
// import { PoiEffects } from './shared/effects/index.effects';
// import { SearchAction } from './shared/actions/index.actions';



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
    // StoreModule.forRoot(
    //   <any>{ app: appReducer },
    //   { initialState },
    // ),
    // EffectsModule.forRoot([
    //   PoiEffects,
    // ]),
    // StoreRouterConnectingModule
  ],
  providers: [
    ApiService,
    QueryBuilderService,
    // PoiEffects,
    // SearchAction
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
