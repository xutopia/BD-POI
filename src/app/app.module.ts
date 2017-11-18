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
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { environment } from '../environments/environment';

import { ApiService } from './shared/services/api.service';
import { QueryBuilderService } from './shared/services/query-builder.service';
import { StoreService } from './shared/services/store.service';
// import { initialState } from './shared/models/initial-state.model';
// import { appReducer } from './shared/reducers/app.reducer';
// import { PoiEffects } from './shared/effects/index.effects';
// import { SearchAction } from './shared/actions/index.actions';



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
    ResultsModule,
    SharedModule,
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
    StoreService,
    // PoiEffects,
    // SearchAction
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
