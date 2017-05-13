import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, Http, RequestOptions} from "@angular/http";
import {AuthHttp, AuthConfig, AUTH_PROVIDERS} from "angular2-jwt";
import {AppComponent} from "./app.component";
import {PizzaModule} from "./pizza/pizza.module";
import {HomeModule} from "./home/home.module";
import {ROUTES} from "./app.routes";
import {RouterModule} from "@angular/router";
import {ReservationModule} from "./reservation/reservation.module";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {LoginComponent} from "./login/login.component";
import {AgmCoreModule} from "@agm/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MdToolbarModule, MdMenuModule, MdButtonModule} from "@angular/material";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import "hammerjs";

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: (() => localStorage.getItem('token')),
    globalHeaders: [{'Content-Type':'application/json'}],
  }), http, options);
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAie3d2OXZ9_TEYi29yKPEznWD-I4wXLCo'
    }),
    NgbModule.forRoot(),
    MdToolbarModule, MdMenuModule,MdButtonModule,
    FormsModule,
    HttpModule,
    PizzaModule,
    HomeModule,
    ReservationModule,
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
