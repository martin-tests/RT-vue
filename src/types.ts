export enum CharacterStatus {
  'Alive',
  'unknown',
  'Dead'
}

export interface CharacterOrigin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export interface Character {
  id?: number;
  name: string;
  status?: CharacterStatus;
  species?: string;
  gender: string;
  image: string;
  created?: string;
  episode?: string[];
  type?: string;
  url?: string;
  origin?: CharacterOrigin;
  location?: Location;
  isFavorite?: boolean;
}

export interface UserCharacter {
  name: string;
  gender: string;
  image: string;
}