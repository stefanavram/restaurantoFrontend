import {Component, OnInit} from "@angular/core";
import {Auth} from "../common/auth.service";
import {Message} from "primeng/primeng";
import {Reservation} from "./domain/reservation";
import {ReservationService} from "./reservation.service";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  private msgs: Message[] = [];
  private messages: Message[] = [];
  public reservation: Reservation;

  constructor(public auth: Auth,
              public  reservationService: ReservationService,
              public translate: TranslateService) {
    if (!auth.isAuthenticated()) {
      this.notLogedIn();
    }
    else {
      this.reservation = <Reservation>{};
      this.reservation.name = this.auth.userProfile["given_name"];
    }
  }

  notLogedIn() {
    this.msgs.push({
      severity: 'warn',
      summary: 'Login',
      detail: 'You can not make a reservation without being logged in.'
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.reservation.createdOn = new Date();
    console.log(this.reservation);
    // this.reservationService.addReservation(this.reservation);
    this.messages.push({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});

  }
}
