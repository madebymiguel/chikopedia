import evolutionArrow from "../assets/evolution-arrow.svg";
import { EvolutionDetail } from "../types/evolutionChain/EvolutionDetail";
import simplifyEvolutionDetail from "../utils/simplifyEvolutionDetail";

export interface PokemonEvolutionChainArrowProps {
  evolutionDetail: EvolutionDetail;
}

function PokemonEvolutionDetailComponent({
  evolutionDetail,
}: {
  evolutionDetail: string;
}) {
  return <div className="evolution-detail"> {evolutionDetail} </div>;
}

export default function PokemonEvolutionChainArrow({
  evolutionDetail,
}: PokemonEvolutionChainArrowProps) {
  const simplifiedEvolutionDetailArray =
    simplifyEvolutionDetail(evolutionDetail);

  const simplifiedEvolutionDetail = simplifiedEvolutionDetailArray.map(
    (detail) => {
      return (
        <PokemonEvolutionDetailComponent
          key={detail}
          evolutionDetail={detail}
        />
      );
    }
  );

  return (
    <div className="evolution-chain-arrow-container">
      <img src={evolutionArrow} alt="evolution-arrow" />
      {simplifiedEvolutionDetail.map((detail) => detail)}
    </div>
  );
}
