import React from 'react';
import { PokemonType } from '../types/PokemonType';

function pokemonTypeToColor(name: string) {
    if (name === 'electric') {
        return 'yellow';
    } else if (name === 'grass') {
        return 'green';
    }

    return 'blue';
}


function PokemonTypeComponent({ name }: { name: string }) {
    return (<span className={`type ${pokemonTypeToColor(name)}`}>{name}</span>);
}

export interface PokemonTypesProps {
    types: PokemonType[];
}

/** A presentation component to display a list of Pokemon Type */
export default function PokemonTypes({ types }: PokemonTypesProps) {
    const typeComponents = types.map((typeObj) => {
        const { type } = typeObj;
        const { name } = type;
        return <PokemonTypeComponent name={name} />;
    })

    return <>{typeComponents.map(typeComponent => typeComponent)}</>
}

