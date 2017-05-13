import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './home.routes';
import {TranslateModule} from '@ngx-translate/core';
import {GMapModule} from 'primeng/primeng';
import { AgmCoreModule } from '@agm/core';
import {CarouselModule} from "primeng/components/carousel/carousel";
import {MdCardModule} from '@angular/material';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MdCardModule,
    RouterModule.forChild(ROUTES),
    TranslateModule,
    CarouselModule,
    GMapModule,
    AgmCoreModule
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule {
}
