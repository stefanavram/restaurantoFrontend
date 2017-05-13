import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, Http} from "@angular/http";
import {AUTH_PROVIDERS} from "angular2-jwt";
import {AppComponent} from "./app.component";
import {PizzaModule} from "./pizza/pizza.module";
import {HomeModule} from "./home/home.module";
import {ROUTES} from "./app.routes";
import {RouterModule} from "@angular/router";
import {ReservationModule} from "./reservation/reservation.module";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {LoginComponent} from "./login/login.component";
import { AgmCoreModule } from '@agm/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAie3d2OXZ9_TEYi29yKPEznWD-I4wXLCo'
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    PizzaModule,
    HomeModule,
    ReservationModule,
  ],
  exports: [
    TranslateModule
  ],
  providers: [AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
}
