import {LoggerService} from './logger.service';

export class ConsoleLoggerService implements LoggerService {

  logs: string[];

  constructor(private logLevel: (message?: any, ...optionalParams: any[]) => void) {
    this.logs = [];
  }

  log(msg: string) {
    this.logLevel(msg);
    this.logs.push(msg);
  }
}
