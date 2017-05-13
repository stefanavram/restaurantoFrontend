import {NgModule} from "@angular/core";
import {ReservationComponent} from "./reservation.component";
import {ROUTES} from "./reservation.routes";
import {RouterModule} from "@angular/router";
import {
  MaterialModule, MdInputModule, MdSliderModule, MdCheckboxModule, MdIconModule,
  MdCardModule, MdTooltipModule
} from "@angular/material";
import {CommonModule} from "@angular/common";
import {MessagesModule,CalendarModule,GrowlModule} from 'primeng/primeng';
import {ReservationService} from "./reservation.service";
import {Ng2BootstrapModule} from "ngx-bootstrap";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MdInputModule,MdSliderModule,MdCheckboxModule,MdCardModule,MdTooltipModule,
    Ng2BootstrapModule,
    TranslateModule,
    MessagesModule,
    CalendarModule,
    GrowlModule
  ],
  providers:[
    ReservationService
  ],
  declarations: [ReservationComponent]
})
export class ReservationModule {
}
