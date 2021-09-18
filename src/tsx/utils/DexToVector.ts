/*
Need to rethink method for saving characters in vector.  If can't turn each bit vector into char and back might need to create a
Map saving indices of each dex number.

Look into String.fromCharCode() and String.prototype.charCodeAt().  Write some test code to make sure.
*/

import PokemonList from "./PokemonList";

export default class DexToVector {
  // Number of bits in an int in js.  If more are needed this class should be updated, requiring multiple characters per pokemon.
  static MAX_FORMS = 32;

  private static instance: DexToVector;

  private vector: number[];

  private constructor() {
    this.vector = Array(PokemonList.getList().size).fill(0);
  }

  static getInstance(): DexToVector {
    if (!this.instance) {
      this.instance = new DexToVector();
    }

    return DexToVector.instance;
  }

  // if form is 0 or negative all forms will be marked
  markPokemonAsCaught(id: number | string, form: number = 1) {
    const dexNumber =
      typeof id === "number" ? id : PokemonList.getList().getNumFromName(id);
    if (dexNumber < this.vector.length) {
      if (form < PokemonList.getList().getFormCount(dexNumber)) [];
    }
  }
}
