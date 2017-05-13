import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {LoggerService} from './logger.service';


export abstract class RestService {


  getData<T>(): Promise<T> {
    return this.http.get(this.url)
      .toPromise()
      .then(this.extractData)
      .then(data => this.logData<T>('GET', data))
      .catch(this.handleError);
  }

  putData<T>(body: any): Promise<T> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.url, body, options)
      .toPromise()
      .then(this.extractData)
      .then(data => this.logData<T>('POST', data, body))
      .catch(this.handleError);
  }

  protected  get http(): Http {
    return this.http;
  };

  protected  get url(): string {
    return this.url;
  };

  protected  get logger(): LoggerService {
    return this.logger;
  };

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body;
    if (res.text()) {
      body = res.json();
    }
    return body || {};
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

  private logData<T>(operation: string, responseData: T, requestData?: any) {
    let message = Date.now() + ': ' + operation + ' ' + this.url + '\n';
    message += (requestData ? ('---SENT---\n' + requestData + '\n') : '');
    message += (responseData ? ('---RECEIVED:---\n' + JSON.stringify(responseData) + '\n') : '');
    this.logger.log(message);

    return responseData;
  }
}
