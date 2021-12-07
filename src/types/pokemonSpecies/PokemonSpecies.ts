import { PokemonSpeciesEggGroups } from "./EggGroups";
import { PokemonSpeciesFlavorTextEntries } from "./FlavorTextEntries";
import { PokemonSpeciesFormDescriptions } from "./FormDescriptions";
import { PokemonSpeciesGenera } from "./Genera";
import { PokemonSpeciesNames } from "./Names";
import { PokemonSpeciesPalParkEncounters } from "./PalParkEncounters";
import { PokemonSpeciesPokedexNumbers } from "./PokedexNumbers";
import { PokemonSpeciesVarieties } from "./Varieties";

export interface PokemonSpecies {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: { name: string; url: string };
  pokedex_numbers: PokemonSpeciesPokedexNumbers[];
  egg_groups: PokemonSpeciesEggGroups[];
  color: { name: string; url: string };
  shape: { name: string; url: string };
  evolves_from_species: { name: string; url: string };
  evolution_chain: { url: string };
  habitat: { name: string; url: string };
  generation: { name: string; url: string };
  names: PokemonSpeciesNames[];
  flavor_text_entries: PokemonSpeciesFlavorTextEntries[];
  form_descriptions: PokemonSpeciesFormDescriptions[];
  genera: PokemonSpeciesGenera[];
  varieties: PokemonSpeciesVarieties[];
  pal_park_encounters: PokemonSpeciesPalParkEncounters[];
}
