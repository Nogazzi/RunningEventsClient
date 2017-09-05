import {Player} from "../../players-module/entities/Player";
/**
 * Created by Nogaz on 21.08.2017.
 */
export interface Team {
  id: number;
  name: string;
  players: Player[];
}
