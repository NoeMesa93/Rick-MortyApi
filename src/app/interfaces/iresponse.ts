import { ICharacter } from "./icharacter.interface";

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}


export interface IResponse {
    info: Info;
    results: ICharacter[]
}
