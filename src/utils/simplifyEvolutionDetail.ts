import { EvolutionDetail } from "../types/evolutionChain/EvolutionDetail";

export default function simplifyEvolutionDetail(
  evolutionDetail: EvolutionDetail
): string[] {
  let simplifiedEvolutionDetailArray: string[] = [];

  const trigger = evolutionDetail.trigger.name;

  if (trigger === "trade") {
    simplifiedEvolutionDetailArray.push(" trade ");
  } else if (trigger === "level-up") {
    simplifiedEvolutionDetailArray.push(" level up ");
  } else if (trigger === "shed") {
    simplifiedEvolutionDetailArray.push(" shed ");
  } else if (trigger === "other") {
    simplifiedEvolutionDetailArray.push(" other ");
  } else {
  }

  for (let [evolutionDetailKey, evolutionDetailValue] of Object.entries(
    evolutionDetail
  )) {
    if (
      evolutionDetailValue !== null &&
      evolutionDetailValue !== "" &&
      evolutionDetailValue !== false
    ) {
      if (evolutionDetailKey === "gender") {
        let gender;
        if (evolutionDetailValue == 1) {
          gender = "male";
        } else {
          gender = "female";
        }
        simplifiedEvolutionDetailArray.push(" be " + gender);
      } else if (
        evolutionDetailKey === "held_item" ||
        evolutionDetailKey === "item"
      ) {
        console.log("hello");
        simplifiedEvolutionDetailArray.push(
          " holding " + evolutionDetailValue.name
        );
      } else if (
        evolutionDetailKey === "known_move" ||
        evolutionDetailKey === "known_move_type"
      ) {
        simplifiedEvolutionDetailArray.push(
          " knowing " + evolutionDetailValue.name
        );
      } else if (evolutionDetailKey === "location") {
        simplifiedEvolutionDetailArray.push(" at " + evolutionDetailValue.name);
      } else if (
        evolutionDetailKey === "min_affection" ||
        evolutionDetailKey === "min_beauty" ||
        evolutionDetailKey === "min_happiness" ||
        evolutionDetailKey === "min_level"
      ) {
        simplifiedEvolutionDetailArray.push(
          " " + evolutionDetailKey.split("_")[1] + " " + evolutionDetailValue
        );
      } else if (evolutionDetailKey === "needs_overworld_rain") {
        simplifiedEvolutionDetailArray.push(" if overworld rain is required ");
      } else if (evolutionDetailKey === "turn_upside_down") {
        simplifiedEvolutionDetailArray.push(" if device is upside down ");
      } else if (
        evolutionDetailKey === "party_species" ||
        evolutionDetailKey === "party_type"
      ) {
        simplifiedEvolutionDetailArray.push(
          " with pokemon of " + evolutionDetailValue.name
        );
      } else if (evolutionDetailKey === "relative_physical_stats") {
        if (evolutionDetailValue == 1) {
          simplifiedEvolutionDetailArray.push(" when attack > defense ");
        } else if (evolutionDetailValue == 0) {
          simplifiedEvolutionDetailArray.push(" when attack = defense ");
        } else {
          simplifiedEvolutionDetailArray.push(" when attack < defense ");
        }
      } else if (evolutionDetailKey === "time_of_day") {
        simplifiedEvolutionDetailArray.push(" at " + evolutionDetailValue);
      } else if (evolutionDetailKey === "trade_species") {
        simplifiedEvolutionDetailArray.push(
          " when traded with pokemon of " + evolutionDetailValue.name
        );
      }
    }
  }
  return simplifiedEvolutionDetailArray;
}
