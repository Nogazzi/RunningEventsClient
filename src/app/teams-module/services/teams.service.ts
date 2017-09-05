import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Team} from "../entities/team";

@Injectable()
export class TeamsService {

  private baseUrl: string = 'http://localhost:8080/teams/';

  constructor(private http: Http) { }

  getAll(): Observable<Team[]> {
    let teams$ = this.http
      .get(`${this.baseUrl}`, {headers: this.getHeaders()})
      .map(mapTeams)
      .catch(handleError);
    console.log("Received events list: ", teams$);
    return teams$;

  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }


  get(id: number): Observable<Team> {
    let team$ = this.http
      .get(`${this.baseUrl}${id}`, {headers: this.getHeaders()})
      .map(mapEvent)
      .catch(handleError);
    return team$;
  }

  save(team: Team): Observable<Response> {
    return this
      .http
      .post(`${this.baseUrl}/load/${team.id}`, team, {headers: this.getHeaders()});
  }
  registerNewTeam(team: Team): Observable<Response> {
    return this
      .http
      .post(`${this.baseUrl}registerteam`,{body: JSON.stringify(team)}, {headers: this.getHeaders()});
  }

  removeTeam(id: number){
    let result = this.http
      .delete(`${this.baseUrl}${id}`, {headers: this.getHeaders()})
      .catch(handleError);
    console.log('destination address for delete: ', `${this.baseUrl}${id}`);
    console.log('delete result: ', result);
    return result;
  }

}

function mapEvent(response: Response): Team {
  console.log('Receive response: ', response);
  let result = response.json();
  console.log('Received json: ', result);
  return result;
  //return result;
}

function mapTeams(response: Response): Team[] {
  //throw new Error('ups! Force choke!');
  console.log('Received response: ', response);

  /*let result = response.json();
   console.log("Received result: ", result.map(e => toEvent(e)));
   return result;*/
  return response.json().map(toTeam);
  //return json.map(e => toEvent);
  //return response.json().map(toEvent);
}

function toTeam(r: any): Team {
  console.log("Method toPlayer");
  let team = <Team>({
    id: r.id,
    name: r.name,
    players: r.players
  });
  console.log('Parsed team:', team);
  return team;
}

function extractId(teamData: any) {
  let extractedId = teamData.url.replace('http://localhost:8080/teams/', '');
  //.replace('/', '');
  console.log('Extracted id: ', extractedId);
  return parseInt(extractedId);
}

function handleError(error: any){
  let errorMsg = error.message || `Yikes! Where was a problem with our hyperdrive device and we couldn't retrieve your data!`;
  console.error(errorMsg);
  return Observable.throw(errorMsg);
}
