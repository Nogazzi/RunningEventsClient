import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import {SportEvent} from "./sport-event";


@Injectable()
export class RunEventsService {
  private baseUrl: string = 'http://localhost:8090';

  constructor(private http: Http) {
  }

  getAll(): Observable<SportEvent[]> {
    let sportEvents$ = this.http
      .get(`${this.baseUrl}/races/`, {headers: this.getHeaders()})
      .map(mapEvents)
      .catch(handleError);
    console.log("Received events list: ", sportEvents$);
    return sportEvents$;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }


  get(id: number): Observable<SportEvent> {
    let sportEvent$ = this.http
      .get(`${this.baseUrl}/races/${id}`, {headers: this.getHeaders()})
      .map(mapEvent)
      .catch(handleError);
    return sportEvent$;
  }

  save(sportEvent: SportEvent): Observable<Response> {
    return this
      .http
      .post(`${this.baseUrl}/load/${sportEvent.id}`,JSON.stringify(sportEvent), {headers: this.getHeaders()});
  }
}

function mapEvent(response: Response): SportEvent {
  console.log('Receive response: ', response);
  let result = response.json();
  console.log('Received json: ', result);
  return result;
  //return result;
}

function mapEvents(response: Response): SportEvent[] {
  //throw new Error('ups! Force choke!');
  console.log('Received response: ', response);

  /*let result = response.json();
  console.log("Received result: ", result.map(e => toEvent(e)));
  return result;*/
  return response.json().map(toEvent);
  //return json.map(e => toEvent);
  //return response.json().map(toEvent);
}

function toEvent(r: any): SportEvent {
  console.log("Method toEvent");
  let sportEvent = <SportEvent>({
    id: r.id,
    name: r.name,
    organizer: r.organizer,
    date: r.date,
    localization: r.localization,
    distance: r.distance,
    description: r.description
  });
  console.log('Parsed event:', sportEvent);
  return sportEvent;
}

function extractId(sportEventData: any) {
  let extractedId = sportEventData.url.replace('http://localhost:8090/races/', '');
    //.replace('/', '');
  console.log('Extracted id: ', extractedId);
  return parseInt(extractedId);
}

function handleError(error: any){
  let errorMsg = error.message || `Yikes! Where was a problem with our hyperdrive device and we couldn't retrieve your data!`;
  console.error(errorMsg);
  return Observable.throw(errorMsg);
}




