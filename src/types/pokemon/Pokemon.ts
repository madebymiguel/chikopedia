import { PokemonAbility } from "./Ability";
import { PokemonForm } from "./Form";
import { PokemonStat } from "./Stat";
import { PokemonType } from "./Type";
import { PokemonGameIndex } from "./GameIndex";
import { PokemonHeldItem } from "./HeldItem";
import { PokemonMove } from "./Move";
import { PokemonPastType } from "./PastType";
import { PokemonSprites } from "./Sprites";

export interface Pokemon {
  abilities: PokemonAbility[];
  base_experience: number;
  forms: PokemonForm[];
  game_indices: PokemonGameIndex[];
  height: number;
  held_items: PokemonHeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  past_types: PokemonPastType[];
  species: { name: string; url: string };
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}
