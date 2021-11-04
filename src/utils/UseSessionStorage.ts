import { useEffect, useState } from "react";
import { Pokemon } from "../types/Pokemon";

const key = "allSimplePokemon";

export interface SimplePokemon {
    name: string;
    id: number;
    sprite: string;
}

function getSessionStorage(key: string, allSimplePokemon?: SimplePokemon[]) {
    const stored = sessionStorage.getItem(key);
    if(!stored) {
        return JSON.stringify(allSimplePokemon);
    }
    return JSON.parse(stored);
}



export default function UseSessionStorage(
    allSimplePokemon : SimplePokemon[]
): [string, React.Dispatch<React.SetStateAction<string>>] {
    const [pokemonStorage, setPokemonStorage] = useState<string>(getSessionStorage(key, allSimplePokemon));
    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(allSimplePokemon));
    }, [pokemonStorage]);

    
    return [pokemonStorage, setPokemonStorage];
}