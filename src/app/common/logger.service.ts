import {OpaqueToken} from '@angular/core';

export interface LoggerService {
  logs: string[];
  log(message: string): void;
}

export let LOGGER_SERVICE = new OpaqueToken('app.logger.service');
