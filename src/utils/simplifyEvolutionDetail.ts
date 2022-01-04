import { EvolutionDetail } from "../types/evolutionChain/EvolutionDetail";

export default function simplifyEvolutionDetail(
  evolutionDetail: EvolutionDetail
): string {
  const evolutionTrigger = evolutionDetail.trigger.name;

  let simplifiedEvolutionDetail = "";

  // there are a lot of exceptions so we might not handle all cases!
  if (evolutionTrigger === "level-up") {
    if (evolutionDetail.min_level !== null) {
      simplifiedEvolutionDetail =
        simplifiedEvolutionDetail + " at level " + evolutionDetail.min_level;
    }
    if (evolutionDetail.min_happiness !== null) {
      simplifiedEvolutionDetail =
        simplifiedEvolutionDetail +
        " at happiness " +
        evolutionDetail.min_happiness;
    }
    if (evolutionDetail.min_beauty !== null) {
      simplifiedEvolutionDetail =
        simplifiedEvolutionDetail + " at beauty " + evolutionDetail.min_beauty;
    }
    if (evolutionDetail.min_affection !== null) {
      simplifiedEvolutionDetail =
        simplifiedEvolutionDetail +
        " at affection " +
        evolutionDetail.min_affection;
    }
  } else if (evolutionTrigger === "trade") {
    const evolutionHeldItem =
      evolutionDetail.held_item !== null ? evolutionDetail.held_item.name : "";
    simplifiedEvolutionDetail =
      evolutionTrigger + " while holding " + evolutionHeldItem;
  } else if (evolutionTrigger === "use-item") {
    simplifiedEvolutionDetail = " using " + evolutionDetail.item.name;
  } else {
    simplifiedEvolutionDetail = evolutionTrigger;
  }
  return simplifiedEvolutionDetail;
}
