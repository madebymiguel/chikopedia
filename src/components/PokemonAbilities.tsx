import { PokemonAbility } from "../types/pokemon/Ability";
import VisibilityOffIcon from "../assets/visibility-off-icon.svg";
import "../scss/PokemonAbilities.scss";

export interface PokemonAbilityProps {
  abilities: PokemonAbility[];
}

function PokemonAbilityComponent({
  ability,
  is_hidden,
}: {
  ability: { name: string; url: string };
  is_hidden: boolean;
}) {
  return (
    <>
      {is_hidden ? (
        <div className="ability-content hidden">
          <span className="ability-name">{ability.name} </span>
          <img
            className="ability-image"
            src={VisibilityOffIcon}
            alt="VisibilityOffIcon"
          />
        </div>
      ) : (
        <div className="ability-content">
          <span className="ability-name">{ability.name}</span>
        </div>
      )}
    </>
  );
}

export default function PokemonAbilities({ abilities }: PokemonAbilityProps) {
  const abilityComponent = abilities.map((abilityObj) => {
    const { ability } = abilityObj;
    const { is_hidden } = abilityObj;
    const { slot } = abilityObj;

    return (
      <PokemonAbilityComponent
        key={slot}
        ability={ability}
        is_hidden={is_hidden}
      />
    );
  });

  return (
    <div className="pokemon-ability-container">
      {abilityComponent.map((abilityComponent) => abilityComponent)}
    </div>
  );
}
