import {Injectable, Optional, Inject} from "@angular/core";
import {LoggerService, LOGGER_SERVICE} from "../common/logger.service";
import {Http} from "@angular/http";
import {Reservation} from "./domain/reservation";
import {RestService} from "../common/rest.service";

@Injectable()
export class ReservationService extends RestService {

  private _url: string = 'https://server-restauranto.herokuapp.com/rest/pizzas';

  constructor(private _http: Http,
              @Optional()
              @Inject(LOGGER_SERVICE)
              private _logger: LoggerService) {
    super();

    // no logger? make one
    if (!this._logger) {
      this._logger = {
        logs: [],
        log: (msg: string) => this._logger.logs.push(msg)
      };
    }
  }

  protected get http(): Http {
    return this._http;
  }

  protected get url(): string {
    return this._url;
  }

  protected get logger(): LoggerService {
    return this._logger;
  }

  addReservation(reservation: Reservation): Promise<Reservation> {
    this._url =  this._url+ '/addReservation/' + reservation.name;
    return this.putData(JSON.stringify(reservation));
  }

}
