import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Player} from "../entities/Player";

@Injectable()
export class PlayersService {

  private baseUrl: string = 'http://localhost:8080/players/';

  constructor(private http: Http) { }

  getAll(): Observable<Player[]> {
    let players$ = this.http
      .get(`${this.baseUrl}`, {headers: this.getHeaders()})
      .map(mapPlayers)
      .catch(handleError);
    console.log("Received players list: ", players$);
    return players$;

  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }


  get(id: number): Observable<Player> {
    let player$ = this.http
      .get(`${this.baseUrl}${id}`, {headers: this.getHeaders()})
      .map(mapPlayer)
      .catch(handleError);
    return player$;
  }

  getByTeamName(teamName: string): Observable<Player[]> {
    let players = this.http
      .get(`${this.baseUrl}byteamname/${teamName}`, {headers: this.getHeaders()})
      .map(mapPlayers)
      .catch(handleError);
    return players;
  }

  save(player: Player): Observable<Response> {
    return this
      .http
      .post(`${this.baseUrl}/load/${player.id}`, player, {headers: this.getHeaders()});
  }
  registerNewPlayer(player: Player): Observable<Response> {
    return this
      .http
      .post(`${this.baseUrl}registerplayer`,{body: JSON.stringify(player)}, {headers: this.getHeaders()});
  }

  removePlayer(id: number){
    let result = this.http
      .delete(`${this.baseUrl}${id}`, {headers: this.getHeaders()})
      .catch(handleError);
    console.log('destination address for delete: ', `${this.baseUrl}${id}`);
    console.log('delete result: ', result);
    return result;
  }

}

function mapPlayer(response: Response): Player {
  console.log('Receive response: ', response);
  let result = response.json();
  console.log('Received json: ', result);
  return result;
  //return result;
}

function mapPlayers(response: Response): Player[] {
  //throw new Error('ups! Force choke!');
  console.log('Received response: ', response);

  /*let result = response.json();
   console.log("Received result: ", result.map(e => toEvent(e)));
   return result;*/
  return response.json().map(toPlayer);
  //return json.map(e => toEvent);
  //return response.json().map(toEvent);
}

function toPlayer(r: any): Player {
  console.log("Method toPlayer");
  let player = <Player>({
    id: r.id,
    name: r.name,
    surname: r.surname,
    birthDate: r.birthDate,
    nationality: r.nationality,
    team: r.team,
    email: r.email
  });
  console.log('Parsed player:', player);
  return player;
}

function extractId(playerData: any) {
  let extractedId = playerData.url.replace('http://localhost:8080/players/', '');
  //.replace('/', '');
  console.log('Extracted id: ', extractedId);
  return parseInt(extractedId);
}

function handleError(error: any){
  let errorMsg = error.message || `Yikes! Where was a problem with our hyperdrive device and we couldn't retrieve your data!`;
  console.error(errorMsg);
  return Observable.throw(errorMsg);
}
