import evolutionArrow from "../assets/evolution-arrow.svg";
import { EvolutionDetail } from "../types/evolutionChain/EvolutionDetail";
import simplifyEvolutionDetail from "../utils/simplifyEvolutionDetail";

export interface PokemonEvolutionChainArrowProps {
  evolutionDetail: EvolutionDetail;
}

export default function PokemonEvolutionChainArrow({
  evolutionDetail,
}: PokemonEvolutionChainArrowProps) {
  return (
    <div>
      <img src={evolutionArrow} alt="evolution-arrow" />
      <span>{simplifyEvolutionDetail(evolutionDetail)}</span>
    </div>
  );
}
