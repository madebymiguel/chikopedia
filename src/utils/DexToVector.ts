/*
Need to rethink method for saving characters in vector.  If can't turn each bit vector into char and back might need to create a
Map saving indices of each dex number.

Look into String.fromCharCode() and String.prototype.charCodeAt().  Write some test code to make sure.
*/

import PokemonList from "./PokemonList";

export default class DexToVector {
  // Number of bits in an int in js.  If more are needed this class should be updated, requiring multiple characters per pokemon.
  static MAX_FORMS = 16;
  private static ALL_FORMS_FOUND = 0b1111_1111_1111_1111;

  private static LOCAL_STORAGE_KEY: string = "livingdexRecord";

  private static instance: DexToVector;

  private vector: number[];

  private constructor() {
    const recordedVector = window.localStorage.getItem(
      DexToVector.LOCAL_STORAGE_KEY
    );
    if (recordedVector) {
      this.vector = recordedVector.split("").map((c) => c.charCodeAt(0));
    } else {
      this.vector = Array(PokemonList.getList().size).fill(0);
    }
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
      if (form < PokemonList.getList().getFormCount(dexNumber) && form > 0) {
        const mask = 1 << (form - 1);
        this.vector[dexNumber] |= mask;
      } else if (form <= 0) {
        this.vector[dexNumber] = DexToVector.ALL_FORMS_FOUND;
      }
    }
  }

  markPokemonAsUncaught(id: number | string, form: number = 1) {
    const dexNumber =
      typeof id === "number" ? id : PokemonList.getList().getNumFromName(id);
    if (dexNumber < this.vector.length) {
      if (form < PokemonList.getList().getFormCount(dexNumber) && form > 0) {
        let mask = 1 << (form - 1);
        mask ^= DexToVector.ALL_FORMS_FOUND;
        this.vector[dexNumber] &= mask;
      } else if (form <= 0) {
        this.vector[dexNumber] = 0;
      }
    }
  }

  checkIfPokemonIsCaught(id: number | string, form: number = 1): boolean {
    const dexNumber =
      typeof id === "number" ? id : PokemonList.getList().getNumFromName(id);
    if (dexNumber < this.vector.length) {
      if (form < PokemonList.getList().getFormCount(dexNumber) && form > 0) {
        const bitVector = this.vector[dexNumber];

        return (bitVector >> (form - 1)) % 2 === 1;
      }
    }
    return false;
  }

  save() {
    const vectorAsString = this.vector
      .map((p) => String.fromCharCode(p))
      .join("");
    window.localStorage.setItem(DexToVector.LOCAL_STORAGE_KEY, vectorAsString);
  }
}
