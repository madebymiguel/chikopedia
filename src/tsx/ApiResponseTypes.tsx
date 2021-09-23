export interface PokemonData {
  name: string;
  index: number;
  image: string;
  types: PokemonTypes;
  region: string;
  stats: PokemonStats[];
  weight: number;
  height: number;
  abilities: PokemonAbilities[];
  //   dexEntry: string;
  //   evolution?: number[];
}

export interface PokemonStats {
  [name: string]: {stat: number};
  // hp: number;
  // attack: number;
  // defence: number;
  // "special-attack": number;
  // "special-defence": number;
  // speed: number;
}

export interface PokemonTypes {
  type1: string;
  type2?: string;
}

export interface PokemonAbilities {
  [ability: string]: {is_hidden: string};
}