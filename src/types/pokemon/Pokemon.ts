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
  abilities: PokemonAbility[]; // Ability[];
  base_experience: number;
  forms: PokemonForm[]; // Form[];
  game_indices: PokemonGameIndex[]; // GameIndex;
  height: number;
  held_items: PokemonHeldItem[]; // Item[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[]; //Move[]
  name: string;
  order: number;
  past_types: PokemonPastType[];
  species: { name: string; url: string }; // Specie
  sprites: PokemonSprites; // Sprite
  stats: PokemonStat[]; // Stat[]
  types: PokemonType[];
  weight: number;
}
