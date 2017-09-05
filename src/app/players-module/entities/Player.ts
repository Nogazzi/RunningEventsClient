import {Team} from "../../teams-module/entities/team";
/**
 * Created by Nogaz on 21.08.2017.
 */
export interface Player{
  id: number;
  name: string;
  surname: string;
  birthDate: Date;
  nationality: string;
  team: Team;
  email: string;
}
