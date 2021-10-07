import React from "react";

export interface PokemonGridItemProps {
    name: string;
    index: number;
    image: string;
}


export default function PokemonGridItem({
    name,
    index,
    image,
}: PokemonGridItemProps) {
    return(
        <div className = "grid-item-container">
            <h3>{name}</h3>
            <h4>{index}</h4>
            <img src={image} />
        </div>
    )
}